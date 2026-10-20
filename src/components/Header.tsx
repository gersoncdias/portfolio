import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { copy, navigation } from "../data";
import { useTheme } from "../hooks/useTheme";
export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("inicio");
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const update = () => {
      const actions = document.querySelector(".hero-buttons");
      const showNavigation =
        !!actions && actions.getBoundingClientRect().bottom <= 0;
      setVisible(showNavigation);
      if (!showNavigation) setOpen(false);
      let id = "inicio";
      for (const [key] of navigation) {
        const el = document.getElementById(key);
        if (el && el.getBoundingClientRect().top <= 150) id = key;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      )
        id = "contato";
      setActive(id);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <header className={visible ? "header" : "header header-intro"}>
      <div className="header-inner">
        <nav
          id="main-navigation"
          aria-label={copy.navigation}
          className={open ? "navigation open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.getElementById("menu-toggle")?.focus();
            }
          }}
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? copy.lightTheme : copy.darkTheme}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? copy.closeMenu : copy.menu}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

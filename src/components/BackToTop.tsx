import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { copy } from "../data";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function returnToTop() {
    document
      .querySelector<HTMLElement>("#inicio h1")
      ?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  return visible ? (
    <button
      className="back-to-top"
      type="button"
      aria-label={copy.backTop}
      title={copy.backTop}
      onClick={returnToTop}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  ) : null;
}

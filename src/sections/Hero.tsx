import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  MessageSquare,
} from "lucide-react";
import { copy, profile } from "../data";
import { ResumeLink, SocialLinks } from "../components/Shared";
export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-content">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 tabIndex={-1}>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-description">{copy.about[0]}</p>
        <SocialLinks />
        <div className="hero-buttons">
          <a className="button primary" href="#experiencia">
            <BriefcaseBusiness size={17} />
            {copy.experienceCta}
          </a>
          <a className="button secondary" href="#projetos">
            <ArrowUpRight size={17} />
            {copy.projectsCta}
          </a>
          <a className="button secondary" href="#contato">
            <MessageSquare size={17} />
            {copy.contactLink}
          </a>
          <ResumeLink />
        </div>
      </div>
      <a className="hero-down" href="#sobre" aria-label={copy.aboutLink}>
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

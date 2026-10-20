import { Linkedin } from "../components/BrandIcons";
import { ArrowUpRight, BookOpen, Mail } from "lucide-react";
import { articles, copy, profile } from "../data";
import {
  ExternalLink,
  SectionHeading,
  SocialLinks,
} from "../components/Shared";
export function Articles() {
  return (
    <section id="artigos" className="section">
      <SectionHeading title={copy.articlesTitle} />
      {articles.length ? (
        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.url}>
              <span className="tag">{article.topic}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              {article.date && (
                <time dateTime={article.date}>
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "long",
                    timeZone: "UTC",
                  }).format(new Date(article.date))}
                </time>
              )}
              <ExternalLink href={article.url}>
                {copy.read}
                <ArrowUpRight size={16} />
              </ExternalLink>
            </article>
          ))}
        </div>
      ) : (
        <div className="articles-empty">
          <BookOpen size={32} strokeWidth={1.3} />
          <div>
            <h3>{copy.articlesEmpty}</h3>
            <p>{copy.articlesDescription}</p>
          </div>
          <ExternalLink href={profile.linkedin}>
            {copy.linkedinCta}
            <ArrowUpRight size={17} />
          </ExternalLink>
        </div>
      )}
    </section>
  );
}
export function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="contact-content">
        <div className="eyebrow">
          <span className="status-dot" />
          {copy.contactEyebrow}
        </div>
        <h2>{copy.contactTitle}</h2>
        <p>{copy.contactDescription}</p>
        <div className="contact-buttons">
          <ExternalLink href={profile.linkedin} className="button primary">
            <Linkedin size={18} />
            {copy.contactCta}
            <ArrowUpRight size={17} />
          </ExternalLink>
          {profile.email && (
            <a className="button secondary" href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {copy.email}
            </a>
          )}
        </div>
      </div>
      <span className="contact-symbol" aria-hidden="true">
        ↗
      </span>
      <div className="contact-bottom">
        <span>{profile.title}</span>
        <SocialLinks />
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#inicio">
        {profile.name}
        <span className="brand-dot">/</span>
      </a>
      <p>
        © {new Date().getFullYear()} {profile.name}. {copy.footer}
      </p>
      <div className="footer-links">
        <SocialLinks />
      </div>
    </footer>
  );
}

import { Github, Linkedin } from "./BrandIcons";
import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { copy, profile } from "../data";
export function ExternalLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      <ExternalLink href={profile.github} label="GitHub">
        <Github size={19} />
      </ExternalLink>
      <ExternalLink href={profile.linkedin} label="LinkedIn">
        <Linkedin size={19} />
      </ExternalLink>
    </div>
  );
}
export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function ResumeLink({ download = false }: { download?: boolean }) {
  return profile.resume ? (
    <a
      className="button secondary"
      href={`${import.meta.env.BASE_URL}${profile.resume}`}
      download={download || undefined}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
    >
      <Download size={16} />
      {download ? copy.downloadResume : copy.resume}
    </a>
  ) : (
    <span className="resume-unavailable" title={copy.resumePending}>
      <Download size={16} />
      {copy.resumePending}
    </span>
  );
}
export function SafeImage({
  src,
  alt,
  fallback,
  className,
}: {
  src?: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  ) : (
    fallback
  );
}
export function LinkArrow() {
  return <ArrowUpRight size={17} aria-hidden="true" />;
}

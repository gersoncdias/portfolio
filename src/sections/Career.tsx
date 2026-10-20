import {
  Braces,
  Code2,
  GitBranch,
  GraduationCap,
  Layers,
  ScanLine,
} from "lucide-react";
import {
  certifications,
  copy,
  education,
  experiences,
  skills,
  profile,
} from "../data";
import { ExternalLink, SectionHeading, SafeImage } from "../components/Shared";
const skillIcons = [Code2, Braces, ScanLine, GitBranch, Layers];
export function About() {
  return (
    <section id="sobre" className="section about">
      <SectionHeading title={copy.aboutTitle} />
      <div className="about-copy">
        <div className="about-profile">
          <SafeImage
            src={profile.photo}
            alt={copy.photoAlt}
            fallback={
              <div className="monogram" aria-label={profile.name}>
                {profile.initials}
              </div>
            }
          />
          <div>
            <h3>{profile.fullName}</h3>
            <p>{copy.since}</p>
          </div>
        </div>
        <h3 className="eyebrow">{copy.profileHeading}</h3>
        {copy.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h3 className="eyebrow specialties-heading">
          {copy.specialtiesHeading}
        </h3>
        <div className="pillars">
          {copy.pillars.map(([n, title, text]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="company-strip" aria-label={copy.companiesHeading}>
        {experiences.map((job) => (
          <span key={job.company}>{job.company}</span>
        ))}
      </aside>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experiencia" className="section">
      <SectionHeading title={copy.experienceTitle} />
      <div className="timeline">
        {experiences.map((job) => (
          <article className="timeline-item" key={job.company}>
            <div className="job-content">
              <div className="job-heading">
                <h3>{job.company}</h3>
                <span className="job-date">{job.period}</span>
                {job.current && (
                  <span className="tag accent">{copy.current}</span>
                )}
              </div>
              <p className="job-role">{job.role}</p>
              <ul>
                {job.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="competencias" className="section">
      <SectionHeading title={copy.skillsTitle} />
      <div className="skills-grid">
        {skills.map((skill, i) => {
          const Icon = skillIcons[i];
          return (
            <article className="skill-card" key={skill.title}>
              <Icon size={22} />
              <h3>{skill.title}</h3>
              <div className="tags">
                {skill.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="formacao" className="section">
      <SectionHeading title={copy.educationTitle} />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.name}>
            <GraduationCap size={25} />
            <div>
              <div className="eyebrow">
                {item.level} <span> / {item.year}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.institution}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="certifications">
        <h3>{copy.certifications}</h3>
        {certifications.length ? (
          certifications.map((c) => (
            <p key={c.name}>
              {c.url ? (
                <ExternalLink href={c.url}>{c.name}</ExternalLink>
              ) : (
                c.name
              )}{" "}
              · {c.issuer} {c.year}
            </p>
          ))
        ) : (
          <p>{copy.certificationsEmpty}</p>
        )}
      </div>
    </section>
  );
}

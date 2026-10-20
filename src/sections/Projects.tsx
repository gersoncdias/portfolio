import {
  ArrowUpRight,
  Boxes,
  ChevronDown,
  FlaskConical,
  FolderCheck,
  Layers,
} from "lucide-react";
import { caseStudies, copy, projects } from "../data";
import type { CaseStudy, Project } from "../types/content";
import { ExternalLink, SafeImage, SectionHeading } from "../components/Shared";
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = [FolderCheck, Layers, FlaskConical][index % 3];
  return (
    <article className={`project-card project-${index}`}>
      <div className="project-visual">
        <SafeImage
          src={project.image}
          alt={project.name}
          fallback={
            <div className="project-placeholder" aria-hidden="true">
              <div className="project-orbit" />
              <Icon strokeWidth={1.2} />
              <span>{project.name}</span>
              <small>{project.category}</small>
            </div>
          }
        />
        <span className="project-index">0{index + 1}</span>
        {index === 0 && <span className="featured-label">{copy.featured}</span>}
      </div>
      <div className="project-body">
        <div className="eyebrow">{project.category}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <details>
          <summary>
            {copy.details}
            <ChevronDown size={16} />
          </summary>
          <div className="project-details">
            <h4>{copy.features}</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {project.technologies.length > 0 && (
              <>
                <h4>{copy.technologies}</h4>
                <div className="tags">
                  {project.technologies.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </details>
        <div className="project-links">
          {project.demo && (
            <ExternalLink href={project.demo}>
              {copy.demo}
              <ArrowUpRight size={15} />
            </ExternalLink>
          )}
          {project.repository && (
            <ExternalLink href={project.repository}>
              {copy.repository}
              <ArrowUpRight size={15} />
            </ExternalLink>
          )}
          {!project.demo && !project.repository && (
            <span>{copy.linksPending}</span>
          )}
        </div>
      </div>
    </article>
  );
}
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-card">
      <Boxes size={21} />
      <h3>{study.title}</h3>
      {study.status === "preparation" ? (
        <span className="tag">{copy.preparation}</span>
      ) : (
        <details>
          <summary>{copy.details}</summary>
          {Object.entries(copy.caseFields).map(([key, label]) => {
            const value = study[key as keyof CaseStudy];
            return value ? (
              <div key={key}>
                <h4>{label}</h4>
                <p>{Array.isArray(value) ? value.join(", ") : value}</p>
              </div>
            ) : null;
          })}
        </details>
      )}
    </article>
  );
}
export function Projects() {
  return (
    <section id="projetos" className="section">
      <SectionHeading
        title={copy.projectsTitle}
        description={copy.projectsDescription}
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="case-studies">
        <div className="eyebrow">{copy.casesLabel}</div>
        <h3 className="subheading">{copy.casesTitle}</h3>
        <div className="cases-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ArrowUpRight,
  ChevronDown,
  FlaskConical,
  FolderCheck,
  Layers,
} from "lucide-react";
import { copy, projects } from "../data";
import type { Project } from "../types/content";
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
    </section>
  );
}

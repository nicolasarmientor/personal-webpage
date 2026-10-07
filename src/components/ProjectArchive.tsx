import { portfolioProjects } from "../data/portfolio";

export default function ProjectArchive() {
  return (
    <>
      <p className="archive-count">{portfolioProjects.length} projects</p>
      <div className="archive-projects">
        {portfolioProjects.map((project) => (
          <article className="archive-project" id={project.slug} key={project.slug}>
            <div className="archive-project-meta">
              <span>{project.category}</span>
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} repository`}
              >
                Repository ↗
              </a>
            </div>
            <h3>{project.title}</h3>
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ul className="archive-stack" aria-label="Technologies">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}

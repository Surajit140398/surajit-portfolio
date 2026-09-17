import RevealText from "./RevealText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function Projects() {
  const projectsList = [projectsData.ostaagaar, projectsData.ambitionAqua];

  return (
    <section id="projects" className="section projects-section">
      <RevealText elementType="div">
        <p className="section-label reveal-target">02 — PROJECTS</p>
        <h2 className="reveal-target">
          Selected<br />
          <span>Work.</span>
        </h2>
      </RevealText>

      <div className="projects-list">
        {projectsList.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="project-content">
              <div className="project-meta">
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <Link to={`/projects/${project.id}`}>
                  <button className="view-case-study">View Case Study ↗</button>
                </Link>
                {project.website && (
                  <a href={`https://${project.website}`} target="_blank" rel="noopener noreferrer">
                    <button className="view-website">Visit Live Site ↗</button>
                  </a>
                )}
              </div>
            </div>
            
            <Link to={`/projects/${project.id}`} className="project-image-link">
              <div className="project-image-wrapper">
                {project.featuredImage ? (
                  <img 
                    src={project.featuredImage} 
                    alt={project.title} 
                    className="project-featured-image"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="project-placeholder">{project.title}</div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

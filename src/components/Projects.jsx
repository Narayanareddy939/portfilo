import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const flagship = projects.find((p) => p.type === 'flagship');
const gridProjects = projects.filter((p) => p.type === 'card');

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">What I've Built</div>
          <h2 className="sec-h">Projects That <em>Demonstrate Skills</em></h2>
          <p className="sec-p">
            Real-world applications built with React.js, JavaScript, REST APIs, and Python —
            focused on user experience and functionality.
          </p>
        </div>

        {/* Flagship Card */}
        <div className="gov rv dl1">
          <div
            style={{
              width: '100%',
              height: '220px',
              background: 'linear-gradient(135deg, rgba(107,186,181,0.15), rgba(0,123,122,0.08))',
              borderRadius: '12px',
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              border: '1px solid rgba(107,186,181,.15)',
            }}
          >
            🔍
          </div>
          <div className="gov-lbl">{flagship.label}</div>
          <div className="gov-t">{flagship.title}</div>
          <a
            className="gov-badge"
            href={flagship.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={11} /> {flagship.badge}
          </a>
          <div className="gov-desc">{flagship.description}</div>
          <div className="gov-tags">
            {flagship.tags.map((t) => (
              <span className="gtag" key={t}>{t}</span>
            ))}
          </div>
          <div className="gov-btns">
            <a
              className="gov-btn primary"
              href={flagship.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
            <a
              className="gov-btn ghost"
              href={flagship.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={13} /> GitHub
            </a>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="pgrid">
          {gridProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { FiGithub } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import ProjectActions from './ProjectActions';
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
          <img className="gov-img" src={flagship.image} alt={`${flagship.title} live preview`} />
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
          <ProjectActions project={flagship} />
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

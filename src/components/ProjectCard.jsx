import ProjectActions from './ProjectActions';

export default function ProjectCard({ project, index }) {
  return (
    <div className={`pcard rv dl${(index % 4) + 1}`}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="proj-img" />
      ) : (
        <div
          style={{
            width: '100%',
            height: '160px',
            background: index % 2 === 0
              ? 'linear-gradient(135deg, #c8e9e7, #007b7a33)'
              : 'linear-gradient(135deg, #fdddd4, #d98a7233)',
            borderRadius: '10px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            border: '1px solid rgba(107,186,181,.18)',
          }}
        >
          {project.title.includes('Heart Attack') ? '🫀' : '▦'}
        </div>
      )}
      <span className="pc-badge">{project.badge}</span>
      <div className="pc-t">{project.title}</div>
      <div className="pc-d">{project.description}</div>
      <div className="pc-tags">
        {project.tags.map((t) => (
          <span className="ptag" key={t}>{t}</span>
        ))}
      </div>
      <ProjectActions project={project} />
    </div>
  );
}

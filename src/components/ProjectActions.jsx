import { FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi';

const actions = [
  {
    key: 'github',
    label: 'GitHub',
    icon: FiGithub,
    className: 'gh',
    missingMessage: 'This link will be updated soon.',
  },
  {
    key: 'live',
    label: 'Live Demo',
    icon: FiExternalLink,
    className: 'live',
    missingMessage: 'This project does not have a live demo.',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn Post',
    icon: FiLinkedin,
    className: 'live',
    missingMessage: 'This link will be updated soon.',
  },
];

export default function ProjectActions({ project }) {
  return (
    <div className="pc-btns">
      {actions.map(({ key, label, icon: Icon, className, missingMessage }) => (
        project[key] ? (
          <a
            className={`pc-btn ${className}`}
            href={project[key]}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={13} /> {label}
          </a>
        ) : (
          <button
            className={`pc-btn ${className}`}
            key={key}
            onClick={() => alert(missingMessage)}
            type="button"
          >
            <Icon size={13} /> {label}
          </button>
        )
      ))}
    </div>
  );
}

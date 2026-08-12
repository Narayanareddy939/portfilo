import { FiBookOpen, FiFileText } from 'react-icons/fi';

export default function PublicationCard({ pub }) {
  return (
    <div className="pub-card rv dl1">
      <div className="pub-icon">📄</div>
      <div className="pub-body">
        <div className="pub-meta">{pub.type} · {pub.year}</div>
        <div className="pub-title">"{pub.title}"</div>
        <div className="pub-journal">
          {pub.journal} — {pub.volume}
          <br />
          <span style={{ color: 'var(--is)', fontSize: '.82rem' }}>{pub.issn}</span>
        </div>
        {pub.description && (
          <p style={{ fontSize: '.84rem', color: 'var(--im)', lineHeight: 1.65, marginTop: '.6rem' }}>
            {pub.description}
          </p>
        )}
        <div className="pub-tags">
          {pub.tags.map((t) => (
            <span className="pub-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="pub-btns">
          {pub.readUrl ? (
            <a className="pub-btn read" href={pub.readUrl} target="_blank" rel="noopener noreferrer">
              <FiBookOpen size={13} /> Read Publication
            </a>
          ) : (
            <span className="pub-btn read" style={{ opacity: 0.7, cursor: 'default' }}>
              <FiBookOpen size={13} /> Read Publication
            </span>
          )}
          {pub.pdfUrl ? (
            <a className="pub-btn pdf" href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
              <FiFileText size={13} /> View PDF
            </a>
          ) : (
            <span className="pub-btn pdf" style={{ opacity: 0.7, cursor: 'default' }}>
              <FiFileText size={13} /> View PDF
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

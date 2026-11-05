import { FiEye, FiDownload, FiCheckCircle } from 'react-icons/fi';

export default function CertificateCard({ cert }) {
  function handleDownload() {
    if (cert.downloadUrl) {
      const a = document.createElement('a');
      a.href = cert.downloadUrl;
      a.download = `${cert.name}_Certificate.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert(`Download not available yet for ${cert.name} certificate.\nVisit: ${cert.viewUrl}`);
    }
  }

  return (
    <div className="ccard">
      <div className="ccard-top">
        <div className="cchk" style={{ background: cert.color }}>
          <FiCheckCircle className="cchk-icon" />
        </div>
        <div className="c-info">
          <div className="c-n">{cert.name}</div>
          <div className="c-o">{cert.issuer}</div>
          <div className="c-date">{cert.date}</div>
        </div>
      </div>
      <div className="cert-btns">
        {cert.viewUrl ? (
          <a
            className="cert-btn view"
            href={cert.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiEye size={13} /> View Certificate
          </a>
        ) : (
          <span className="cert-btn view" style={{ opacity: 0.7, cursor: 'default' }}>
            <FiEye size={13} /> Certificate link will be updated soon.
          </span>
        )}
        <button className="cert-btn dl" onClick={handleDownload}>
          <FiDownload size={13} /> Download
        </button>
      </div>
    </div>
  );
}

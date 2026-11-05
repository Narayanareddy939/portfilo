import CertificateCard from './CertificateCard';
import { certificates } from '../data/certificates';

export default function Certifications() {
  return (
    <section id="certifications" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">Credentials &amp; Recognition</div>
          <h2 className="sec-h">Certifications <em>&amp; Highlights</em></h2>
          <p className="sec-p">
            Certified in JavaScript and React.js while building full-stack capability across web,
            data, and application workflows.
          </p>
        </div>

        <div className="bal-row rv dl1">
          <div className="bal tech">
            <div className="bal-t">Technical Capability</div>
            <div className="bal-d">
              Full-stack developer with hands-on experience in React.js, JavaScript, Python, API
              integration, and data-driven product development.
            </div>
            <div className="bskills">
              {['Python', 'JavaScript', 'React.js', 'HTML5', 'CSS3', 'REST APIs', 'MongoDB', 'Pandas', 'NumPy'].map((s) => (
                <span className="bsk" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="bal biz">
            <div className="bal-t">Core CS Concepts</div>
            <div className="bal-d">
              Strong computer science foundation with emphasis on problem solving, data structures,
              OOP, backend workflows, and database management.
            </div>
            <div className="bskills">
              {['Data Structures & Algorithms', 'OOP', 'DBMS', 'Git & GitHub', 'React Hooks', 'Component-Based Architecture'].map((s) => (
                <span className="bsk" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="eyebrow rv dl2" style={{ marginBottom: '1rem' }}>
          Certifications Earned
        </div>
        <div className="cgrid rv dl2">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

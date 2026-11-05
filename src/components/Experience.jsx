const experiences = [
  {
    initial: 'M',
    role: 'AI/ML Intern',
    period: 'July 2025 – September 2025 · 3 Months',
    org: 'MS Intern Solutions',
    points: [
      'Built data-driven solutions using Python, Pandas, NumPy, and Scikit-learn for model development and evaluation.',
      'Performed preprocessing, exploratory analysis, and feature engineering to improve practical outcomes.',
      'Applied machine learning workflows while strengthening full-stack and product-oriented problem solving.',
    ],
    delay: 'dl1',
  },
  {
    initial: 'P',
    role: 'IEEE Tech Week 2025 — Participant',
    period: '2025',
    org: 'IEEE — Presidency University, Bengaluru',
    points: [
      'Participated in IEEE Tech Week 2025 and received a Participation Certificate.',
      'Engaged with cutting-edge technology presentations, workshops, and networking sessions.',
    ],
    delay: 'dl2',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">Where I've Grown</div>
          <h2 className="sec-h">Professional <em>Experience</em></h2>
          <p className="sec-p">
            Building end-to-end technical skills across frontend development, backend integration, data
            workflows, and product-focused problem solving.
          </p>
        </div>
        <div className="ecards">
          {experiences.map((exp) => (
            <div className={`ecard rv ${exp.delay}`} key={exp.role}>
              <div className="ecard-m">{exp.initial}</div>
              <div>
                <div className="ecard-head">
                  <div className="ecard-role">{exp.role}</div>
                  <span className="ecard-per">{exp.period}</span>
                </div>
                <div className="ecard-org">{exp.org}</div>
                <ul className="ecard-pts">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

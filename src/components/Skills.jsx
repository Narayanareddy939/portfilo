const skillRows = [
  {
    phase: 'Primary',
    title: 'Programming',
    sub: 'Core Languages',
    skills: ['Python', 'JavaScript (ES6+)', 'SQL'],
    delay: 'dl1',
  },
  {
    phase: 'Frontend',
    title: 'Web Development',
    sub: 'UI & Responsive Design',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Web Design', 'React Hooks', 'Component-Based Architecture'],
    delay: 'dl2',
  },
  {
    phase: 'Backend & API',
    title: 'Full Stack Skills',
    sub: 'APIs, Auth & Data',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JSON', 'Authentication', 'MongoDB', 'MySQL', 'Snowflake'],
    delay: 'dl3',
  },
  {
    phase: 'Tools & Concepts',
    title: 'Dev Tools & CS Fundamentals',
    sub: 'Tools & Core CS',
    skills: ['Git', 'GitHub', 'VS Code', 'DBMS', 'Data Structures & Algorithms', 'OOP', 'Pandas', 'NumPy', 'Scikit-learn'],
    delay: 'dl4',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">My Technical Stack</div>
          <h2 className="sec-h">Skills Built <em>Intentionally</em></h2>
          <p className="sec-p">
            Full-stack technical skills with hands-on experience in frontend engineering, backend logic,
            APIs, data workflows, and product delivery.
          </p>
        </div>
        <div className="srows">
          {skillRows.map((row) => (
            <div className={`srow rv ${row.delay}`} key={row.title}>
              <div>
                <div className="srow-ph">{row.phase}</div>
                <div className="srow-t">{row.title}</div>
                <div className="srow-p">{row.sub}</div>
              </div>
              <div className="spills">
                {row.skills.map((s) => (
                  <span className="spill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

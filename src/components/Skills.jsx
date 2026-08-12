const skillRows = [
  {
    phase: 'Primary',
    title: 'Programming',
    sub: 'Core Languages',
    skills: ['Python', 'JavaScript (ES6+)'],
    delay: 'dl1',
  },
  {
    phase: 'Frontend',
    title: 'Web Development',
    sub: 'UI & Responsive Design',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design', 'React Hooks', 'Component-Based Architecture'],
    delay: 'dl2',
  },
  {
    phase: 'Web & API',
    title: 'Integration Skills',
    sub: 'APIs & Data',
    skills: ['REST APIs', 'JSON', 'SQL', 'MongoDB'],
    delay: 'dl3',
  },
  {
    phase: 'Tools & Concepts',
    title: 'Dev Tools & CS Fundamentals',
    sub: 'Tools & Core CS',
    skills: ['Git', 'GitHub', 'VS Code', 'Data Structures & Algorithms', 'OOP', 'DBMS', 'Pandas', 'NumPy', 'Scikit-learn'],
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
            Frontend-focused technical skills with strong Python foundations and real-world project
            experience.
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

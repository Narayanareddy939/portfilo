export default function About() {
  return (
    <section id="about" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">The Developer's Story</div>
          <h2 className="sec-h">About <em>Me</em></h2>
          <p className="sec-p">A journey shaped by curiosity, code, and the drive to build technology that genuinely helps people.</p>
        </div>
        <div className="about-grid">
          <div className="prose rv dl1">
            <p>
              I'm <strong>N Lakshmi Narayana Reddy</strong> — a <strong>Full Stack Developer</strong> and
              Computer Science Engineering (Data Science) undergraduate at <strong>Presidency University,
              Bengaluru</strong>. I enjoy building end-to-end digital products that combine responsive
              frontend experiences with reliable backend logic, APIs, and database-driven workflows.
            </p>
            <p>
              My work spans React.js, JavaScript, Python, REST APIs, authentication flows, data handling,
              and practical problem solving. I’ve built full-stack applications, contributed to AI/ML
              projects, and focused on creating solutions that are useful, scalable, and user-friendly.
            </p>
            <div className="pullq">
              "Good products are built with clear thinking, clean interfaces, and dependable backend logic.
              I care about building experiences that work beautifully and perform reliably."
            </div>
            <p>
              I am currently growing as a <strong>Full Stack Developer</strong> by strengthening my skills in
              frontend architecture, backend integration, data workflows, and deployment while pursuing my
              B.Tech and working on practical projects with real-world impact.
            </p>
            <div className="tl rv dl2">
              <div className="tl-lbl">My Journey</div>
              {[
                {
                  year: '2023 – 2027',
                  title: 'B.Tech CSE (Data Science) — Presidency University',
                  desc: 'Bengaluru. CGPA 8.23. Building strong foundation in Python, DSA, DBMS, and modern web development.',
                  filled: true,
                },
                {
                  year: 'July 2025 – September 2025',
                  title: 'AI/ML Intern — MS Intern Solutions',
                  desc: 'Developed ML models using Python, Pandas, NumPy, Scikit-learn. End-to-end machine learning workflows.',
                  filled: true,
                },
                {
                  year: '2025',
                  title: 'IEEE Tech Week 2025',
                  desc: 'Participated and received a Participation Certificate at the IEEE Tech Week 2025 event.',
                  filled: true,
                },
                {
                  year: '2026 →',
                  title: 'Building the Next Chapter',
                  desc: 'Seeking full stack developer roles focused on frontend engineering, backend systems, APIs, and scalable product development.',
                  filled: false,
                },
              ].map((item, i) => (
                <div className="tl-item" key={i}>
                  <div className={`tl-dot${item.filled ? ' f' : ''}`}></div>
                  <div>
                    <div className="tl-yr">{item.year}</div>
                    <div className="tl-ti">{item.title}</div>
                    <div className="tl-de">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rv dl2">
            <div className="acards">
              {[
                {
                  title: 'Career Direction',
                  desc: 'Full Stack Developer focused on building responsive interfaces, secure backend logic, API-driven workflows, and practical product experiences.',
                  tag: 'Full Stack → Developer',
                },
                {
                  title: 'Biggest Project',
                  desc: 'Built FindIt — a full-stack lost-and-found platform with authentication, item management, search workflows, and AI-assisted categorization.',
                  tag: 'Full Project',
                },
                {
                  title: 'What Drives Me',
                  desc: 'Creating applications that combine smooth user experiences with reliable backend systems, clean data flows, and real-world utility.',
                  tag: 'User-Centred Dev',
                },
              ].map((c) => (
                <div className="acard" key={c.title}>
                  <div className="acard-t">{c.title}</div>
                  <div className="acard-d">{c.desc}</div>
                  <span className="acard-tag">{c.tag}</span>
                </div>
              ))}
            </div>
            <div className="int-t">Beyond Work</div>
            <div className="int-grid">
              {[
                { title: 'API Design', desc: 'Exploring clean REST API design patterns and backend workflows to improve developer experience and application reliability.' },
                { title: 'Product Thinking', desc: 'Designing features around user needs, workflow clarity, and practical value from concept to deployment.' },
                { title: 'Problem Solving', desc: 'Practicing Data Structures & Algorithms to sharpen coding skills and improve engineering fundamentals.' },
                { title: 'Tech Trends', desc: 'Keeping up with frontend frameworks, backend optimization, cloud deployment, and AI-driven product experiences.' },
              ].map((item) => (
                <div className="icard" key={item.title}>
                  <div className="icard-t">{item.title}</div>
                  <div className="icard-d">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

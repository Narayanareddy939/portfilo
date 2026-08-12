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
              I'm <strong>N Lakshmi Narayana Reddy</strong> — a Computer Science Engineering (Data Science)
              undergraduate at <strong>Presidency University, Bengaluru</strong>, with a strong foundation in
              Python, problem solving, data structures, and software development. I have hands-on experience
              building responsive web applications using React.js, JavaScript, HTML5, and CSS3.
            </p>
            <p>
              I enjoy creating user-focused interfaces, working with APIs, and developing practical
              applications. I also have prior AI/ML internship experience and experience working with
              Python-based machine learning technologies.
            </p>
            <div className="pullq">
              "Building for users means understanding them first. Every component I write, every API I
              integrate — it all starts with asking: does this actually help someone?"
            </div>
            <p>
              Currently I am deepening my <strong>React.js and JavaScript</strong> skills while pursuing my
              B.Tech, and looking for opportunities where I can contribute to real-world frontend projects,
              grow as a developer, and deliver meaningful user experiences.
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
                  desc: 'Seeking frontend developer roles. Growing with React.js, REST APIs, and responsive design at scale.',
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
                  desc: 'Aspiring Frontend Developer focused on React.js, JavaScript, and Python. Goal: join a team where I can build impactful, user-centric web applications and grow as a software engineer.',
                  tag: 'Frontend → Developer',
                },
                {
                  title: 'Biggest Project',
                  desc: 'Built FindIt — an AI-powered Lost & Found platform using React.js, REST APIs, Google Gemini AI, MongoDB Atlas and Cloudinary for image management.',
                  tag: 'Full Project',
                },
                {
                  title: 'What Drives Me',
                  desc: 'The intersection of clean UI and real functionality. I believe the best applications feel effortless to use because of the effort put into building them right.',
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
                { title: 'Open Source Exploration', desc: 'Exploring open source projects to understand real-world codebases and contribute where possible.' },
                { title: 'UI/UX Curiosity', desc: 'Studying design systems and user experience principles to build visually polished, accessible interfaces.' },
                { title: 'Problem Solving', desc: 'Practicing Data Structures & Algorithms to sharpen coding skills and improve engineering fundamentals.' },
                { title: 'Tech Trends', desc: 'Keeping up with the latest in frontend frameworks, AI integration, and web performance best practices.' },
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

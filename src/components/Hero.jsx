import { useEffect, useRef } from 'react';

function dlResume() {
  const a = document.createElement('a');
  a.href = '/NARAYANA_Frontend_RESUME.pdf';
  a.download = 'NARAYANA_Frontend_RESUME.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const cols = [
      'rgba(107,186,181,',
      'rgba(253,221,212,',
      'rgba(217,138,114,',
      'rgba(0,123,122,',
    ];
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      a: Math.random() * 0.38 + 0.1,
      col: cols[Math.floor(Math.random() * 4)],
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = c.width;
        if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height;
        if (p.y > c.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + p.a + ')';
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg">
        <canvas id="pCanvas" ref={canvasRef}></canvas>
        <div className="hblob hb1"></div>
        <div className="hblob hb2"></div>
        <div className="hblob hb3"></div>
        <div className="hero-dots"></div>
      </div>

      {/* LEFT 60% */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>Open to Opportunities
        </div>
        <h1 className="hero-name">
          <span className="n1">N Lakshmi</span>
          <span className="n2">Narayana Reddy</span>
        </h1>
        <p className="hero-title">Frontend Developer | CSE (Data Science)</p>
        <p className="hero-sub">
          <strong>CSE (Data Science) undergraduate</strong> with strong Python skills and hands-on
          experience building responsive web applications using React.js, JavaScript, HTML5, and
          CSS3.
        </p>
        <div className="hero-stats">
          <div>
            <div className="hstat-n">3+</div>
            <div className="hstat-l">Projects</div>
          </div>
          <div>
            <div className="hstat-n">AI/ML</div>
            <div className="hstat-l">Internship</div>
          </div>
          <div>
            <div className="hstat-n">8.23</div>
            <div className="hstat-l">CGPA</div>
          </div>
          <div>
            <div className="hstat-n">2</div>
            <div className="hstat-l">Certifications</div>
          </div>
        </div>
        <div className="hero-cta">
          <a className="btn-fill" href="#projects">View Projects</a>
          <a className="btn-outline" href="#contact">Contact Me</a>
          <button className="btn-ghost" onClick={dlResume}>Download Resume</button>
        </div>
      </div>

      {/* RIGHT 40% */}
      <div className="hero-right">
        <div className="photo-scene">
          <div className="pr pr1"></div>
          <div className="pr pr2"></div>
          <div className="pr pr3"></div>
          <div className="photo-glow"></div>
          <div className="pb">
            <img src="/Narayana_profile.jpeg" alt="N Lakshmi Narayana Reddy" />
          </div>
          <div className="fchip fc1">
            <div className="fchip-v">React.js</div>
            <div className="fchip-l">Frontend Dev</div>
          </div>
          <div className="fchip fc2">
            <div className="fchip-v">Python</div>
            <div className="fchip-l">Primary Lang</div>
          </div>
          <div className="fchip fc3">
            <div className="fchip-v">AI/ML</div>
            <div className="fchip-l">Internship</div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

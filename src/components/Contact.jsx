function dlResume() {
  const a = document.createElement('a');
  a.href = `${import.meta.env.BASE_URL}NARAYANA_Frontend_RESUME.pdf`;
  a.download = 'NARAYANA_Frontend_RESUME.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const contactLinks = [
  {
    href: 'https://www.linkedin.com/in/narayanareddy-n',
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/narayanareddy-n',
    target: '_blank',
  },
  {
    href: 'https://github.com/Narayanareddy939',
    icon: 'gh',
    label: 'GitHub',
    value: 'github.com/Narayanareddy939',
    target: '_blank',
  },
  {
    href: 'mailto:chenna89782@gmail.com',
    icon: '@',
    label: 'Email',
    value: 'chenna89782@gmail.com',
    target: undefined,
  },
  {
    href: 'tel:+919390334721',
    icon: '#',
    label: 'Phone',
    value: '+91 9390334721',
    target: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="cg1"></div>
      <div className="cg2"></div>
      <div className="con">
        <div className="contact-inner rv">
          <div className="c-eyebrow">Let's Connect</div>
          <h2 className="c-heading">
            Open to <em>Great Opportunities</em>
          </h2>
          <p className="c-sub">
            Whether you're a recruiter, a company, or someone building something interesting — I'd
            love to be part of the conversation.
          </p>
          <div className="clinks">
            {contactLinks.map((link) => (
              <a
                className="clink"
                href={link.href}
                key={link.label}
                target={link.target}
                rel={link.target ? 'noopener noreferrer' : undefined}
              >
                <div className="clink-ico">{link.icon}</div>
                <div>
                  <div className="clink-lbl">{link.label}</div>
                  <div className="clink-val">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-btns">
            <a
              className="cbtn p"
              href="https://www.linkedin.com/in/narayanareddy-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <button className="cbtn g" onClick={dlResume}>
              Download Resume
            </button>
          </div>
        </div>
        <div className="footer-row">
          <p>© 2026 N Lakshmi Narayana Reddy. All rights reserved.</p>
          <p>Bengaluru, Karnataka · Open to Opportunities</p>
        </div>
      </div>
    </section>
  );
}

import PublicationCard from './PublicationCard';
import { publications } from '../data/publications';

export default function Publications() {
  return (
    <section id="publication" className="sec">
      <div className="con">
        <div className="rv">
          <div className="eyebrow">Research &amp; Academic Work</div>
          <h2 className="sec-h">Publication</h2>
          <p className="sec-p">Peer-reviewed research on cybersecurity and identity protection.</p>
        </div>
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
}

export default function WaveDivider({ fill, path }) {
  return (
    <div className="wdiv">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}

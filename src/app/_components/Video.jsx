export default function Video({
  width = "450",
  src,
  className,
  height = "100",
}) {
  return (
    <video
      width={width}
      height={height}
      className={`rounded-2xl shadow-md z-20 ${className}`}
      loop
      autoPlay
      muted
    >
      <source src={src} type="video/webm" />
      <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

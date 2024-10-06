export default function TopSection({ icon, text }) {
  return (
    <div className="flex items-center justify-center gap-4 border-[3px] border-purple-300 bg-white p-4 rounded-xl h-full">
      <img src={icon} alt="icon" />
      <span>{text}</span>
    </div>
  );
}

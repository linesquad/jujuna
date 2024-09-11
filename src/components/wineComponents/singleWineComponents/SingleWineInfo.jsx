export default function SingleWineInfo({ title, value }) {
  return (
    <div className="mt-1">
      <span>{title}: </span>
      <span className="text-[#5e636d]"> {value}</span>
    </div>
  );
}

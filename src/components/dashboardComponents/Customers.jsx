export default function Customers() {
  return (
    <div className="bg-white border-[3px] border-purple-300 rounded-xl p-4 h-full">
      <h2 className="mb-4 text-center">New Customers</h2>
      <div className="flex justify-between mt-4">
        <p>Last week</p> <span>+12</span>
      </div>
      <div className="flex justify-between mt-4">
        <p>Last month</p> <span>+42</span>
      </div>
      <div className="flex justify-between mt-4">
        <p>Last year</p> <span>+142</span>
      </div>
    </div>
  );
}

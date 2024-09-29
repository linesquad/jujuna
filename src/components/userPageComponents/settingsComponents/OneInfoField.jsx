function OneInfoField({ title, description }) {
  return (
    <div className="flex flex-col gap-[16px] mt-[32px] pb-[24px] border-b-[1px] border-b-[#E2E5E8]">
      <div className="flex justify-between">
        <p className="text-[14px] text-[#222528] font-medium">{title}</p>
        <p className="text-[#724AA4] font-medium">Edit</p>
      </div>
      <p className="text-[#222528] font-medium">{description}</p>
    </div>
  );
}

export default OneInfoField;

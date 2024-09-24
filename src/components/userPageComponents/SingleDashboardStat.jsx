function SingleDashboardStat({ icon: Icon, title, value, iconcolor, iconBg }) {
  return (
    <div className="h-[84px] w-full bg-[#fff] border border-[#E3E8EC] rounded-[10px] pl-[24px] py-[20px] flex items-center gap-[16px]">
      <div
        className={`w-[44px] h-[44px] rounded-[8px] flex justify-center items-center`}
        style={{ backgroundColor: iconBg }}
      >
        <Icon color={iconcolor} />
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] text-[#5D6264]">{title}</p>
        <p className="text-[24px] text-[#000000] font-medium">{value}</p>
      </div>
    </div>
  );
}

export default SingleDashboardStat;

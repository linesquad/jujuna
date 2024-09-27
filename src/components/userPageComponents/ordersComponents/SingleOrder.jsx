function SingleOrder({ orderId, price, date, status }) {
  return (
    <div className="flex justify-between pb-[20px] border-b-[1px] border-b-[#ECEDEE]">
      <div className="flex flex-col gap-[9px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-[14px] text-[#5D6264]">Order ID:</p>
          <p className="text-[#222528] font-medium">#{orderId}</p>
        </div>
        <p className="text-[14px] text-[#5D6264]">X1</p>
        <p className="text-[#724AA4] font-medium">{price}Gel</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <p className="text-[#5D6264] text-[12px]">{date}</p>
        <p
          className="text-[14px] text-[#E8B11A]"
          style={{
            color:
              status === "Current"
                ? "#E8B11A"
                : status === "Cancelled"
                ? "#E81A1A"
                : status === "completed"
                ? "#4FD82C"
                : "",
          }}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

export default SingleOrder;

import { useEffect, useRef, useState } from "react";

function OneInfoField({ title, description }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="flex flex-col gap-[16px] mt-[32px] pb-[24px] border-b-[1px] border-b-[#E2E5E8]">
      <div className="flex justify-between">
        <p className="text-[14px] text-[#222528] font-medium">{title}</p>

        <p
          className="text-[#724AA4] font-medium cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </p>
      </div>
      {!isEditing ? (
        <p className="text-[#222528] font-medium">{description}</p>
      ) : (
        <input
          ref={inputRef}
          type="text"
          defaultValue={description}
          className=" text-[#222528] font-medium"
        />
      )}
    </div>
  );
}

export default OneInfoField;

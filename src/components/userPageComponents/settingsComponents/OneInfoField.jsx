import { useEffect, useRef, useState } from "react";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

function OneInfoField({ title, description, type }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedDescription, setChangedDescription] = useState(description);
  const inputRef = useRef(null);
  const { mutate } = useUpdateProfile();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleCancel = () => {
    setChangedDescription(description);
    setIsEditing(false);
  };

  const handleSubmit = () => {
    if (description === changedDescription || changedDescription.length === 0) {
      setIsEditing(false);
      return;
    }
    mutate({
      [type]: changedDescription,
    });
  };

  return (
    <div className="flex flex-col gap-[16px] mt-[32px] pb-[24px] border-b-[1px] border-b-[#E2E5E8]">
      <div className="flex justify-between">
        <p className="text-[14px] text-[#222528] font-medium">{title}</p>

        <p
          className="text-[#724AA4] font-medium cursor-pointer"
          onClick={() => {
            setIsEditing(true);
          }}
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
          onChange={(e) => setChangedDescription(e.target.value)}
          className=" text-[#222528] font-medium bg-transparent border-none outline-none"
        />
      )}
      {isEditing && (
        <div className="flex items-center gap-[20px] justify-end">
          <button
            className="w-[100px] p-[6px] bg-red-700 text-[#fff] rounded-[10px] self-end"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="w-[100px] p-[6px] bg-[#000] text-[#fff] rounded-[10px] self-end"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default OneInfoField;

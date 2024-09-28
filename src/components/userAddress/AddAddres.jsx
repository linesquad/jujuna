import { useState } from "react";
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import LeafletMap from "./LeafletMap";

const AddAddres = () => {
  const [showMap, setShowMap] = useState(false);

  const handleToggleMap = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-3">
        <h1 className="font-semibold text-[#222528] text-[26px]">Address</h1>
        <div
          className="flex items-center justify-center bg-[#724AA4] rounded-lg text-white py-[10px] 
      px-6 text-base font-medium gap-[5px] cursor-pointer"
          onClick={handleToggleMap}
        >
          <FaPlus color="white" />
          <button className="">Add addres</button>
        </div>
      </div>
      {showMap && <LeafletMap setShowMap={setShowMap} />}

      <div className="pt-3 ">
        <div className="p-4 bg-white rounded-md border flex justify-between items-center">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#EFEAF4] p-2 rounded-lg">
              <FaMapMarkerAlt size={30} color="#724AA4" />
            </div>
            <div>
              <h1 className="font-medium text-base text-[#222528]">
                Street, City, Country
              </h1>
              <p className="text-sm text-[#3A4043]">Appartment</p>
            </div>
          </div>
          <div>...</div>
        </div>
      </div>
    </div>
  );
};

export default AddAddres;

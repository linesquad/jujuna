import { useState } from "react";
import { FaEdit, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import LeafletMap from "./LeafletMap";
import useGetAddress from "../../hooks/useGetAddress";
import { MdDelete } from "react-icons/md";
import useDeleteAddress from "../../hooks/useDeleteAddress";

const AddAddres = () => {
  const [showMap, setShowMap] = useState(false);
  const { data, isError, error, isLoading, refetch } = useGetAddress();
  const deleteAddress = useDeleteAddress();

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
      {showMap && (
        <LeafletMap setShowMap={setShowMap} refetchAddresses={refetch} />
      )}

      {data ? (
        <div className="pt-3 ">
          <div className="p-4 bg-white rounded-md border flex justify-between items-center">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#EFEAF4] p-2 rounded-lg">
                <FaMapMarkerAlt size={30} color="#724AA4" />
              </div>
              <div>
                <h1 className="font-medium text-base text-[#222528]">
                  {`${data.address1}, ${data.city}, ${data.country}`}
                </h1>
                <p className="text-sm text-[#3A4043]">{data.state}</p>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col gap-2 items-center justify-center">
              <FaEdit size={20} onClick={handleToggleMap} />
              <MdDelete size={20} onClick={deleteAddress} />
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : null}
    </div>
  );
};

export default AddAddres;

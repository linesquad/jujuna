import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const MapClickHandler = ({
  setMarkerPosition,
  setMapPosition,
  setShowAddAddress,
}) => {
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      setMapPosition([lat, lng]);
      navigate(`/userPage/address?lat=${lat}&lng=${lng}`);
      setShowAddAddress(true);
    },
  });

  return null;
};

export default MapClickHandler;

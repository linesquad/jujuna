import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useGeolocation } from "../../hooks/useGeolocation";

const LeafletMap = () => {
  const [mapPosition, setMapPosition] = useState([41.8354, 44.7215]);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
    error: geolocationError,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  const navigate = useNavigate();
  const mapRef = useRef();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([parseFloat(mapLat), parseFloat(mapLng)]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition && mapRef.current) {
      const { lat, lng } = geolocationPosition;
      setMapPosition([lat, lng]);
      mapRef.current.setView([lat, lng], 13);
      navigate(`/userPage/address?lat=${lat}&lng=${lng}`);
      setShowAddAddress(true);
    }
  }, [geolocationPosition, navigate]);

  const handleGetPosition = () => {
    getPosition();
  };

  const handleAddAddress = () => {
    alert(
      `Address added: Latitude ${mapPosition[0]}, Longitude ${mapPosition[1]}`
    );
  };

  return (
    <div className="relative">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-96"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            Your Location <br /> Latitude: {mapPosition[0]} <br /> Longitude:
            {mapPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>

      <div className="absolute z-[1000] bottom-4 left-0 w-full flex">
        <button
          className="mx-auto cursor-pointer bg-[#724AA4] p-2 rounded-md text-white font-semibold"
          onClick={handleGetPosition}
        >
          {isLoadingPosition
            ? "Loading..."
            : geolocationError
            ? `error: ${geolocationError}`
            : "get location"}
        </button>

        {showAddAddress && (
          <button
            className="mt-2 cursor-pointer bg-[#28A745] p-2 rounded-md text-white font-semibold"
            onClick={handleAddAddress}
          >
            Add Address
          </button>
        )}
      </div>
    </div>
  );
};

export default LeafletMap;

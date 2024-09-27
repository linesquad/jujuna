import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useNavigate } from "react-router-dom";

function UserAddress() {
  const [mapPosition, setMapPosition] = useState([40, 0]); // Default position (Spain)
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
    error: geolocationError,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  const navigate = useNavigate();
  const mapRef = useRef(); // Reference to the map instance

  // Update map position from URL coordinates if available
  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([parseFloat(mapLat), parseFloat(mapLng)]);
    }
  }, [mapLat, mapLng]);

  // Update the map position when geolocation is obtained
  useEffect(() => {
    if (geolocationPosition && mapRef.current) {
      const { lat, lng } = geolocationPosition;
      setMapPosition([lat, lng]);
      mapRef.current.setView([lat, lng], 13); // Use setView to move the map
      navigate(`/userPage/address?lat=${lat}&lng=${lng}`); // Update URL with geolocation
    }
  }, [geolocationPosition, navigate]);

  // Function to get the current location
  const handleGetPosition = () => {
    getPosition(); // Fetch geolocation
  };

  return (
    <>
      <button onClick={handleGetPosition}>Get Current Location</button>
      {isLoadingPosition && <p>Loading your location...</p>}
      {geolocationError && <p>Error: {geolocationError}</p>}

      <MapContainer
        center={mapPosition} // Center the map on the current position
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-96"
        ref={mapRef} // Reference to the map instance
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            Your Location <br /> Latitude: {mapPosition[0]} <br /> Longitude:{" "}
            {mapPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>

      {/* Display Latitude and Longitude */}
      <p>
        Latitude: {mapPosition[0]} <br />
        Longitude: {mapPosition[1]}
      </p>
    </>
  );
}

export default UserAddress;

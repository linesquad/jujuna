import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Wrapper from "../Wrapper";

function Map() {
  return (
    <Wrapper>
      <MapContainer
        center={[41.583331, 44.083333]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[90vh] z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.583331, 44.083333]}></Marker>
      </MapContainer>
    </Wrapper>
  );
}

export default Map;

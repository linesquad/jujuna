import { useEffect, useState, useCallback } from "react";

const useNominatim = (latitude, longitude) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [suburb, setSuburb] = useState("");
  const [road, setRoad] = useState("");

  console.log(address);

  const getAddress = useCallback(async () => {
    if (!latitude || !longitude) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }
      const data = await response.json();
      setAddress(data.display_name);

      const cityComponent =
        data.address?.city || data.address?.town || data.address?.village || "";
      setCity(cityComponent);

      const postcodeComponent = data.address?.postcode || "";
      setPostcode(postcodeComponent);

      const countryComponent = data.address?.country || "";
      setCountry(countryComponent);

      const suburbComponent = data.address?.suburb || "";
      setSuburb(suburbComponent);

      const roadComponent = data.address?.road || "";
      setRoad(roadComponent);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    getAddress();
  }, [getAddress]);
  return { city, postcode, address, country, suburb, road, loading, error };
};

export default useNominatim;

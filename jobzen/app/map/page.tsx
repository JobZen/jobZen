import React, { useEffect, useRef } from "react";
import L, { LatLngExpression } from "leaflet";

interface MapProps {
  jobOwnerAddress: string;
}

const JobLocation: React.FC<MapProps> = ({ jobOwnerAddress }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  let map: L.Map | null = null;
  let marker: L.Marker | null = null;

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            jobOwnerAddress
          )}&key=2a7f362470b248859501f7693ef0a73b`
        );

        const data = await response.json();

        if (data && data.results.length > 0) {
          const coordinates: LatLngExpression = [
            data.results[0].geometry.lat,
            data.results[0].geometry.lng,
          ];

          if (!map) {
            map = L.map(mapContainerRef.current!, {
              zoomControl: false,
            }).setView(coordinates, 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            const zoomControl = L.control.zoom({
              position: "bottomright",
            });

            zoomControl.addTo(map);

            const customIcon = new L.Icon({
              iconUrl:
                "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-01-512.png",
              iconSize: [35, 35],
              iconAnchor: [17, 35],
            });

            marker = L.marker(coordinates, { icon: customIcon }).addTo(map);
          } else {
            map.setView(coordinates, 13);
            marker?.setLatLng(coordinates);
          }
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    };

    if (jobOwnerAddress) {
      geocodeAddress();
    }
  }, [jobOwnerAddress]);

  return (
    <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
  );
};

export default JobLocation;

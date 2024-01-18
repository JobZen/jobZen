import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  jobOwnerAddress: string;
}

const JobLocation: React.FC<Props> = ({ jobOwnerAddress }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            jobOwnerAddress
          )}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const coordinates = [
            parseFloat(data[0].lat),
            parseFloat(data[0].lon),
          ];
          const latLng = L.latLng(coordinates[0], coordinates[1]);

          if (!mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current!, {
              zoomControl: false,
            }).setView(latLng, 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);

            const customZoomControl = L.control.zoom({
              position: "bottomright",
            });

            customZoomControl.addTo(mapRef.current);

            const markerIcon = L.icon({
              iconUrl: "http://maps.google.com/mapfiles/ms/icons/blue.png",
              iconSize: [25, 25],
              iconAnchor: [10, 20],
            });

            L.marker(latLng, { icon: markerIcon }).addTo(mapRef.current);
          } else {
            mapRef.current.setView(latLng, 13);
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

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

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
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(jobOwnerAddress)}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const coordinates = [parseFloat(data[0].lat), parseFloat(data[0].lon)];

          if (!mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current!, {
              maxBounds: L.latLngBounds([coordinates[0] - 0.1, coordinates[1] - 0.1], [coordinates[0] + 0.1, coordinates[1] + 0.1]),
            }).setView(coordinates, 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);
          } else {
            mapRef.current.setView(coordinates, 13);
          }
        }
      } catch (error) {
        console.error('Error fetching geocoding data:', error);
      }
    };

    if (jobOwnerAddress) {
      geocodeAddress();
    }
  }, [jobOwnerAddress]);

  return <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />;
};

export default JobLocation;

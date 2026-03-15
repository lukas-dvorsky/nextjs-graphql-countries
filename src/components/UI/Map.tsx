"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface MapProps {
  lat: number;
  lng: number;
}

function Map({ lat, lng }: MapProps) {
  const position: [number, number] = [lat, lng];

  return (
    <MapContainer center={position} zoom={7} className="h-[95vh] w-full z-10">
      <TileLayer
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
      ></TileLayer>

      <Marker position={position}></Marker>
    </MapContainer>
  );
}

export default Map;

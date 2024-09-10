import React from 'react';
import { MapContainer, TileLayer, Marker, FeatureGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import red from './assest/sunday.png';
import yell from './assest/red.png';
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const markerIcon = new L.Icon({
  iconUrl: red,
  iconSize: [20, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const yellow = new L.Icon({
  iconUrl: yell,
  iconSize: [20, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const created = e => console.log(e);

const MapComponent = () => {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <FeatureGroup>
        <EditControl position='topright' onCreated={created} />
      </FeatureGroup>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[51.505, -0.09]} icon={markerIcon} draggable />
      <Marker position={[51.510, -0.08]} icon={markerIcon} draggable />
      <Marker position={[51.505, -0.10]} icon={markerIcon} draggable />
      <Marker position={[51.500, -0.07]} icon={yellow} draggable />
      <Marker position={[51.515, -0.11]} icon={yellow} draggable />
      <Marker position={[51.520, -0.09]} icon={yellow} draggable />
      <Marker position={[51.503, -0.12]} icon={yellow} draggable />
      <Marker position={[51.508, -0.05]} icon={yellow} draggable />
      <Marker position={[51.507, -0.13]} icon={yellow} draggable />
      <Marker position={[51.502, -0.06]} icon={yellow} draggable />
      <Marker position={[48.8566, 2.3522]} icon={markerIcon} draggable />
      <Marker position={[40.7128, -74.0060]} icon={markerIcon} draggable />
      <Marker position={[34.0522, -118.2437]} icon={yellow} draggable />
      <Marker position={[35.6895, 139.6917]} icon={yellow} draggable />
      <Marker position={[-33.8688, 151.2093]} icon={yellow} draggable />
      <Marker position={[-34.6037, -58.3816]} icon={markerIcon} draggable />
      <Marker position={[55.7558, 37.6173]} icon={markerIcon} draggable />
      <Marker position={[19.4326, -99.1332]} icon={yellow} draggable />
      <Marker position={[1.3521, 103.8198]} icon={yellow} draggable />
      <Marker position={[52.5200, 13.4050]} icon={markerIcon} draggable />
      <Marker position={[37.7749, -122.4194]} icon={yellow} draggable />
      <Marker position={[30.0444, 31.2357]} icon={yellow} draggable />
      <Marker position={[28.6139, 77.2090]} icon={markerIcon} draggable />
      <Marker position={[31.2304, 121.4737]} icon={markerIcon} draggable />
    </MapContainer>
  );
};

export default MapComponent;

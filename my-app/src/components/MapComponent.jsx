// MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ESM import yordamida ikon fayllarini yuklash (Vite/CRA/Next bilan mos)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Leaflet default icon fix for many bundlers
// Ba'zi bundlerlarda L.Icon.Default._getIconUrl mavjud bo'ladi; avval o'chirib tashlaymiz
if (typeof L.Icon.Default !== "undefined") {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
}

// Marker ma'lumotlari (manbalar bilan)
const markers = [
  {
    id: 1,
    name: "Voyage Globe Tour",
    coords: [41.27716, 69.20579],
    info: "Voyage Globe Tour — Chilonzor tumani, Tashkent. Telefon: +998908066600.",
    source: "Mapcarta / OpenStreetMap",
    sourceUrl: "https://mapcarta.com/N4353058592",
  },
  {
    id: 2,
    name: "GLOBE TRAVEL LTD. (manzil: Shahriabad 87a)",
    coords: [41.31108, 69.24056], // taxminiy
    info: "GLOBE TRAVEL LTD. — Shahribad ko'chasi 87a, Mirzo-Ulug'bek tuman (manzil katalogda).",
    source: "GoldenPages (biznes katalog)",
    sourceUrl: "https://www.goldenpages.uz/en/company/?Id=60920",
  },
];

export default function MapComponent() {
  const center = [41.31108, 69.24056];

  return (
    <div className="flex justify-center rounded-2xl">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        className="w-[1400px] h-[600px] rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((m) => (
          <Marker key={m.id} position={m.coords}>
            <Popup>
              <div className="max-w-xs">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm mt-1">{m.info}</p>
                <a
                  className="text-xs underline mt-2 inline-block"
                  href={m.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Manba: {m.source}
                </a>
                <p className="text-amber-600 text-xs mt-1">
                  (*) GLOBE TRAVEL uchun koordinata taxminiy.
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

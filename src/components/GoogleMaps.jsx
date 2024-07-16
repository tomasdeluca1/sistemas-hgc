import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.5801, // Latitud de San Martín, Buenos Aires
  lng: -58.5308, // Longitud de San Martín, Buenos Aires
};

function MyComponent() {
  return (
    <div className="w-full h-full rounded-lg">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(MyComponent);

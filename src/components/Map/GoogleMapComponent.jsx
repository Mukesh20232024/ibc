import React from 'react';
import { GoogleMap, LoadScript } from 'google-maps-react';

const GoogleMapComponent = () => {
  const mapStyles = {
    width: '100%',
    height: '100vh',
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={10}
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;
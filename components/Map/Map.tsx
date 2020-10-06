import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import GoogleMapReact from 'google-map-react';

const MapContainer = styled.div`
  ${tw`flex justify-center w-full`}
  height: 475px;
`;

type LocationProps = {
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  zoomLevel: number;
};

export const Map = ({ location, zoomLevel }: LocationProps) => (
  <MapContainer>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.GOOGLE_MAPS_API_KEY as string,
      }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      {/* <LocationPin
               lat={location.lat}
               lng={location.lng}
               text={location.address}
             /> */}
    </GoogleMapReact>
  </MapContainer>
);

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';

function Map({ coord, country, name }) {
  return (
    <div
      className='rounded border shadow'
    >
      <MapContainer
        center={[coord.lat, coord.lon]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchMarker
          coord={coord}
          name={name}
          country={country}
        />
      </MapContainer>
    </div>
  )
}

export default Map;

const SearchMarker = ({ coord, country, name }) => {
  const map = useMap();
  map.flyTo([coord.lat, coord.lon])
  return <Marker
    position={[coord.lat, coord.lon]}
  >
    <Popup className=''>
      country: {country}
    </Popup>
    <Tooltip>
      {name}
    </Tooltip>
  </Marker>
}
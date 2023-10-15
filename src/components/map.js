import React from 'react';
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Tooltip,
}
    from 'react-leaflet';

export default function Map({ info }) {
    const { name } = info;
    const { country } = info.sys;
    const { lat, lon } = info.coord;
    return (
        (info) ?
            <div className='container-fluid'>
                <div className='container'>
                    <div className='border rounded shadow'>
                        <MapContainer
                            center={[info.coord.lat, info.coord.lon]}
                            zoom={16}
                            scrollWheelZoom={true}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <SearchMarker
                                name={name}
                                country={country}
                                center={[[lat, lon]]}
                            />
                            <Marker
                                position={[lat, lon]}
                            >
                                <Popup className=''>
                                    {country}
                                </Popup>
                                <Tooltip>
                                    {name}
                                </Tooltip>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div> :
            <h2>Loading...</h2>
    )
}

const SearchMarker = (props) => {
    const { center, country, name } = props.children;
    const map = useMap();
    map.flyTo(center)
    return <Marker
        position={center}
    >
        <Popup className=''>
            {country}
        </Popup>
        <Tooltip>
            {name}
        </Tooltip>
    </Marker>
}
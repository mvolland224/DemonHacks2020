//AIzaSyBjUeyVDt2UWywo5CG9qxnbvKSOnMtZiec
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Text, StyleSheet } from "react-native";


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 41.881832,
    lng: -87.623177
};

function MyComponent() {

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBjUeyVDt2UWywo5CG9qxnbvKSOnMtZiec"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )

}


export default React.memo(MyComponent)
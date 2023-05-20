import { useState } from 'react';
import {
    Marker, InfoWindow, MarkerClusterer
} from '@react-google-maps/api';

export default function MapMarker(props) {
    const [show, setShow] = useState(false);

    return (
        !show ?
            <Marker
                position={props.position}
                onClick={() => setShow(!show)}
                clusterer={props.clusterer}
            />
            :
            <InfoWindow
                position={props.position}
                onCloseClick={() => setShow(!show)}
            >
                <div>
                    <p style={{ fontWeight: "bold" }}>{props.name}</p>
                    <p>{props.address}</p>
                    <p>{props.phone}</p>
                    <a href={props.website}>View website</a>
                </div>
            </InfoWindow>
    )
}
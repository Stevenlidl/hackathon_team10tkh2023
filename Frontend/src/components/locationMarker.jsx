import { useState } from 'react';
import {
    Marker, InfoWindowF
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
            <InfoWindowF
                position={props.position}
                onCloseClick={() => setShow(!show)}
            >
                <div style={{fontSize: "smaller"}}>
                    <p style={{ fontWeight: "bold" }}>{props.name}</p>
                    <p>{props.address}</p>
                    <p>{props.phone}</p>
                    <a href={props.website}>View website</a><span className='mx-2'><button className='mapBtn' onClick={() => {props.saveOffice(); setShow(!show);}}>Get Directions</button></span>
                </div>
            </InfoWindowF>
    )
}
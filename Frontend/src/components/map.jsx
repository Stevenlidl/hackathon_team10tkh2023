import {
    GoogleMap, useJsApiLoader, MarkerClusterer
} from '@react-google-maps/api';
import locations from '../mapData';
import MapMarker from './locationMarker';
import { apiKey } from '../constants';
import { useMemo, useRef } from 'react';
import { Container } from 'react-bootstrap';

export default function Map(props) {
    const nycCenter = useMemo(() => ({ lat: 40.746, lng: -73.94 }), []);
    const mapRef = useRef();

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    });

    const onLoad = (map) => mapRef.current = map;
    console.log(apiKey);

    return (
        <Container className='mapContainer mb-5'>
            {isLoaded &&
                <GoogleMap
                    zoom={10.58}
                    center={nycCenter}
                    mapContainerClassName='mapBox'
                    clickableIcons={false}
                    onLoad={onLoad}
                    options={{
                        fullscreenControl: false,
                        mapTypeControl: false,
                        streetViewControl: false,
                        zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }
                    }}
                >
                    {
                        locations.map((borough, index) => {
                            return (
                                <MarkerClusterer key={index}>
                                    {
                                        (clusterer) => {
                                            return (
                                                borough.map((location, index) => {
                                                    return (
                                                        <MapMarker {...location} clusterer={clusterer} key={index + 20} />
                                                    )
                                                })
                                            )
                                        }
                                    }
                                </MarkerClusterer>
                            )
                        })
                    }
                </GoogleMap>
            }
        </Container>
    )
};

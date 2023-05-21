import {
    GoogleMap, useJsApiLoader, MarkerClusterer
} from '@react-google-maps/api';
import locations from '../mapData';
import MapMarker from './locationMarker';
import { apiKey } from '../constants';
import { useMemo, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Map() {
    const nycCenter = useMemo(() => ({ lat: 40.746, lng: -73.94 }), []);
    const mapRef = useRef();
  
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    });

    const bronxCenter = { lat: 40.82428365730261, lng: -73.90861092979034 };
    const brooklynCenter = { lat: 40.67112801205188, lng: -73.95868722435108 };
    const manhattanCenter = { lat: 40.78004080880433, lng: -73.96713921461976 };
    const queensCenter = { lat: 40.719710795062326, lng: -73.85011435283536 };
    const siCenter = { lat: 40.656870262453424, lng: -74.05227870602411 };

    const onLoad = (map) => mapRef.current = map;

    return (
        <>
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
                                                            <MapMarker {...location} clusterer={clusterer} key={index + 50} />
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
            <Container className='helpBoroughs'>
                <h1>Find help by borough</h1>
                <Container className='boroughs'>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => {mapRef.current.panTo(bronxCenter); mapRef.current.setZoom(14);}} lg={5} className='boroughBox m-2'>Bronx</Col>
                        <Col onClick={() => {mapRef.current.panTo(brooklynCenter); mapRef.current.setZoom(12);}} lg={5} className='boroughBox m-2'>Brooklyn</Col>
                    </Row>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => {mapRef.current.panTo(manhattanCenter); mapRef.current.setZoom(11.5);}} lg={5} className='boroughBox m-2'>Manhattan</Col>
                        <Col onClick={() => {mapRef.current.panTo(queensCenter); mapRef.current.setZoom(12)}} lg={5} className='boroughBox m-2'>Queens</Col>
                    </Row>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => {mapRef.current.panTo(siCenter); mapRef.current.setZoom(12)}} lg={5} className='boroughBox m-2'>Staten Island</Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
};
import {
    GoogleMap, useJsApiLoader, MarkerClustererF,
    Autocomplete, DirectionsRenderer
} from '@react-google-maps/api';
import locations from '../mapData';
import MapMarker from './locationMarker';
import { apiKey } from '../constants';
import { useMemo, useRef, useState } from 'react';
import {
    Container, Row, Col,
    Form, Alert
} from 'react-bootstrap';

const libraries = ['places'];

export default function Map() {
    const nycCenter = useMemo(() => ({ lat: 40.746, lng: -73.94 }), []);
    const mapRef = useRef();
    const homeRef = useRef();
    const officeRef = useRef('');
    const [directions, setDirections] = useState();
    const [steps, setSteps] = useState();
    const [homeError, setHomeError] = useState(false);
    const [officeError, setOfficeError] = useState(false);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries
    });

    const bronxCenter = { lat: 40.82428365730261, lng: -73.90861092979034 };
    const brooklynCenter = { lat: 40.67112801205188, lng: -73.95868722435108 };
    const manhattanCenter = { lat: 40.78004080880433, lng: -73.96713921461976 };
    const queensCenter = { lat: 40.719710795062326, lng: -73.85011435283536 };
    const siCenter = { lat: 40.656870262453424, lng: -74.05227870602411 };

    const onLoad = (map) => mapRef.current = map;

    const saveOffice = (address) => {
        officeRef.current = address;
        console.log(officeRef.current);
        setOfficeError(false);
    };

    const handleRouting = async (e) => {
        e.preventDefault();
        console.log(homeRef.current.value);
        console.log(officeRef.current);

        if (homeRef.current.value === '' && officeRef.current != '') {
            setHomeError(true);
            return;
        } else if (officeRef.current === '' && homeRef.current.value != '') {
            setOfficeError(true);
            return;
        };

        const directionsService = new google.maps.DirectionsService();

        const results = await directionsService.route({
            origin: homeRef.current.value,
            destination: officeRef.current,
            travelMode: 'TRANSIT'
        });

        setDirections(results);
        setSteps(results.routes[0].legs[0]);
        setHomeError(false);
        setOfficeError(false);
        console.log(steps);
    };

    const clearRoute = (e) => {
        e.preventDefault();
        homeRef.current.value = '';
        officeRef.current = '';
        setDirections(null);
        setSteps(null);
        setHomeError(false);
        setOfficeError(false);
    }

    return (
        <>
            <Container className='mapContainer mb-5'>

                {isLoaded &&
                    <>
                        <Form className='mapForm'>
                            <Form.Group className="mb-2">
                                <Form.Label className='mb-3' style={{ color: "white" }}>Find Legal Assistance Near You</Form.Label>
                                <Autocomplete>
                                    <Form.Control ref={homeRef} type="text" placeholder="Enter Your Address" />
                                </Autocomplete>
                            </Form.Group>
                            <div className='formBtns'>
                            <button onClick={handleRouting} className='mapBtn'>
                                GO
                            </button>
                                <button onClick={clearRoute} className='mapBtn mx-2'>Clear</button>
                                {
                                    homeError ?
                                    <Alert className='btnAlert' variant='danger'>Enter an Address</Alert>
                                    : officeError ?
                                    <Alert className='btnAlert' variant='danger'>Select a location</Alert>
                                    : ""
                                }
                            </div>
                        </Form>

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
                                        <MarkerClustererF key={index}>
                                            {
                                                (clusterer) => {
                                                    return (
                                                        borough.map((location, index) => {
                                                            return (
                                                                <MapMarker {...location} saveOffice={() => saveOffice(location.address)} clusterer={clusterer} key={index + 50} />
                                                            )
                                                        })
                                                    )
                                                }
                                            }
                                        </MarkerClustererF>
                                    )
                                })
                            }

                            {
                                directions &&
                                <DirectionsRenderer directions={directions} />
                            }
                        </GoogleMap>
                    </>
                }
            </Container>
            {
                steps &&
                <Container className='stepsContainer mb-3'>
                    <h3>{steps.end_address}</h3>
                    <p>{`${steps.duration.text}, ${steps.distance.text}`}</p>
                    <ul>
                        {
                            steps.steps.map((step, i) => {
                                if (step.travel_mode === "TRANSIT") {
                                    return (
                                        <li key={i + 500}>{`${step.transit.line.short_name} ${step.instructions} for ${step.duration.text}`}</li>
                                    )
                                } else {
                                    return (
                                        <li key={i + 500}>{`${step.instructions} for ${step.duration.text}`}</li>
                                    )
                                }
                            })
                        }
                    </ul>
                </Container>
            }
            <Container className='helpBoroughs'>
                <h1>Find help by borough</h1>
                <Container className='boroughs'>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => { mapRef.current.panTo(bronxCenter); mapRef.current.setZoom(14); }} lg={5} className='boroughBox m-2'>Bronx</Col>
                        <Col onClick={() => { mapRef.current.panTo(brooklynCenter); mapRef.current.setZoom(12); }} lg={5} className='boroughBox m-2'>Brooklyn</Col>
                    </Row>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => { mapRef.current.panTo(manhattanCenter); mapRef.current.setZoom(11.5); }} lg={5} className='boroughBox m-2'>Manhattan</Col>
                        <Col onClick={() => { mapRef.current.panTo(queensCenter); mapRef.current.setZoom(12) }} lg={5} className='boroughBox m-2'>Queens</Col>
                    </Row>
                    <Row style={{ width: "70%" }} className='justify-content-center'>
                        <Col onClick={() => { mapRef.current.panTo(siCenter); mapRef.current.setZoom(12) }} lg={5} className='boroughBox m-2'>Staten Island</Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
};
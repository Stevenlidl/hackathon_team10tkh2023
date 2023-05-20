import { Container, Row, Col } from 'react-bootstrap';
import Map from '../components/map';
import '../css/help.css';

export default function FindHelp() {
    return (
        <Container className='helpContainer'>
            <Container className='helpHeader mb-4'>
                <h1 style={{fontWeight: "700"}}>TENANT SAFE</h1>
                <p>In need of help or services? Explore the map to find your local right to counsel, housing courts, and eviction prevention services.</p>
                <p style={{fontWeight: "bold"}}>Please the call office because walk-in services may be unavailable.</p>
            </Container>
            <Map />
            <Container className='helpBoroughs'>
                <h1>Find help by borough</h1>
                <Container className='boroughs'>
                    <Row style={{width: "70%"}} className='justify-content-center'>
                        <Col lg={5} className='boroughBox m-2'>Bronx</Col>
                        <Col lg={5} className='boroughBox m-2'>Brooklyn</Col>
                    </Row>
                    <Row style={{width: "70%"}} className='justify-content-center'>
                        <Col lg={5} className='boroughBox m-2'>Manhattan</Col>
                        <Col lg={5} className='boroughBox m-2'>Queens</Col>
                    </Row>
                    <Row style={{width: "70%"}} className='justify-content-center'>
                        <Col lg={5} className='boroughBox m-2'>Staten Island</Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}
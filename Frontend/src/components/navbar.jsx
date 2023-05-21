import { 
    Container, Nav, Navbar,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();

    return (
        <Navbar style={{backgroundColor: "var(--blue)"}} variant='dark' expand="md">
            <Container>
                <Navbar.Brand href='/home'>
                    <img src='/images/circleLogo.png' style={{maxHeight: "3em"}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-items' />
                <Navbar.Collapse className='justify-content-end' id='navbar-items'>
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/help'>Find Help</Nav.Link>
                        <Nav.Link href='/community'>Community Board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
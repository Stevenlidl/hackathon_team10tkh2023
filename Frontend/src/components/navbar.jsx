import { 
    Container, Nav, Navbar,
    Button
} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar style={{backgroundColor: "var(--blue)"}} variant='dark' expand="md">
            <Container>
                <Navbar.Brand href='/home'>
                    <img src='/images/circleLogo.png' style={{maxHeight: "3em"}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-items' />
                <Navbar.Collapse className='justify-content-end' id='navbar-items'>
                    <Nav>
                        <Nav.Link active href='/home'>Home</Nav.Link>
                        <Nav.Link active href='/help'>Find Help</Nav.Link>
                        <Nav.Link active href='/community'>Community Board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
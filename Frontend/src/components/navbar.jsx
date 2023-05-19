import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg='secondary' variant='dark' expand="md">
            <Container>
                <Navbar.Brand href='/home'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-items' />
                <Navbar.Collapse className='justify-content-end' id='navbar-items'>
                    <Nav>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/map'>Locations</Nav.Link>
                        <Nav.Link href='/community'>Community Board</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
import { 
    Container, Nav, Navbar,
    Button
} from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar style={{backgroundColor: "var(--blue)"}} variant='dark' expand="md">
            <Container>
                <Navbar.Brand href='/home'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-items' />
                <Navbar.Collapse className='justify-content-end' id='navbar-items'>
                    <Nav>
                        <Nav.Link href='/home'><Button variant='light'>Home</Button></Nav.Link>
                        <Nav.Link href='/help'><Button variant='light'>Find Help</Button></Nav.Link>
                        <Nav.Link href='/community'><Button variant='light'>Community Board</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
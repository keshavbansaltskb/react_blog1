import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation() {
  return (
    <div className='container-fluid'>
            <Navbar expand="lg" style={{backgroundColor:"white"}} fixed="top" >
                
                <Container>
                <img src="/img/mainlogo.png" className='img-fluid'></img>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navitemss">
                        <Nav.Link href="#home" id="homenavitem">HOME</Nav.Link>
                        <Nav.Link href="#about" id="homenavitem">ABOUT</Nav.Link>
                        <Nav.Link href="#story" id="homenavitem">STORIES</Nav.Link>
                        <Nav.Link href="#post" id="homenavitem">POST</Nav.Link>
                        <Nav.Link href="#health" id="homenavitem">HEALTH</Nav.Link>
                        <Nav.Link href="#love" id="homenavitem">LOVE</Nav.Link>
                        <Nav.Link href="#featpost" id="homenavitem">FEAT.POST</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

    </div>
    
  );
}

export default Navigation;
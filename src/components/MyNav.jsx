import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ac from "./ac.jpeg"





function CollapsibleExample() {
  return (
    <>
    <div>
    <Navbar  className='navb' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img className='phot App-logo2' src={ac}  alt="logo"/>
        <Navbar.Brand href="#home">
        <NavDropdown title="AcCE" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/" > <h4>History</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              <h4>Vision</h4>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"><h4>Mission</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               <h4>Location</h4>
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#pricing"><h4>Admission</h4></Nav.Link>
            <Nav.Link href="#pricing"><h4>Announcement</h4></Nav.Link>
            <NavDropdown title="Primary Education" id="collasible-nav-dropdown">
          
              
              <NavDropdown.Item href="#action/3.2">
                <h4>Programs</h4>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"><h4>Lecture Notes</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <h4>Students Result</h4>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavDropdown title="JHS Education" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1" > <h4>Programs</h4></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">
          <h4>Lecture Notes</h4>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
           <h4>Students Results</h4>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
           <h4>Course Combinations</h4>
          </NavDropdown.Item>
        </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
   </div>
   
   </>
  );
}

export default CollapsibleExample;
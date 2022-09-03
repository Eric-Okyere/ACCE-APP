import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ac from "./ac.jpeg"





function NavBB() {
  return (
    <>
    <div>
    <Navbar  className='navb' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img className='phot App-logo2' src={ac}  alt="logo"/>
        <Navbar.Brand href="#home">
        <NavDropdown title="AcCE" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/history" > <h4>History</h4></NavDropdown.Item>
              <NavDropdown.Divider />
   
              
              <NavDropdown.Item href="/mission"><h4>Mission & Mission</h4></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://goo.gl/maps/NokvyaK4uKFK6gsV8">
               <h4>Location</h4>
              </NavDropdown.Item>
            </NavDropdown>





            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
          
          
          
          </Nav>
          <Nav>
          <NavDropdown title="ADMISSION " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="/admission">
          <h4>Admission Requirement</h4>
         </NavDropdown.Item>
         
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="ANNOUNCEMENT " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="/Announcement">
          <h4>Announcement</h4>
         </NavDropdown.Item>
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="PRIMARY EDUCATION " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="/Announcement">
          <h4>Course Combinations</h4>
         </NavDropdown.Item>
         <NavDropdown.Divider />
          <NavDropdown.Item href="/lecturenotes">
          <h4>Lecture Notes</h4>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="https://studentioe.ucc.edu.gh/login.php">
           <h4>Students Results</h4>
          </NavDropdown.Item>
          
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="EARLY CHILDHOOD " id="collasible-nav-dropdown" >
         
          <NavDropdown.Item href="/Announcement">
          <h4>Course Combinations</h4>
         </NavDropdown.Item>
         <NavDropdown.Divider />
          <NavDropdown.Item href="/lecturenotes">
          <h4>Lecture Notes</h4>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="/result">
           <h4>Students Results</h4>
          </NavDropdown.Item>
          
          
        </NavDropdown>
            
          </Nav>
          <Nav>
          <NavDropdown title="JHS EDUCATION" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="/Announcement" > <h4>Course Combination</h4></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/lecturenotes">
          <h4>Lecture Notes</h4>
          </NavDropdown.Item>
            <NavDropdown.Divider />
          <NavDropdown.Item href="https://studentioe.ucc.edu.gh/login.php">
           <h4>Students Results</h4>
          </NavDropdown.Item>
         
          
        </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              JOURNAL
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
   </div>
   
   </>
  );
}

export default NavBB;
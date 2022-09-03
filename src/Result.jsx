import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Result() {
  return (
    <div>
    <Container>
    <h1  className='header'>Check Your Result Here</h1>
    <Row>
      <Col >
      <Card className='cardvid'>
      
      <Card.Body>
        <Card.Text>
         <label > &#9831;</label> 
         <input placeholder='Index Number'/> <br/> <br />
         <label>&#9831;</label> 
         <input placeholder='Password'/>
         <br /> <br />
         <div className='but'>
         <button>LOGIN</button>
         <button>Forget Password</button>
         </div>
         </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Result
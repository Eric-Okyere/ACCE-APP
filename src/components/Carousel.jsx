import Carousel from 'react-bootstrap/Carousel';
import ac from "./ac.jpeg"
import a from "./1.jpg"
import b from "../Team.jpg"
import Learn from "../Leaners.jpg"
import Arts from "../Arts.jpg"
import Building from "../Building.jpg"
import Inside from "../Inside.jpeg"
import Principal from "../Principal.jpg"



function CarouselFadeExample() {
  return (
    <Carousel fade>
     


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Learn}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Principal}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Arts}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Building}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={Inside}
          alt="First slide"
          
        />
        
        <Carousel.Caption>
        <div ><h1 className='welcome'>Welcome to Accra College Of Education</h1></div>
          <h3>Gye Nyame Shall Forever Live</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="pic1 d-block w-100"
          src={a}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="  pic1  d-block w-100"
          src={b}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className='colour'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1  d-block w-100"
          src={ac}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='colour'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
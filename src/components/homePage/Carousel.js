import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Styling/Carousel.css';
import Container from 'react-bootstrap/Container';



const CarouselComponent = () => {
    return (
        <Container>

        <div className='cars'>

        <Carousel>

            <Carousel.Item>
                <img className="d-block" src="https://i.imgur.com/LF7FlwP.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://i.imgur.com/kVsFWxm.jpg" alt="Third slide" />

            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block" src="https://i.imgur.com/2XCQacI.png" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        </div>
        </Container>

    );
}

export default CarouselComponent;
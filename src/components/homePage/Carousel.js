import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="https://media1.popsugar-assets.com/files/thumbor/16auIp3LT3GgZpFnfHnaG-9I_bY/0x172:3222x3438/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/04/674/n/1922564/b764016d5e5fc5061fdc60.14647446_/i/models-fashion-week-street-style-fall-2020.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Place your text here. 1st slide pic </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://cdn.cliqueinc.com/posts/285941/stylish-models-2020-285941-1583347741450-square.700x0c.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Place your text here. 2nd slide pic.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Place your text here. 3rd slide pic.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Styling/Carousel.css';



const CarouselComponent = () => {
    return (

        <div style={{width:"100%"}}>
                <header className='bg-dark py-5'>
                    <div className='container px-4 px-lg-5 my-5'>
                        <div className='text-center text-white'>
                        <h1 className='display-4 font-weight-bold'>Share your design with the world</h1>
                        <p className='lead font-weight-normal text-white-50 mb-0'>With this shop homepage design</p>
                        </div>
                    </div>
                </header>

        <div className='cars'>

        <Carousel style={{display: 'flex', justifyContent:'center'}}>

            <Carousel.Item>
                <img className="d-block2" src="https://i.imgur.com/UMyCAYY.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block2" src="https://i.imgur.com/tZoIzHC.png" alt="Third slide" />

            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block2" src="https://i.imgur.com/a013Sf5.jpg" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        </div>

        </div>


    );
} 

export default CarouselComponent;
import React, { Component } from 'react'
import "./Banner.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function Banner(){
    return(
        <div className="bannercontainer">

<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="trialbanner.png"
          alt="First slide"
        />

        <Carousel.Caption className='' >
       
        <Button variant="info" className='d-flex pesan'>Pesan Sekarang</Button>{' '} 
       
       
        </Carousel.Caption>

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="trialbanner2.png"
          alt="Second slide"
        />

        <Carousel.Caption className=''>
        <Button variant="info" className='d-flex pesan'>Pesan Sekarang</Button>{' '}
       
        </Carousel.Caption>

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="trialbanner3.png"
          alt="Third slide"
        />


        <Carousel.Caption className=''>
        <Button variant="info" className='d-flex pesan'>Pesan Sekarang</Button>{' '}
       
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Banner;
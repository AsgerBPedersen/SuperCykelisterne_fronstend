import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div
          id="carouselBikes"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="test1.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="test2.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="test1.jpg" className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <style jsx>{`
              .carousel-inner{
                max-height: 600px !important;
              }
            `}</style>
        </div>
        );
    }
}

export default Carousel;
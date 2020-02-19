import React, { Component } from "react";

class Carousel extends Component {
  componentDidMount() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    if(slides.length > 0) {
      var slideInterval = setInterval(nextSlide, 5000);
    }

    function nextSlide() {
      slides[currentSlide].className = slides[currentSlide].className.replace("slide showing", "slide");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].className = slides[currentSlide].className.replace("slide", "slide showing");
    }
  }
  render() {
    if(this.props.images.length == 0) return null
    return (
      <div id="slides">
        {this.props.images.map((img, i) => (
          <div key={img.id} className={i == 0 ? "slide showing" : "slide"}>
            <img src={img.url} className="img" alt="..."></img>
          </div>
        ))}

        <style jsx>{`
          #slides {
            height: 600px;
            position: relative;
          }

          .slide {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 1;

            -webkit-transition: opacity 1s;
            -moz-transition: opacity 1s;
            -o-transition: opacity 1s;
            transition: opacity 1s;
          }

          .showing {
            opacity: 1;
            z-index: 2;
          }
          .img {
            object-fit:cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;

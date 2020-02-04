import React, { Component } from "react";

class MemberShowcase extends Component {
  render() {
    const { images, name } = this.props.user;
    images.length = Math.min(images.length, 4);
    if (images.length == 0) return null;
    return (
      <div className="p-4">
        <h2>{name}</h2>
        <div className="d-flex img-box">
          {images.map(img => (
            <div key={img.url} className="col-3 mt-4">
              <img className="img-fluid img" src={img.url}></img>
            </div>
          ))}
          <style jsx>{`
            .img {
              height: 100%;
              object-fit: cover;
            }
            .img-box {
              border-top: 1px solid black;
            }
          `}</style>
        </div>
      </div>
    );
  }
}

export default MemberShowcase;

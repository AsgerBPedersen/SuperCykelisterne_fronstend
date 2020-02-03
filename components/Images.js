import React, { Component } from 'react';

class Images extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap">
                {this.props.images.map(img => (
                    <div key={img.url} className="col-3 mt-4">
                        <img className="img-fluid img" src={img.url}></img>
                        <button className="close-btn btn btn-danger">&times; SLET BILLEDE</button>
                    </div>
                ))}
                <style jsx>{`
                .img {
                    height: 100%;
                    object-fit: cover;
                }
                .close-btn {
                    position: absolute;
                    left: 25px;
                    bottom: 15px;
                }
                
              `}</style>
            </div>
        );
    }
}

export default Images;
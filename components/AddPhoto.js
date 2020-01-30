import React, { Component } from 'react';

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h4 className="text-center p-3">TILFØJ BILLEDE</h4>
               

                <div className="form-group row">
                    <div className="d-flex">

                <label class="btn btn-outline-secondary text-nowrap m-0">
                    VÆLG FIL PÅ DIN COMPUTER
                    <input
                      className="form-control"
                      type="File"
                      placeholder="billede"
                      name="file"
                      hidden
                      ></input>
                 </label>

                 <button className="btn btn-primary align-self-center">UPLOAD</button>
                      </div>
                </div>
                
            </div>
        );
    }
}

export default AddPhoto;
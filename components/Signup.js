import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <h4 className="text-center p-3">ORET BRUGER</h4>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Din email</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                type="email"
                placeholder="email"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Dit navn</label>
            <div className="col-sm-8">
              <input
                class="form-control"
                type="text"
                placeholder="navn"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Kodeord</label>
            <div className="col-sm-8">
              <input
                class="form-control"
                type="password"
                placeholder="kodeord"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Gentag</label>
            <div className="col-sm-8">
              <input
                class="form-control"
                type="password"
                placeholder="kodeord"
              ></input>
            </div>
          </div>
          <div className="form-group d-flex justify-content-end">
            <button className="btn btn-primary">LOG IND</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

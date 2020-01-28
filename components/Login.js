import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
          <form>
        <h4 className="text-center p-3">LOG IND HER</h4>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="email"
              placeholder="email"
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Kodeord</label>
          <div className="col-sm-9">
          <input
            class="form-control"
            type="password"
            placeholder="password"
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

export default Login;

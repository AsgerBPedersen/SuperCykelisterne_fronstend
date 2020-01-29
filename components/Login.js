import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`

class Login extends Component {
  state = {
    password: '',
    email: ''
  }

  render() {
    return (
      <div>
          <form method="post">
        <h4 className="text-center p-3">LOG IND HER</h4>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="email"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">Kodeord</label>
          <div className="col-sm-9">
          <input
            class="form-control"
            type="password"
            placeholder="kodeord"
            name="password"
              value={this.state.password}
              onChange={this.onChange}
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

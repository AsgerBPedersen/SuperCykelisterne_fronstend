import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER } from './User';
import Error from './Error';

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`;

class Login extends Component {
  state = {
    password: "",
    email: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNIN} variables={this.state} refetchQueries={[{ query: CURRENT_USER }]}>
        {(signin, { error }) => {
          return (
            <div>
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  const user = await signin();
                  console.log(user);
                  this.setState({ name: "", email: "", password: "" });
                }}
              >
                <h4 className="text-center p-3">LOG IND HER</h4>
                <Error error={error}></Error>
                <div className="form-group row d-flex justify-content-end">
                  <label className="form-label m-0 text-right p-2">Email</label>
                  <div className="col-sm-8 p-0">
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
                <div className="form-group row d-flex justify-content-end">
                  <label className="form-label m-0 text-right p-2">Kodeord</label>
                  <div className="col-sm-8 p-0">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="kodeord"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    ></input>
                  </div>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    LOG IND
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default Login;

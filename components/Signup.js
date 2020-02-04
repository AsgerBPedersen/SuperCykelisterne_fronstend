import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Error from './Error';
import { CURRENT_USER } from './User';

const SIGNUP = gql`
  mutation SIGNUP($email: String!, $name: String!, $password: String!) {
    createUser(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    password: "",
    confirm: "",
    email: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP} variables={this.state} refetchQueries={[{ query: CURRENT_USER }]}>
        {(signup, { error }) => {
          return (
            <div className="col-sm-4">
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  if (this.state.password != this.state.confirm) {
                    alert("kodeordne er ikke ens.");
                    this.setState({ password: "", confirm: "" });
                  } else {
                    const user = await signup();
                    this.setState({
                      name: "",
                      email: "",
                      password: "",
                      confirm: ""
                    });
                  }
                }}
              >
                <h4 className="text-center p-3">OPRET BRUGER</h4>
                <Error error={error}></Error>
                <div className="form-group row d-flex justify-content-end">
                  <label className="form-label m-0 text-right p-2">Din email</label>
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
                  <label className="form-label m-0 text-right p-2">Dit navn</label>
                   <div className="col-sm-8 p-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="navn"
                      name="name"
                      value={this.state.name}
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
                <div className="form-group row d-flex justify-content-end">
                  <label className="form-label m-0 text-right p-2">Gentag</label>
                   <div className="col-sm-8 p-0">
                    <input
                      className="form-control"
                      type="password"
                      name="confirm"
                      placeholder="kodeord"
                      value={this.state.confirm}
                      onChange={this.onChange}
                    ></input>
                  </div>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">
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

export default Signup;

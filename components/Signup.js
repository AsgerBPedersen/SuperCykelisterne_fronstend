import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

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
    email: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={SIGNUP} variables={this.state}>
        {(signup, { error, loading }) => {
          return (
            <div>
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  const user = await signup();
                  console.log(user);
                  this.setState({name:'', email: '', password:''})
                }}
              >
                <h4 className="text-center p-3">OPRET BRUGER</h4>
                <p className="text-danger">{error}</p>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Din email</label>
                  <div className="col-sm-8">
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
                  <label className="col-sm-4 col-form-label">Dit navn</label>
                  <div className="col-sm-8">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="navn"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
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
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
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
                  <button className="btn btn-primary" type="submit">LOG IND</button>
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

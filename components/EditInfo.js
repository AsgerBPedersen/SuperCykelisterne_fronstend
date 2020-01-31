import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER } from './User';

const UPDATEUSER = gql`
  mutation UPDATEUSER($id: ID!, $name: String, $password: String) {
    updateUser(id: $id, name: $name, password: $password) {
      id
    }
  }
`;

class EditInfo extends Component {
  state = {
    name: "",
    password: "",
    confirm: ""
  };

  getChanges = () => {
    const changes = {};
    if(this.state.name) changes.name = this.state.name;
    if(this.state.password) changes.password = this.state.password;
    return changes;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation mutation={UPDATEUSER} refetchQueries={[{ query: CURRENT_USER }]}>
        {(updateUser, { error, loading }) => {
          return (
            <div>
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  if (this.state.password != this.state.confirm) {
                    alert("kodeordne er ikke ens.");
                    this.setState({ password: "", confirm: "" });
                  } else if(this.state.name || this.state.password) {
                    const user = await updateUser({
                      variables: {
                        id: this.props.user.id,
                        ...this.getChanges()
                      }
                    });
                    console.log(user);
                    this.setState({
                      name: "",
                      password: "",
                      confirm: ""
                    });
                }}}
              >
                <h4 className="text-center p-3">RET DINE BRUGEROPLYSNINGER</h4>
                <p className="text-danger">{error}</p>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Dit navn</label>
                  <div className="col-sm-8">
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
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Kodeord</label>
                  <div className="col-sm-8">
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
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Gentag</label>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="kodeord"
                      name="confirm"
                      value={this.state.confirm}
                      onChange={this.onChange}
                    ></input>
                  </div>
                </div>
                <div className="form-group d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">OPDATER</button>
                </div>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default EditInfo;

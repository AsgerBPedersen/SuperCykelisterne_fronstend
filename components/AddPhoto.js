import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER } from "./User";

const CREATE_IMAGE = gql`
  mutation CREATE_IMAGE($url: String!) {
    createImage(url: $url) {
      id
    }
  }
`;

class AddPhoto extends Component {
  state = {};

  onChange = e => {
    this.setState({
      files: e.target.files
    });
  };

  onSubmit = async mutation => {
    if (this.state.files) {
      const data = new FormData();
      data.append("file", this.state.files[0]);
      data.append("upload_preset", "SuperCykler");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/asge4899/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      const img = await res.json();


      await mutation({
        variables: {
          url: img.secure_url
        }
      });
      this.setState({
          files: null
      });
    }
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_IMAGE}
        refetchQueries={[{ query: CURRENT_USER }]}
      >
        {uploadImage => (
          <div>
            <h4 className="text-center p-3">TILFØJ BILLEDE</h4>
            {this.state.files && <p>{this.state.files[0].name}</p>}

            <div className="form-group row">
              <div className="d-flex">
                <label className="btn btn-outline-secondary text-nowrap m-0">
                  VÆLG FIL PÅ DIN COMPUTER
                  <input
                    className="form-control"
                    type="File"
                    name="file"
                    accept="image/*"
                    onChange={this.onChange}
                    hidden
                  ></input>
                </label>

                <button
                  onClick={() => this.onSubmit(uploadImage)}
                  className="btn btn-primary align-self-center"
                >
                  UPLOAD
                </button>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddPhoto;

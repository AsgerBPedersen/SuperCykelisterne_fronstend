import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER } from './User';

const DELETE_IMAGE = gql`
  mutation DELETE_IMAGE($id: ID!) {
    deleteImage(id: $id) {
      id
    }
  }
`;

class Images extends Component {
  onSubmit = async (e, deleteImage) => {
      console.log(e.target.name);
      await deleteImage({
          variables : {
              id: e.target.name
          }
      });
  };

  render() {
    return (
      <Mutation mutation={DELETE_IMAGE} refetchQueries={[{ query: CURRENT_USER }]}>
        {deleteImage => (
          <div className="d-flex flex-wrap">
            {this.props.images.map(img => (
              <div key={img.url} className="col-3 mt-4">
                <img className="img-fluid img" src={img.url}></img>
                <button onClick={e => this.onSubmit(e, deleteImage)} name={img.id} className="close-btn btn btn-danger">
                  &times; SLET BILLEDE
                </button>
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
        )}
      </Mutation>
    );
  }
}

export default Images;

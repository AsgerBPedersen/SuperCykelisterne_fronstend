import React, { Component } from "react";
import Carousel from "./Carousel";
import Login from "./Login";
import Signup from "./Signup";
import User from './User';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const RANDOM_PHOTOS = gql`
  query {
    randomPhotos {
      id
      url
    }
  }
`;

class Welcome extends Component {
  render() {
    return (
      <User>
        {({ data }) => {
          const user = data ? data.currentUser : null;
          return (
            <div>
        <h2 className="text-center m-4">Velkommen til vores hjemmeside!</h2>
        <Query query={RANDOM_PHOTOS}>
          {({data, loading}) => {
            if(loading) return (<p>loading</p>);
            return (<Carousel images={data.randomPhotos}></Carousel>);
          }}
        </Query>
        <div className="d-flex justify-content-around container p-5">
          {!user && (
<>
            <Login />
            <Signup />
            </>
          )}
        </div>
      </div>
          )
        }}
      </User>
      
    );
  }
}

export default Welcome;

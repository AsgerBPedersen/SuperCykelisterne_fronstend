import React, { Component } from "react";
import Carousel from "./Carousel";
import Login from "./Login";
import Signup from "./Signup";
import User from './User';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from './Error';

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
        {({ data, loading }) => {
          const user = data ? data.currentUser : null;
          if(loading) return null;
          return (
            <div>
        <h2 className="text-center m-4">Velkommen til vores hjemmeside!</h2>
        <Query query={RANDOM_PHOTOS}>
          {({data, loading, error}) => {
            if(loading) return (<p>loading</p>);
            if(error) return <Error error={error}></Error>
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

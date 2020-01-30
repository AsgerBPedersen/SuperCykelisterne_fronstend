import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER } from './User';


const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout
  }
`;

const Signout = props => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER }]}>
    {signout => <button className="btn btn-primary align-self-center m-5" onClick={signout}>LOG UD</button>}
  </Mutation>
);

export default Signout;
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import MemberShowcase from "./MemberShowcase";

const ALL_USERS = gql`
  query {
    users {
      id
      name
      images {
        id
        url
      }
    }
  }
`;

class Members extends Component {
  render() {
    return (
      <Query query={ALL_USERS}>
        {({ data, error, loading }) => {
            
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
          return (
            <div>
              {data.users.map(user => (
                <MemberShowcase user={user}></MemberShowcase>
              ))}
              ;
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Members;

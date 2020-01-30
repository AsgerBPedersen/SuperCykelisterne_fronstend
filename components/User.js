import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENT_USER = gql`
  query {
    currentUser {
      id
      email
      name
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER}>
    {payload => props.children(payload)}
  </Query>
);

export default User;
export { CURRENT_USER };

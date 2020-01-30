import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import User from "./User";
import Account from "./Account";
import AddPhoto from "./AddPhoto";

class MemberArea extends Component {
  render() {
    return (
      <User>
        {({ data }) => {
          const user = data ? data.currentUser : null;
          if (user) {
            return (
              <>
                <h2 className="text-center m-5">Velkommen {user.name}!</h2>
                <div className="d-flex justify-content-around container">
                <Account></Account>
                <AddPhoto></AddPhoto>
              </div>
              </>
            );
          }
          return (
            <div>
              <h2 className="text-center m-5">
                Log venligst ind eller opret en bruger
              </h2>
              <div className="d-flex justify-content-around container">
                <Login></Login>
                <Signup></Signup>
              </div>
            </div>
          );
        }}
      </User>
    );
  }
}

export default MemberArea;

import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import User from "./User";
import Account from "./Account";
import AddPhoto from "./AddPhoto";
import Images from "./Images";

class MemberArea extends Component {
  render() {
    return (
      <User>
        {({ data }) => {
          const user = data ? data.currentUser : null;
          console.log(user);
          if (user) {
            return (
              <>
                <h2 className="text-center m-5">Velkommen {user.name}!</h2>
                <div className="d-flex justify-content-around container">
                  <Account user={user}></Account>
                  <AddPhoto></AddPhoto>
                </div>
                <h4 className="text-center m-5">DINE BILLEDER</h4>
                <Images images={user.images}></Images>
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

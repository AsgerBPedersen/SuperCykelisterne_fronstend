import React, { Component } from "react";
import Carousel from "./Carousel";
import Login from "./Login";
import Signup from "./Signup";
import User from './User';

class Welcome extends Component {
  render() {
    return (
      <User>
        {({ data }) => {
          const user = data ? data.currentUser : null;
          return (
            <div>
        <h2 className="text-center m-4">Velkommen til vores hjemmeside!</h2>
        <Carousel />
        <div className="d-flex justify-content-around container p-5">
          {!user && (
<>
            <Login />
            <Signup />
            </>
          )}

        </div>
        <style jsx>{``}</style>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
      </div>
          )
        }}
      </User>
      
    );
  }
}

export default Welcome;

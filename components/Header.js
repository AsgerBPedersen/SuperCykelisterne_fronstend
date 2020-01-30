import React, { Component } from "react";
import User from "./User";
import Signup from "./Signup";
import Signout from './Signout';

class Header extends Component {
  render() {
    return (
      <User>
        {({ data }) => {
          const user = data ? data.currentUser : null;
          return (
            <div className="header d-flex justify-content-between">
              <div className="d-flex">
                <div id="logo" className="p-3">
                  <h1 className="text-center">
                    Super <br></br> Cykelisterne
                  </h1>
                </div>
                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav">
                    <li className="nav-item m-2">
                      <a
                        className="nav-link text-dark font-weight-bold"
                        href="/"
                      >
                        Forside
                      </a>
                    </li>
                    <li className="nav-item m-2">
                      <a
                        className="nav-link text-dark font-weight-bold"
                        href="/medlemmer"
                      >
                        Medlemmer
                      </a>
                    </li>
                    <li className="nav-item m-2">
                      <a
                        className="nav-link text-dark font-weight-bold"
                        href="/om-os"
                      >
                        Om klubben
                      </a>
                    </li>
                    <li className="nav-item m-2">
                      <a
                        className="nav-link text-dark font-weight-bold"
                        href="/konto"
                      >
                        Medlemsområde
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="d-flex">
                {user && (<Signout></Signout>)}
              </div>
              <style jsx>{`
                .nav-link:hover {
                  text-decoration: underline;
                }
                #logo {
                  background-color: #fcd12a;
                }
                .header {
                  border-bottom: 10px solid #fcd12a;
                }
              `}</style>
            </div>
          );
        }}
      </User>
    );
  }
}

export default Header;

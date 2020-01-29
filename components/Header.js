import React, { Component } from 'react';
import User from './User';

class Header extends Component {
    render() {
        return (
            <div className="header d-flex">
                <div id="logo" className="p-3">
                    <h1 className="text-center">Super <br></br> Cykelisterne</h1>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                            <a className="nav-link text-dark font-weight-bold" href="/">Forside</a>
                        </li>
                        <li className="nav-item m-2">
                            <a className="nav-link text-dark font-weight-bold" href="/medlemmer">Medlemmer</a>
                        </li>
                        <li className="nav-item m-2">
                            <a className="nav-link text-dark font-weight-bold" href="/om-os">Om klubben</a>
                        </li>
                        <li className="nav-item m-2">
                            <a className="nav-link text-dark font-weight-bold" href="/konto">Medlemsområde</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <User>
                        {({data}) => {
                     
                        return <p>asd</p>
                        }
                        }
                    </User>
                </div>
                <style jsx>{`
          .nav-link:hover {
            text-decoration: underline;
          }
          #logo {
              background-color: #FCD12A;
          }
          .header {
              border-bottom: 10px solid #FCD12A
          }
        `}</style>
            </div>
        );
    }
}

export default Header;
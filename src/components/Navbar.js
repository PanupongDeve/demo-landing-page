import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: '#000'}} className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container nav-container">
          <a className="navbar-brand" href="#">
            Demo-Landing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ marginLeft: '30vw'}}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
            
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Menu1
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                    Menu2
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Menu3
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

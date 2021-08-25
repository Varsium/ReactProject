import React, { Component } from 'react'

export default class Header extends Component {
  constructor(){
    super();
    this.HandleOnSubmitSearch= this.HandleOnSubmitSearch.bind(this);
  }
    render() {
        return (
            <div>
{/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
  <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline" onSubmit={this.HandleOnSubmitSearch}>
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>  <li className="nav-item">
      <a c lassName="nav-link" data-widget="fullscreen"  role="button">
        <i className="fa fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true"  role="button">
        <i className="fa fa-user-circle" />
      </a>
    </li>
  </ul>
</nav>
{/* /.navbar */}
   
            </div>
        )
    }

    HandleOnSubmitSearch = () =>{}
}

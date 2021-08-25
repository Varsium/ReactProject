import React, { Component } from 'react'
import { Router, withRouter,Link } from 'react-router-dom'


 class SideNav extends Component {
    render() {
        return (
            <>
           
        {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/"  className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">NailsShop</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>
              Home
            </p>
          </Link>
        </li>
      
        <li className="nav-item">
          <Link to="/Calendar" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Calendar
            </p>
          </Link>
        </li>
        <li className="nav-item"> 
          <Link to="/Store" className="nav-link">
                <i className="nav-icon fa fa-shopping-basket" />
                <p> Shop</p>
              </Link>
            </li>
     
       </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</>
        )
    }
}

export default withRouter(SideNav);


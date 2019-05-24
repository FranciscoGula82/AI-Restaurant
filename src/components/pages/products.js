import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

class Products extends Component {
  render(){
    return (
      <div className="container-fluid">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <i className="fas fa-home"></i>
              <Link to="/">  Home</Link><span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-utensils"></i>
              <Link to="/Products">   Menu</Link>
            </li>
            <li className="nav-item">
              <i className="fas fa-cog"></i>
              <Link to="/Products">   Definitions</Link>
            </li>
            <li className="nav-item">
              <i className="far fa-money-bill-alt"></i>
              <Link to="/Products">   Pay</Link>
            </li>
            <li className="nav-item">
              <i className="fas fa-concierge-bell"></i>
              <Link to="/Products">   Call waitress</Link>
            </li>
          </ul>      
        </div>
        </nav>
      </div>
    );
  }
}

export default Products;
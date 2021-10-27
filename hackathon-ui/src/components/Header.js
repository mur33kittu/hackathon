import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import * as actions from '../actions';
// import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// const history = createBrowserHistory();

const Header = props => {
  const [count, setCount] = useState (0);
  useEffect (
    () => {
      setCount (props.products.length);
    },
    [props?.products?.length > 0]
  );

  const renderButton = () => {
    if (props.auth) {
      return (
        <FontAwesomeIcon
            icon={faUser}
            style={{cursor: 'pointer'}}
            textAnchor={true}
            onClick={() => props.changeAuth (false)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
                  icon={faUser}
                  style={{cursor: 'pointer'}}
                  textAnchor={true}
                  onClick={() => props.changeAuth (true)}
              />
      );
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-md-top"
      style={{backgroundColor: '#e3f2fd'}}
    >
      <div className="container-fluid">
        <NavLink to="/order" className="navbar-brand">e-Cart</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

            </li>            
          </ul>
          <span className="navbar-text">
            {renderButton()}
          </span>&nbsp;&nbsp;
          <span className="navbar-text"><NavLink to="/orders" className="navbar-brand small">Returns & orders</NavLink></span>          
          <span className="navbar-text">            
            <NavLink to="/cart" className="navbar-brand"><FontAwesomeIcon
                icon={faCartPlus}
                style={{cursor: 'pointer'}}
                textAnchor={true}
              /></NavLink>              
              {count}
          </span>
        </div>
      </div>
    </nav>
  );
};


function mapStateToProps (state) {
  return {products: state.products, cart: state.cart, auth: state.auth};
}

export default connect (mapStateToProps, actions) (Header);

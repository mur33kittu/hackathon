import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import * as actions from '../actions';
// import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import eCart from './cart.png';
// const history = createBrowserHistory();

const Header = props => {
  console.log(props);
  const [count, setCount] = useState (0);
  useEffect (
    () => {
      let tempCount = 0;
      for(let key of props?.cart?.products) {
        tempCount += key.quantityAdded;
      }
      setCount (tempCount);      
    }    
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
      className="navbar navbar-expand-lg navbar-light sticky-md-top"
      style={{backgroundColor: '#102E4D'}}
    >
      <div className="container-fluid">
        <NavLink to="/order" className="navbar-brand" style={{color: '#EBEBEB', fontSize: '45px', fontWeight: 700}}>
          <img src={eCart} alt="Italian Trulli" style={{width: '110px', height:'50px'}}></img></NavLink>
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
          <span className="navbar-text" style={{color: '#EBEBEB', marginRight:20}}>
            {renderButton()}
          </span>&nbsp;&nbsp;
          <span className="navbar-text"><NavLink to="/orders" className="navbar-brand small" style={{color: '#EBEBEB', fontSize: '20px', marginRight:18}}><b>Returns & orders</b></NavLink></span>          
          <span className="navbar-text">            
            <NavLink to="/cart" className="navbar-brand" style={{color: '#EBEBEB', verticalAlign: 'top'}}><FontAwesomeIcon
                icon={faCartPlus}
                style={{cursor: 'pointer'}}
                textAnchor={true}
              /></NavLink>              
              <span style={{color: '#EBEBEB', verticalAlign: 'top', marginLeft:-10, marginTop:5}}
              class="position-absolute translate-middle badge rounded-pill bg-danger">{count}</span>
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

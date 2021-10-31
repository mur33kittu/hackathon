import {connect} from 'react-redux';
import React, {useEffect, useState} from 'react';
import * as actions from '../actions';
import store from '../store/store';
const states = require ('./states.json');

function randomIntFromInterval (min, max) {
  // min and max included
  return Math.floor (Math.random () * (max - min + 1) + min);
}

const Checkout = props => {
  console.log(props);
  const renderPaymentInfo = () => {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            {JSON.stringify (props.payment)}
          </div>
        </div>
      </div>
    );
  };

  const renderAddressInfo = () => {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            {JSON.stringify (props.user)}
          </div>
        </div>
      </div>
    );
  };

  const renderPaymentEnter = ()=> {
    return (
      <div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Credit Cart Number(16 digits)
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Expiry Date(mm/yy)
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            cvv(3 numbers)
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
    )
  }

  const renderEnterAddress = () => {
    return (
      <div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            First Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Last Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Address 1
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Address 2
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            State
          </span>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            {states.map (state => (
              <option value={state.abbreviation} key={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Country
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            value="United States"
          />
        </div>
      </div>
    );
  };

  const renderCartInfo = () => {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            {JSON.stringify (props.cart.products)}
          </div>
        </div>
      </div>
    );
  };

  const [auth, setAuth] = useState (false);
  console.log (props);
  useEffect (
    () => {
      setAuth (props.auth);
      store.dispatch (actions.getUsers ('user' + randomIntFromInterval (1, 5)));
    },
    [props.auth]
  );

  useEffect (
    () => {
      if (props.user.user) {
        store.dispatch (actions.getPaymentInfo (props.user.user.userId));
      }
    },
    [props.user]
  );

  return (
    <div>
      <div class="card mx-auto mb-5">
        <div class="card-header">
          Enter Shipping Address
        </div>
        <div class="card-body">
          {props.auth ? renderAddressInfo () : renderEnterAddress ()}
        </div>
      </div>
      <div class="card mx-auto mb-5">
        <div class="card-header">
          Enter Payment Inforamation
        </div>
        <div class="card-body">          
          {props.auth ? renderPaymentInfo () : renderPaymentEnter ()}
        </div>
      </div>
      <div class="card">
          <div class="card-header">
            Enter Cart Inforamation
          </div>
        <div class="card-body">
        {renderCartInfo ()}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    products: state.products,
    cart: state.cart,
    auth: state.auth,
    user: state.user,
    payment: state.payment,
  };
}

export default connect (mapStateToProps, actions) (Checkout);

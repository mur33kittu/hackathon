import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './card.css';
export default function Card (props) {
  function onDetails () {
    let data = props.properties;
    props.addCart (data);
  }

  return (
    <div className="card-group" style={{width: '18rem'}}>
      <div className="card" class="card mb-4 border-0">
        <div className="card-body">
          <img
            src={props.imageurls.split (',')[0]}
            alt={props.brand}
            className="img-thumbnail"
            style={{border: '0'}}
          />

          {/* <small className="text-muted">
            <div className="row position-relative">
              <div className="col">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{cursor: 'pointer'}}
                  onClick={onDetails}
                />                
              </div>
            </div>
          </small> */}

          {/* <p className="card-text">
            {props.brand}
            {props.name}
            {props.categories}
          </p> */}
        </div>
        <div
          className="card-footer row position-relative"
          class="bg-transparent border-success"
        >

          <div
            className="col-md-6 end-0 row position-relative"
            style={{color: '#A3341A', fontSize: '20px', marginTop: '20px'}}
          >
            <b>{'$' + props.prices_amountmax}</b>
          </div>
          <h6
            className="card-title"
            style={{color: '#0F1111', fontSize: '13px', fontWeight: 400}}
          >
            <b>{props.name}</b>
          </h6>
          <button
            type="button"
            class="btn btn-warning"
            style={{fontSize: '14px', marginTop: '10px'}}
            onClick={onDetails}
          >
            <b>Add to Cart</b>
          </button>
          <span
            className="card-title"
            style={{color: '#0F1111', fontSize: '13px', fontWeight: 400}}
          >
            <b>{props.prices_availability}</b>
          </span>
          <hr />

        </div>

      </div>
    </div>
  );
}

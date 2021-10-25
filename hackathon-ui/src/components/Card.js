import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Card (props) {
  function onDetails () {
    let data = props.properties;
    props.addCart (data);
  }

  return (
    <div className="card-group" style={{width: '18rem'}}>
      <div className="card">
        <div className="card-body">
          <img src={props.imageurls.split(',')[0]} alt={props.brand} className="img-thumbnail" />
          <h6 className="card-title">{props.name}</h6>
          {/* <p className="card-text">
            {props.brand}
            {props.name}
            {props.categories}
          </p> */}
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <div className="row position-relative">
              <div className="col">
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{cursor: 'pointer'}}
                  onClick={onDetails}
                />                
              </div>
              <div className="col-md-6 end-0 position-absolute">{'Price: $' + props.prices_amountmax}</div>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
}

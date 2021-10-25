import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Team8Modal from './InfoModal';


const GenerateCard = (props) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.imageurls} className="img-fluid rounded-start" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-header bg-transparent border-success">
                <span>Order Placed: {props.order_placed_date}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Amount Max: {props.prices_amountmax}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Ship To: {props.shipTo}</span>
                
            </div>
            <h5 className="card-title border-primary">{props.name}</h5>
            <p className="card-text">
              Manufacturer Name: {props.manufacturer}<br/>
              Manufacturer Number: {props.manufacturernumber}<br/>
              Ordered Quantity: {props.quantity_ordered}<br/>
              Weight: {props.weight}<br/>
            </p>
            <p className="card-text">
              Tracking: <Team8Modal trackingNumber={props.trackingNumber} props={props}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Orders = props => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setOrders(props.orders)   
    }, [props?.orders])
    // useEffect(async () => {
    //   // console.log(props.orders);
    //   // store.dispatch(actions.getTrackingInfo(props.trackingNumber))
    //   // store.getState(state => console.log(state));
    // },[props?.orders, props?.trackingNumber])
  return orders?.orders?.map (order => <GenerateCard {...order} {...props}/>) || 'Loading';
};

function mapStateToProps (state) {
  return {products: state.products, orders: state.orders, tracking: state.tracking};
}

export default connect (mapStateToProps, actions) (Orders);

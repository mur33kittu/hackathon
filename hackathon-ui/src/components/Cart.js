import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions';

const ProductItem = product => {
    return (
        <div className="card mb-3" style={{"maxWidth": "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.imageurls} className="img-fluid rounded-start" alt={product.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.prices_condition}</h5>
                        <p className="card-text">
                            {product.manufacturernumber}
                            {product.categories}
                            {product.brand}
                            {product.prices_amountmax}
                            {product.weight}
                        </p>
                    </div>
                    <p className="card-text">
                        <small className="text-muted">Delete&nbsp;&nbsp;&nbsp;</small>
                        <small className="text-muted">Save For later&nbsp;&nbsp;&nbsp;&nbsp;</small>
                        <small className="text-muted">Compare with similar items</small>
                    </p>
                </div>
            </div>
        </div>      
    );
};

const Cart = props => { 
    // console.log(props);
  return (
      <>
        {props?.cart?.products?.map (p => <ProductItem {...p} />)}
        {props?.cart?.products.length > 0 ? <>
            <div className="card mb-3" style={{textAlign: "right"}}>
                SubTotals: {props.cart?.totalAmount}
            </div>
            <div className="card mb-3" style={{textAlign: "right"}}>
                <NavLink to="/checkout">Checkout</NavLink>
            </div>
            </> : (
                <div className="card mb-3">
                    <h1>Your cart is empty</h1>
                    <div className="card mb-3" style={{textAlign: "right"}}>
                        SubTotals: {props.cart?.totalAmount}
                    </div>
                </div>
            )
        }
      </>
  );
};

function mapStateToProps (state) {
  return {products: state.products, cart: state.cart};
}

export default connect (mapStateToProps, actions) (Cart);

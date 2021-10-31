import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../actions';


const Cart = props => { 
    const changeQuantity=(product, e) => {
        if(parseInt(e.target.value) < parseInt(product.rquantityAdded)) {
            props.deleteCart(product, 1);
        } else {
            for(let i = 0; i< parseInt(e.target.value) - parseInt(product.quantityAdded);i++) {
                props.addToCart(product)
            }        
        }
    }
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
                            <table class="table table-borderless">
                                <tr>
                                    <td>Manufacturernumber: </td><td>{product.manufacturernumber}</td>
                                </tr>
                                <tr>
                                    <td>Categories: </td><td>{product.categories}</td>
                                </tr><tr>
                                    <td>Brand: </td><td>{product.manufacturernumber}</td>
                                </tr><tr>
                                      <td>Price: </td><td>{product.prices_amountmax}</td>
                                </tr><tr>
                                    <td>Weight: </td><td>{product.weight}</td>
                                </tr><tr>
                                    <td>QuantityOrdered: </td><td>
                                        <select name="quantity" value={product.quantityAdded} className="form-select form-select-sm" onChange={e => changeQuantity(product, e)}>
                                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                            <option value={num}>{num}</option>
                                        ))}
                                        </select></td>
                                </tr>
                            </table>
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

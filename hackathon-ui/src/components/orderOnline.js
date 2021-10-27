import React, { useState } from 'react'
import { connect } from 'react-redux';
import Products from './Products'
import * as actions from '../actions';

const OrderOnline = (props) => {
    // const [products, setProducts] = useState (props.products || []);

    // function addCart (item) {
    //   setProducts (prevState => [...prevState, item]);
    // }

    return (
        <div>
            <Products />
        </div>
    )
}



function mapStateToProps (state) {
    return {products: state.products};
}

export default connect (mapStateToProps, actions) (OrderOnline);


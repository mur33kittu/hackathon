import React, {useCallback, useEffect, useRef, useState} from 'react';
// import axios from 'axios';
import Card from './Card';
import Select from 'react-select'
import { connect } from 'react-redux';
import * as actions from '../actions';
import useAsyncState from './useAsyncState';

const Products = props => {
  
  const [products, setProducts] = useState ([]);
  const [content, setContent] = useState ([]);
  const [brands, setbrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useAsyncState([]);
  
  useEffect(() => {
    setProducts(props.products);
    setFilteredProducts(props.products);
  },[props?.products])
  
  function renderProducts() {
    if(filteredProducts?.products?.length >0) {
      let uniqRecords = filteredProducts.products.map(a => a.brand).filter((v, i, a) => a.indexOf(v) === i)
      const brands = uniqRecords.map(p => ({value: p.toLowerCase(), label: p.toLowerCase()}))
      setbrands(brands);
      renderFilteredProducts();
    }
  }
  
  function renderFilteredProducts() {
    cardItem (filteredProducts);
  }

  useEffect (
    () => {
      renderProducts();
    },
    [products.products, filteredProducts.products]
  );
  async function filterUsingValue(e) {
    await setFilteredProducts(products.products.filter(a => a.brand.toLowerCase() === e.value.toLowerCase()))   
    console.log(filteredProducts); 
    renderFilteredProducts();
  }
  const cardItem = p => {
    const rows = [...Array (Math.ceil (p?.products?.length / 4))] || 0;
    const productRows = rows.map ((row, idx) =>
      p.products.slice (idx * 4, idx * 4 + 4)
    ) || [];

    const content = productRows.map ((row, idx) => (
      <div
        className="row"
        key={row.id}
        style={{margin: '20px 40px'}}
      >
        {row.map (product => (
          <Card
            key={row.id}
            className="col-md-3"
            {...product}
            addCart={e => props.addToCart(product)}
          />
        ))}
      </div>
    ));
    setContent (content);
  };

  return (
    <div>
      <Select options={brands} onChange={filterUsingValue} />
      {content}
    </div>
  );
};

function mapStateToProps (state) {
  return {products: state.products, cart: state.cart};
}

export default connect (mapStateToProps, actions) (Products);


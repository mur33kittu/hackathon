import './App.css';
// import Products from './components/Products';
import Header from './components/Header';
import {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App (props) {
  const [products] = useState (props.products || []);

  // function addCart (item) {
  //   setProducts (prevState => [...prevState, item]);
  // }
  return (
    <BrowserRouter>
      <div className="container">
        <Header products={products} /><br />
        <Routes history={history} />
        {/* <Header products={products}  /><br />
      <Products addCart={addCart} /> */}
      </div>
    </BrowserRouter>
  );
}

function mapStateToProps (state) {
  return {products: state.products, auth: state.auth};
}

export default connect (mapStateToProps, actions) (App);

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import OrderOnline from './components/orderOnline';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Orders from './components/Orders';


const Routes = (props) => {
  return (
    <Switch>
      <Route path="/cart" exact history={props.history} component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/" exact>
        <Redirect to="/order" />
      </Route>
      <Route path="/orders" component={Orders} />
      <Route path="/order" component={OrderOnline} />
      {/* <Route path="/" exact component={Welcome} /> */}
    </Switch>
  );
};

export default Routes;


import {NavLink} from 'react-router-dom';

const RouteHeader = props => { 
  return (
      <>
        <header className={classes.header}>
          <nav>            
            <ul>             
              <li>
                <NavLink to="/order">Order Online</NavLink>
              </li>                        
            </ul>
          </nav>          
          {props.children}
        </header>       
      </>
  );
};

function mapStateToProps (state) {
    return {products: state.products};
}

export default connect (mapStateToProps, actions) (RouteHeader);



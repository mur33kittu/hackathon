import React, {Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount () {
      this.shouldLeave ();
    }
    componentDidUpdate () {
      this.shouldLeave ();
    }
    shouldLeave () {
      if (!this.props.auth) {
        this.props.history.push ('/');
      }
    }
    render () {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps (state) {
    return {auth: state.auth};
  }

  return connect (mapStateToProps) (ComposedComponent);
};

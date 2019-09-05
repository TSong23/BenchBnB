import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';


const mapStateToProps = ({errors}) => {
  return {
    formType: 'login',
    errors: errors.session,
    navLink: <Link to="/signup">Sign Up</Link>
  }  
};

const mapDisptachToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SessionForm)
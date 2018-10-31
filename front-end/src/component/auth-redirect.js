import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AuthRedirect extends React.Component {
  render() {

  }
}

AuthRedirect.propTypes = {
  token: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);

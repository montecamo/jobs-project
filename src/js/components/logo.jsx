'use strict'
import React from 'react';
import { connect } from 'react-redux';

import { LogoWrapper } from '../styled-components';
import { changeTheme } from '../actions/themeActions';


const Logo = (props) => (
  <LogoWrapper theme={props.theme} onClick={props.changeTheme}>J</LogoWrapper>
)

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: () => {
      dispatch(changeTheme());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);

'use strict'
import React, { Component } from 'react';

import { Container, CheckboxInput, Checkmark } from '../styled-components/checkbox';


export default class Checkbox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    }

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.onClick()
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      }
    });
  }

  onClick(e) {
    let { innerOnClick } = this.props;
    innerOnClick ? innerOnClick() : null;
  }

  render() {
    return (
      <Container {...this.props}>
        {this.props.children}
        <CheckboxInput
          onChange={this.handleChange}
          defaultChecked={this.state.checked}
          type='checkbox'/>
        <Checkmark></Checkmark>
      </Container>
    )
  }
}

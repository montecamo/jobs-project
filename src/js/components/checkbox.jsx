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

  handleChange() {
    this.onClick()
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      }
    });
  }

  onClick() {
    if(this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
        <Container>
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

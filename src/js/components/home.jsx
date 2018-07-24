import React, { Component } from 'react';
import { connect } from 'react-redux';


@connect()
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='greeting'>Welcome to jobs search</div>
      </div>
    )
  }
}

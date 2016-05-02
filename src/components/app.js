import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
			  Header Component here
				{this.props.children}
				Footer Component here
			</div>
    );
  }
}

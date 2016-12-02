import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2 style={{ margin: 0 }}>PowerGrid Score Keeper</h2>
          <p1> Container </p1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

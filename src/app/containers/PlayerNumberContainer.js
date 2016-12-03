import React, { Component, PropTypes } from 'react';
import PlayerNumber from '../components/PlayerNumber';

export default class PlayerNumberContainer extends Component {
  constructor() {
    super();
    this.handleUpdatePlayersNumber = this.handleUpdatePlayersNumber.bind(this);
    this.state = {
      numberOfPlayers: 0,
    };
  }

  handleUpdatePlayersNumber(e) {
    console.log('e.target.value:', e.target.value);
    e.preventDefault();
    this.setState({
      numberOfPlayers: e.target.value,
    });
  }

  render() {
    return (
      <PlayerNumber
        onUpdatePlayersNumber={this.handleUpdatePlayersNumber}
      />
    );
  }
}

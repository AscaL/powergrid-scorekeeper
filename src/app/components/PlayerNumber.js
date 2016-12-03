import React, { PropTypes } from 'react';

export default function PlayerNumber(props) {
  console.log('props in PlayerNumber:', props);
  return (
    <div className="container">
      <h2> # Of Players! </h2>
      <p>Please select the number of players for the game, between one and six: </p>
      <form>
        <div className="form-group">
          <label htmlFor="sel1">Select list (select one): </label>
          <select
            className="form-control form-control-lg"
            id="sel1"
            onChange={props.onUpdatePlayersNumber}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </form>
    </div>
  );
}

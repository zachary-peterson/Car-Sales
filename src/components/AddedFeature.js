import React from 'react';
import { removeOnClick } from '../actions/onClickActions';

import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeOnClick(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeOnClick})(AddedFeature);


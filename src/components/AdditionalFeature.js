import React from 'react';
import { addFeaturesReducer } from '../reducers/addFeaturesReducer';

import { connect } from "react-redux";
import { addOnClick } from '../actions/onClickActions';



const AdditionalFeature = (props) => {
  console.log(props);

  const subFeat = (props, e) => {
    console.log(addOnClick);
  }
  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addOnClick(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

import React from 'react';

import { connect } from "react-redux";
import { addOnClick } from '../actions/onClickActions';



const AdditionalFeature = (props) => {
  console.log(props);  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addOnClick(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null, {addOnClick})(AdditionalFeature);
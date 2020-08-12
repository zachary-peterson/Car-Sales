import React from 'react';
import { state } from '../reducers/addFeaturesReducer';
import { connect } from 'react-redux';

import { removeOnClick } from '../actions/onClickActions'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature removeOnClick={props.removeOnClick} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, {removeOnClick})(AddedFeatures);

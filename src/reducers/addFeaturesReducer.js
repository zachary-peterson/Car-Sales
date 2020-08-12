import { ADD_ONCLICK, REMOVE_ONCLICK } from '../actions/onClickActions'

export const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const addFeaturesReducer = (state, action) => {
    switch(action.type) {
        case ADD_ONCLICK:
            
                if(state.feature === action.payload){
                    console.log(state.feature);
                    let addFt = [...state.feature];
                    state.car.features.push(addFt);
                    return state.additionalFeatures.id !== action.payload;
                }else{
                    return state
                }
            break;
            
        default: {
            console.log(state);
            return state;
        } 
    }
  }
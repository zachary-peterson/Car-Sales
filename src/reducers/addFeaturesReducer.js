import { ADD_ONCLICK, REMOVE_ONCLICK } from '../actions/onClickActions'

export const carState = {
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

  export const reducer = (state =  carState, action) => {
    switch(action.type) {
        case ADD_ONCLICK:
          console.log('addOnClick Function running succesfully...');
          if(state.car.features.find(feat => feat.id === action.payload.id)){
            return state;
        }else{
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload ]
                }
            };
        };
        case REMOVE_ONCLICK:
          console.log('removeOnClick Function running succesfully...')
          return {
            ...state,
            car: {
                ...state.car,
                price: state.car.price - action.payload.price,
                features: state.car.features.filter(feat => {
                    return feat.id !== action.payload.id
                })
            }
        };
        default: {
            // console.log(state);
            return state;
        }
    };
  };
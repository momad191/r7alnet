import { ADD_IMAGE, GET_IMAGES } from '../actions/types';
const initialState = {
    images: []
  };


  export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
    case ADD_IMAGE:
    //return {...state, images: [action.payload, ...state.images]};
    return {
        ...state,
        images: [payload, ...state.images],
        loading: false
      };

    case GET_IMAGES:
    //return { ...state, images: action.payload };
    return {
        ...state,
        images: payload,
        loading: false
      };


    default:
    return state;
 }
}
import { ADD_IMAGE, GET_IMAGES, GET_ERRORS } from './types';
import axios from 'axios';
import { setAlert } from './alert';

    
//ADD IMAGE
export const addImage = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/addimage', formData, config);
  
      dispatch({
        type: ADD_IMAGE,
        payload: res.data
      });
  
      dispatch(setAlert('image Created', 'success'));
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };



  // Get posts
export const getAllImages = () => async dispatch => {
  try {
    const res = await axios.get('/api/images');

    dispatch({
      type: GET_IMAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




//   // Get image
// export const getAllImages  = id => async dispatch => {
//     try {
//       const res = await axios.get('/api/images');
  
//       dispatch({
//         type: GET_IMAGES,
//         payload: res.data
//       });
//     } catch (err) {
//       dispatch({
//         type: GET_ERRORS,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   };
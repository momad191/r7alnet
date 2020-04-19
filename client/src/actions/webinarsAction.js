import { ADD_Webinars,GET_Webinars, GET_ERRORS } from './types';
import axios from 'axios';
import { setAlert } from './alert';

    
//ADD IMAGE
export const addWebinars = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/webinars', formData, config);
  
      dispatch({
        type: ADD_Webinars,
        payload: res.data,
        
      });
  
      dispatch(setAlert('Webinar Created', 'success'));
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }

    window.location = '/AllWebinars';
  };



  // Get posts
export const getAllWebinars = () => async dispatch => {
  try {
    const res = await axios.get('/api/webinars/allwebinars');

    dispatch({
      type: GET_Webinars,
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
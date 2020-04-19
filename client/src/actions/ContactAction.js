import { ADD_CONTACT,GET_Luminaries, GET_ERRORS } from './types';
import axios from 'axios';
import { setAlert } from './alert';

    
//ADD Luminaries
export const addContact = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/contacts', formData, config);
  
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
        
      });
   
      dispatch(setAlert('Contact Created', 'success'));
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }

    //window.location = '/AllLuminaries';
  };



  //Get Luminaries
  
export const getAllWebinars = () => async dispatch => {
  try {
    const res = await axios.get('/api/Luminaries/allLuminaries');

    dispatch({
      type: GET_Luminaries,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


 
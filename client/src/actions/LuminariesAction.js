import { ADD_Luminaries,GET_Luminaries, GET_ERRORS,EDIT_Luminaries } from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { Link } from 'react-router-dom';
 
    
//ADD Luminaries
export const addLuminaries = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/Luminaries', formData, config);
  
      dispatch({
        type: ADD_Luminaries,
        payload: res.data,
         
      });
  
      dispatch(setAlert('Luminaries Created', 'success'));
      window.location = '/showLuminaries';
      
      
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }

      
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


 

//ADD Luminaries
export const EditLuminaries = formData => async dispatch => {
  const config = {
    headers: { 
      'Content-Type': 'application/json'
    }
  };
     
  try {
    const res = await axios.post('/api/Luminaries/update/'+ this.props.match.params.id, formData, config);
    dispatch({
      type: EDIT_Luminaries,
      payload: res.data,
    });

    dispatch(setAlert('Luminaries Edited', 'success'));
    window.location = '/Allluminaries';
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }

    
};
 
 

// ------------------------------------------------------------------

//EditUser
export const editUserImage = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
      
  try {
    const res = await axios.post(`/api/users/EdituserImg/${id}`, formData, config);
    //const res = await axios.post('/api/EdituserImg/update/'+ this.props.match.params.id, formData, config);
 
    dispatch({
      type: EDIT_Luminaries,
      payload: res.data,
    });

    dispatch(setAlert('Luminaries Edited', 'success'));
    window.location = '/Allluminaries';
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
     // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }

    
};

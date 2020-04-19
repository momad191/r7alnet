import axios from 'axios';
import { setAlert } from './alert';
import { ADD_CONTACT, GET_ERRORS } from './types';
 
//import setAuthToken from '../utils/setAuthToken';
 
// Load User
// export const loadUser = () => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get('/api/auth');

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

// Register User
export const register = ({ name, email, channel , subject , msg }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
 
  const body = JSON.stringify({ name, email, channel ,subject ,msg  });

  try {
    const res = await axios.post('/api/contact', body, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });
 
    dispatch(setAlert('MSG Sent Sucsessfuly ', 'success'));

  
   // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }

  window.location = '/AllLContact';
};

//  Login User
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post('/api/auth', body, config);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });

//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };

// // Logout / Clear Profile
// export const logout = () => dispatch => {
//   dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };

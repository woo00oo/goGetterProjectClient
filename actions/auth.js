import { REGISTER_SUCCESS } from '@actions/type';
import authService from '@apis/authService';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, SET_MESSAGE } from './type';

export const signup = (email, name, nick_name, password, phone_number) => (dispatch) => {
  return authService.signup(email, name, nick_name, password, phone_number).then(
    (res) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message,
      });

      return Promise.resolve();
    },
    (err) => {
      const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    },
  );
};

export const signin = (email, password) => (dispatch) => {
  return authService.signin(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (err) => {
      const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload,
        message,
      });

      return Promise.reject();
    },
  );
};

export const logout = () => (dispatch) => {
  authService.logout();

  dispatch({
    type: LOGOUT,
  });
};

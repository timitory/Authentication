import axios from 'axios';
import { SIGNUP_ACTION, SET_USER_MUTATIONS, LOGIN_ACTION, LOGOUT_USER, LOGOUT_USER_MUTATIONS } from '../../storeconstants';
import SignupValidations from '@/Services/SignupValidation';

export default {
  async [SIGNUP_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = '';
    try {
      response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQb1GKfEgIGmcZYb2uMdkmTQAwTgrouGE`, postData);
      console.log(response);
    } catch (error) {
      let errorMessage = SignupValidations.getErrorMessagefromServer(
        error.response.data.error.errors[0].message
      );
      throw errorMessage;
    }
    if (response.status === 200) {
      context.commit(SET_USER_MUTATIONS, {
        email: response.data.email,
        token: response.data.token,
        expiresIn: response.data.expiresIn,
        refreshToken: response.data.refreshToken,
        userId: response.data.localId,
      });
    }
  },
  async [LOGIN_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = '';
    try {
      response = await axios.get(`https://dummyjson.com/users`, postData);
      console.log(response);
      console.log('fetched response');
      const user = response.data.users.find(user => user.email === postData.email && user.password === postData.password);
      if (user) {
        console.log('Logged In');
        console.log(user);
        context.commit(SET_USER_MUTATIONS, {
          email: user.email,
          password: user.password,
          expiresIn: '3600',
          refreshToken: 'dummyRefreshToken',
          userId: user.id,
        });
        context.dispatch('cart/loadCartFromLocalStorage', null, { root: true });
      } else {
        throw new Error('USER_NOT_FOUND');
      }
    } catch (error) {
      let errorMessage;
      if (error.message === 'USER_NOT_FOUND') {
        errorMessage = 'Invalid email or password';
      } else {
        errorMessage = 'An unexpected error occurred. Please try again later.';
      }
      console.error('Login Error:', errorMessage);
      throw new Error(errorMessage);
    }
  },
  [LOGOUT_USER]({ commit }) {
    commit(LOGOUT_USER_MUTATIONS);
    commit('cart/clearCart', null, { root: true });
  }
};

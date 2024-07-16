import { SET_USER_MUTATIONS, LOGOUT_USER_MUTATIONS } from '../../storeconstants';

export default {
  [SET_USER_MUTATIONS](state, payload) {
    console.log('SET_USER_MUTATIONS called with payload:', payload);
    state.email = payload.email;
    state.password = payload.password;
    state.userId = payload.userId;
    state.refreshToken = payload.refreshToken;
    state.expiresIn = payload.expiresIn;
    localStorage.setItem('userId', payload.userId);
  },
  [LOGOUT_USER_MUTATIONS](state) {
    console.log('LOGOUT_USER_MUTATIONS called');
    state.email = null;
    state.password = null;
    state.userId = null;
    state.refreshToken = null;
    state.expiresIn = null;
    localStorage.removeItem('userId');
    localStorage.removeItem(`cartItems_${state.userId}`);
  },
};

}
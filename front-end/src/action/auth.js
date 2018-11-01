import superagent from 'superagent';
import * as routes from '../routes';

// ======================================================
// SYNC
// ======================================================

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

// ======================================================
// ASYNC
// ======================================================

export const signupRequest = user => (store) => {
  return superagent.post(`${API_URL}${routes.SIGNUP_BACKEND}`)
    .send(user)
    // .withCredentials();
    .then((response) => {
      return store.dispatch(set(response.token));
    });
};

export const loginRequest = user => (store) => {
  return superagent.get(`${API_URL}${routes.LOGIN_BACKEND}`) // eslint-disable-line
    .auth(user.username, user.password)
    .then((response) => {
      return store.dispatch(set(response.token));
    });
};
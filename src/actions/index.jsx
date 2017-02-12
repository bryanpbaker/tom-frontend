import fb from '../config/firebase.config';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CURRENT_USER = 'CURRENT_USER';

const auth = fb.auth();

export function authenticateUser(email, password) {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((currentUser) => {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: currentUser
      });
    });
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch({
          type: CURRENT_USER,
          payload: currentUser
        });
      }
    });
  }
}

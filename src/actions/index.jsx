import { browserHistory } from 'react-router';
import fb from '../config/firebase.config';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CURRENT_USER = 'CURRENT_USER';
export const CREATE_USER = 'CREATE_USER';

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
      } else {
        console.log('There is no user currently logged in.');
      }
    });
  };
}

export function signoutUser() {
  return () => {
    if (confirm('Are you sure you want to log out?')) {
      auth.signOut()
        .then(() => {
          console.log('User has been logged out.');
          browserHistory.push('/login');
        });
    }
  };
}

export function createUser(email, password, displayName) {
  return (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password).then(user => {
      user.updateProfile({
        displayName
      }).then(() => {
        dispatch({
          type: CREATE_USER,
          payload: user
        });
      });
    });
  };
}

import fb from '../config/firebase.config';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

export function authenticateUser(email, password) {
  const auth = fb.auth();

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

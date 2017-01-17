// TODO: Implement action to set current user

import fb from '../config/firebase.config';

fb.auth().onAuthStateChanged((user) => {
  console.log(user);
});

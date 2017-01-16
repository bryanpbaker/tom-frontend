import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBgnPDqwIOFS0kzBn_w9KuTtIR4d8Ul0As',
  authDomain: 'tom-app-bddda.firebaseapp.com',
  databaseURL: 'https://tom-app-bddda.firebaseio.com',
  storageBucket: 'tom-app-bddda.appspot.com',
  messagingSenderId: '213564303632'
};

const fb = firebase.initializeApp(config);

export default fb;

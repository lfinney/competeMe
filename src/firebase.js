import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBGYJjhOBbMxJkMkMWVBbKg749kduGIaw8",
  authDomain: "competeme-f17g7.firebaseapp.com",
  databaseURL: "https://competeme-f17g7.firebaseio.com",
  projectId: "competeme-f17g7",
  storageBucket: "competeme-f17g7.appspot.com",
  messagingSenderId: "16030274444"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

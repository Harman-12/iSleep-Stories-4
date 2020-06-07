import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBnwjozvdOjgq1lGvKv7uwDi5w-tNdKdGQ",
    authDomain: "isleep-stories.firebaseapp.com",
    databaseURL: "https://isleep-stories.firebaseio.com",
    projectId: "isleep-stories",
    storageBucket: "isleep-stories.appspot.com",
    messagingSenderId: "1072121504459",
    appId: "1:1072121504459:web:abd24d299f31086deab14e"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()      
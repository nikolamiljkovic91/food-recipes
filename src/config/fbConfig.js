  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBp9XgB3erpl3vxVPy7MrTDQfBTL5KLvJ0",
    authDomain: "food-recipes-3a7e0.firebaseapp.com",
    databaseURL: "https://food-recipes-3a7e0.firebaseio.com",
    projectId: "food-recipes-3a7e0",
    storageBucket: "food-recipes-3a7e0.appspot.com",
    messagingSenderId: "466433708026",
    appId: "1:466433708026:web:7b305152ad6a7030859e43",
    measurementId: "G-C1R1W0D36P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
import Firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCzLYAzGCaS3u6WMJMXHzV4e9ewSjGY_i8",
    authDomain: "register-store-5ff6d.firebaseapp.com",
    projectId: "register-store-5ff6d",
    storageBucket: "register-store-5ff6d.appspot.com",
    messagingSenderId: "584620642718",
    appId: "1:584620642718:web:ba4167c6c44e5549c4468f",
    measurementId: "G-33ETRLYX67"
  };
  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);

  export const database = Firebase.firestore();
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAKLd_tBijJVLnIfme-wn4i3KSGWFKNxqk",
  authDomain: "projektpai-bca84.firebaseapp.com",
  databaseURL: "https://projektpai-bca84.firebaseio.com",
  projectId: "projektpai-bca84",
  storageBucket: "projektpai-bca84.appspot.com",
  messagingSenderId: "1090187457274",
  appId: "1:1090187457274:web:3addd02165527cbb"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

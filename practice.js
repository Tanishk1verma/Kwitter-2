var firebaseConfig = {
    apiKey: "AIzaSyDLht86m9vI0Gz4o4GwDzeTUHUQ_4h1oBM",
    authDomain: "kwitter-practise-864ca.firebaseapp.com",
    databaseURL: "https://kwitter-practise-864ca-default-rtdb.firebaseio.com",
    projectId: "kwitter-practise-864ca",
    storageBucket: "kwitter-practise-864ca.appspot.com",
    messagingSenderId: "408973307712",
    appId: "1:408973307712:web:4066492a832ff68bd8d4a5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function Addusername() {
    var user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user here"
    });
}
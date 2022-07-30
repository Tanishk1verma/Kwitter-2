var firebaseConfig = {
      apiKey: "AIzaSyA8wZ8_zYM09pl9-A8H2ATXlCirwQ_hHiw",
      authDomain: "kwitter-2-ac1aa.firebaseapp.com",
      databaseURL: "https://kwitter-2-ac1aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-ac1aa",
      storageBucket: "kwitter-2-ac1aa.appspot.com",
      messagingSenderId: "491177834589",
      appId: "1:491177834589:web:3493659494d4988e0c35b4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names=childKey;
      console.log("Room_names are -"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

userName = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+userName+"!";

function AddRoom() {
      Roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(Roomname).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("roomname",Roomname);
      window.location="kwitter_page.html"; 
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function Logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}
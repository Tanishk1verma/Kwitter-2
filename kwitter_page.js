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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
    function send() {
      msg =document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            Like:0
      });
      document.getElementById("msg").value="";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_with_tag="<button class='btn btn-success' id="+firebase_message_id+" value="+like+ " onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs up'>Like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function Logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}
function updatelike(message_id) {
button_id=message_id;
likes=document.getElementById(button_id).value;
updates_likes=Number(likes)+1;
console.log(updates_likes);
firebase.database.ref(room_name).child(message_id).update({
      like:updates_likes
});
}
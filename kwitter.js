function addUser() {
    var user_name = document.getElementById("username").value;
    localStorage.setItem("username",user_name);
    console.log("username="+user_name);
    window.location="kwitter_room.html";
    
}
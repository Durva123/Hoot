
var firebaseConfig = {
      apiKey: "AIzaSyDke_Ubo3Sb-XmDUhdHx1emUunKOAH-on4",
      authDomain: "kwitter-cb637.firebaseapp.com",
      databaseURL: "https://kwitter-cb637-default-rtdb.firebaseio.com",
      projectId: "kwitter-cb637",
      storageBucket: "kwitter-cb637.appspot.com",
      messagingSenderId: "858731539257",
      appId: "1:858731539257:web:f52425b98630a0c78dd6e8"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"Adding_Room_Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
 
function logout(){
      window.location="index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}


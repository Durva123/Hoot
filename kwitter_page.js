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
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

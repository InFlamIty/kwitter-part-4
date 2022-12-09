var firebaseConfig = {
    apiKey: "AIzaSyC-pExsidvSszHtMOY-5Z8qL-vzkOP7cxM",
    authDomain: "my-kwitter-79727.firebaseapp.com",
    databaseURL: "https://my-kwitter-79727-default-rtdb.firebaseio.com",
    projectId: "my-kwitter-79727",
    storageBucket: "my-kwitter-79727.appspot.com",
    messagingSenderId: "695315657970",
    appId: "1:695315657970:web:5944468fe10f25738d0c6b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var userName = localStorage.getItem("userName")
room_name = localStorage.getItem("roomName")
function send()
{
  msg = document.getElementById("message").value
  firebase.database().ref(room_name).push({
        name: userName , message: msg , like: 0
  })
  document.getElementById("message").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
function logout()
{
  localStorage.removeItem("roomName")
  localStorage.removeItem("userName")
  window.location = "index.html"
}

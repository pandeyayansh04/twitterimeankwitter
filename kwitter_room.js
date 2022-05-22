
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBQkSfgIOeM_H7AYKbrhxfdPT53UX8e4gg",
      authDomain: "twitterbutbad.firebaseapp.com",
      databaseURL: "https://twitterbutbad-default-rtdb.firebaseio.com",
      projectId: "twitterbutbad",
      storageBucket: "twitterbutbad.appspot.com",
      messagingSenderId: "1088956868083",
      appId: "1:1088956868083:web:dc8db3e82453c1cf2dde86"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyANQNMIjD_xJn9BZvTjXywrXw4JyTxUUiQ",
    authDomain: "forrestgump-794a7.firebaseapp.com",
    databaseURL: "https://forrestgump-794a7.firebaseio.com",
    projectId: "forrestgump-794a7",
    storageBucket: "",
    messagingSenderId: "133053189542"
  };
  firebase.initializeApp(config);
//インスタンス作成
let fire = firebase.database().ref();
let fire_dir = firebase.database();

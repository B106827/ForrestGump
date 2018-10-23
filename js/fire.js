// Initialize Firebase

var config = {
    apiKey: "AIzaSyDYs7Rb0On2_R6pdnehYB9mg3JKAHDXm1g",
    authDomain: "work-chat-a23ec.firebaseapp.com",
    databaseURL: "https://work-chat-a23ec.firebaseio.com",
    projectId: "work-chat-a23ec",
    storageBucket: "",
    messagingSenderId: "76427543557"
};
firebase.initializeApp(config);
//インスタンス作成
let fire = firebase.database().ref();
let fire_dir = firebase.database();

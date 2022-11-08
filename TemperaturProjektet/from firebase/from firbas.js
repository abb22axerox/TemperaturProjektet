// Your web app's Firebase configuration

//this is NOT done yet

const firebaseConfig = {
    apiKey: "AIzaSyDzJMZg8uoitcrbyop9PPu5aQpuw2ja38Q",
    authDomain: "test-7552f.firebaseapp.com",
    databaseURL: "https://test-7552f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-7552f",
    storageBucket: "test-7552f.appspot.com",
    messagingSenderId: "107856682690",
    appId: "1:107856682690:web:599547b5814614132be55b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

//room1----------------------------------------------------------------

var room1Ref = db.ref("rum1");

let timeList1 = []
let tempList1 = []

room1Ref.once("value").then((snapshot) => {
    let r1r = snapshot.val()
    let tempTime = r1r.split(',')
    let IDKWhatToNameThis = []
    for(i = 0; i < tempTime.length; i++){
        IDKWhatToNameThis.push(tempTime[i].split(' '))
        }


    for(i=0; i < IDKWhatToNameThis.length; i++){
        timeList1.push(IDKWhatToNameThis[i][0])
    }

    for(i=0; i < IDKWhatToNameThis.length; i++){
        tempList1.push(IDKWhatToNameThis[i][1])
    }
    console.log(timeList1)
    console.log(tempList1)
})


// Your web app's Firebase configuration

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

var room2Ref = db.ref("rum2");

let timeList = []
let tempList = []

room2Ref.once("value").then((snapshot) => {
    let r2r = snapshot.val()
    // console.log(r2r)
    let tempTime = r2r.split(',')
    // console.log(tempTime)
    let IDKWhatToNameThis = []
    for(i = 0; i < tempTime.length; i++){
        IDKWhatToNameThis.push(tempTime[i].split(' '))
        // console.log(IDKWhatToNameThis)
        }
    // console.log(IDKWhatToNameThis[0][1] + ' turtles eat toast')


    for(i=0; i < IDKWhatToNameThis.length; i++){
        timeList.push(IDKWhatToNameThis[i][0])
        // console.log(timeList)
    }

    for(i=0; i < IDKWhatToNameThis.length; i++){
        tempList.push(IDKWhatToNameThis[i][1])
        // console.log(tempList)
    }
    console.log(timeList)
    console.log(tempList)
})

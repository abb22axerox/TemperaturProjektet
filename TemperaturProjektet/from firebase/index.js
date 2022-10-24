// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC1Z3eWF5XuyBvX8XPetVs76hy5osSA6KM",
    authDomain: "skogens-thm.firebaseapp.com",
    databaseURL: "https://skogens-thm-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skogens-thm",
    storageBucket: "skogens-thm.appspot.com",
    messagingSenderId: "666647829702",
    appId: "1:666647829702:web:ecefb34b3c3dda0b5b0bc7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var room2Ref = db.ref("rum2");

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
    
    let timeList = []

    for(i=0; i < IDKWhatToNameThis.length; i++){
        timeList.push(IDKWhatToNameThis[i][0])
        // console.log(timeList)
    }

    let tempList = []

    for(i=0; i < IDKWhatToNameThis.length; i++){
        tempList.push(IDKWhatToNameThis[i][1])
        // console.log(tempList)
    }
    console.log(timeList)
    console.log(tempList)
})

// Your web app's Firebase configuration

//this is NOT done yet

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

//room1----------------------------------------------------------------

var room1Ref = db.ref("Rum1");

let timeList1 = []
let tempList1 = []
let humList1 = []

room1Ref.once("value").then((snapshot) => {
    let r1r = snapshot.val()
    let r1his = r1r.Historik
    let startTime = Number(prompt('start time?'))
    let endTime = Number(prompt('end time?'))

    for(i = 0; i < Object.keys(r1his).length; i++){
        let thisOne = Object.values(r1his)[i].split('-')
        
        tempList1.push(thisOne[1])
        humList1.push(thisOne[2])
        timeList1.push(thisOne[0]/60)
    }
})

console.log(tempList1)
console.log(humList1)
console.log(timeList1)


//room2----------------------------------------------------------------

var room2Ref = db.ref("Rum2");

let tempList2 = []
let humList2 = []

room2Ref.once("value").then((snapshot) => {
    let r2r = snapshot.val()
    let r2his = r2r.Historik

    for(i = 0; i < Object.keys(r2his).length; i++){
        let thisOne = Object.values(r2his)[i].split('-')
        
        tempList2.push(thisOne[1])
        humList2.push(thisOne[2])
    }
})

console.log(tempList2)
console.log(humList2)


//room3----------------------------------------------------------------

var room3Ref = db.ref("Rum3");

let tempList3 = []
let humList3 = []

room3Ref.once("value").then((snapshot) => {
    let r3r = snapshot.val()
    let r3his = r3r.Historik

    for(i = 0; i < Object.keys(r3his).length; i++){
        let thisOne = Object.values(r3his)[i].split('-')
        
        tempList3.push(thisOne[1])
        humList3.push(thisOne[2])
    }
})

console.log(tempList3)
console.log(humList3)


//room4----------------------------------------------------------------

var room4Ref = db.ref("Rum4");

let tempList4 = []
let humList4 = []

room4Ref.once("value").then((snapshot) => {
    let r4r = snapshot.val()
    let r4his = r4r.Historik

    for(i = 0; i < Object.keys(r4his).length; i++){
        let thisOne = Object.values(r4his)[i].split('-')
        
        tempList4.push(thisOne[1])
        humList4.push(thisOne[2])
    }
})

console.log(tempList4)
console.log(humList4)


//room4----------------------------------------------------------------

var room5Ref = db.ref("Rum5");

let tempList5 = []
let humList5 = []

room5Ref.once("value").then((snapshot) => {
    let r5r = snapshot.val()
    let r5his = r5r.Historik

    for(i = 0; i < Object.keys(r5his).length; i++){
        let thisOne = Object.values(r5his)[i].split('-')
        
        tempList5.push(thisOne[1])
        humList5.push(thisOne[2])
    }
})

console.log(tempList5)
console.log(humList5)


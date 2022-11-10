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

let tempList1 = []
let humList1 = []

room1Ref.once("value").then((snapshot) => {
  let r1r = snapshot.val()
  let r1his = r1r.Historik

  for(i = 0; i < Object.keys(r1his).length; i++){
      let thisOne = Object.values(r1his)[i].split(' - ')
      
      tempList1.push(thisOne[1])
      humList1.push(thisOne[2])
      // timeList.push(Number(thisOne[0])/3600)
  }
})

console.log(tempList1)
console.log(humList1)


//room2----------------------------------------------------------------

var room2Ref = db.ref("Rum2");

let timeList = []
let tempList2 = []
let humList2 = []

room2Ref.once("value").then((snapshot) => {
  let r2r = snapshot.val()
  let r2his = r2r.Historik

  for(i = 0; i < Object.keys(r2his).length; i++){
      let thisOne = Object.values(r2his)[i].split('-')
      
      tempList2.push(thisOne[1])
      humList2.push(thisOne[2])
      timeList.push(Number(thisOne[0])/3600)
  }
})

console.log(tempList2)
console.log(humList2)
console.log(timeList)


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


//room5----------------------------------------------------------------

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

let tempArray1 = tempList1
let tempArray2 = tempList2
let tempArray3 = tempList3
let tempArray4 = tempList4
let tempArray5 = tempList5

let humArray1 = humList1
let humArray2 = humList2
let humArray3 = humList3
let humArray4 = humList4
let humArray5 = humList5

//Load the graph
graphFunction()

//Define varibles for temperature and humidity arrays
var a = 0
var b = 0

  var chosen = 0

  function refreshFunction(){
    graphFunction()
  }

  function tempFunction(){
    //Initialize temp arrays to 0
    temp1Array = [0]
    temp2Array = [0]
    temp3Array = [0]
    temp4Array = [0]
    temp5Array = [0]
    // tempSArray = [0]
    chosen = 1
    graphFunction()
    //Reset checkboxes
    document.getElementById(id="S1").checked = false;
    document.getElementById(id="S2").checked = false;
    document.getElementById(id="S3").checked = false;
    document.getElementById(id="S4").checked = false;
    document.getElementById(id="S5").checked = false;
  }
  
  function humFunction(){
    //Initialize hum arrays to 0
    humArray1 = [0]
    humArray2 = [0]
    humArray3 = [0]
    humArray3 = [0]
    humArray5 = [0]
    // humSArray = [0]
    chosen = 2
    graphFunction()
    //Reset checkboxes
    document.getElementById(id="S1").checked = false;
    document.getElementById(id="S2").checked = false;
    document.getElementById(id="S3").checked = false;
    document.getElementById(id="S4").checked = false;
    document.getElementById(id="S5").checked = false;
  }

  //Display a trace in the graph if temperature (chosen = 1) or humidity (chosen = 2) 
  //button is selcted and a selected checkbox = true. Below is 6 checkboxes 
  //
  //Temperature checkboxes
  //Sensor 1
  document.addEventListener('DOMContentLoaded', function () {
  var sensor1 = document.querySelector('input[id="S1"]')

  sensor1.addEventListener('change', function () {
    if (sensor1.checked) {
      if(chosen == 1){
        // tempArray1 = tempList
        graphFunction()
      }
      if(chosen == 2){
        graphFunction()
      }
      if(chosen == 0){
        alert("Please press the Temperature/Humidity button first")
        document.getElementById(id="S1").checked = false;
      }
    } else{
      tempArray1 = [0]
      // console.log(tempArray1)
      graphFunction()

      humArray1 = [0]
      graphFunction()
    }
    tempArray1 = tempList1
    humArray1 = humList1
  })
  })
  // console.log(tempArray1)

  //Sensor 2
  document.addEventListener('DOMContentLoaded', function () {
    var sensor2 = document.querySelector('input[id="S2"]')

    sensor2.addEventListener('change', function () {
      if (sensor2.checked) {
        if(chosen == 1){
          graphFunction()
        }
        if(chosen == 2){
          graphFunction()
        }
        if(chosen == 0){
          alert("Please press the Temperature/Humidity button first")
          document.getElementById(id="S2").checked = false;
        }
      } else{
        tempArray2 = [0]
        graphFunction()

        humArray2 = [0]
        graphFunction()
      }
      tempArray2 = tempList2
      humArray2 = humList2
    })
    })

  //Sensor 3
  document.addEventListener('DOMContentLoaded', function () {
    var sensor3 = document.querySelector('input[id="S3"]')

    sensor3.addEventListener('change', function () {
      if (sensor3.checked) {
        if(chosen == 1){
          graphFunction()
        }
        if(chosen == 2){
          graphFunction()
        }
        if(chosen == 0){
          alert("Please press the Temperature/Humidity button first")
          document.getElementById(id="S3").checked = false;
        }
      } else{
        tempArray3 = [0]
        graphFunction()

        humArray3 = [0]
        graphFunction()
      }
      tempArray3 = tempList3
      humArray3 = humList3
    })
    })

  //Sensor 4
  document.addEventListener('DOMContentLoaded', function () {
    var sensor4 = document.querySelector('input[id="S4"]')

    sensor4.addEventListener('change', function () {
      if (sensor4.checked) {
        if(chosen == 1){
          graphFunction()
        }
        if(chosen == 2){
          graphFunction()
        }
        if(chosen == 0){
          alert("Please press the Temperature/Humidity button first")
          document.getElementById(id="S4").checked = false;
        }
      } else{
        tempArray4 = [0]
        graphFunction()

        humArray4 = [0]
        graphFunction()
      }
      tempArray4 = tempList4
      humArray4 = humList4
    })
    })

  //Sensor 5
  document.addEventListener('DOMContentLoaded', function () {
    var sensor5 = document.querySelector('input[id="S5"]')

    sensor5.addEventListener('change', function () {
      if (sensor5.checked) {
        if(chosen == 1){
          graphFunction()
        }
        if(chosen == 2){
          graphFunction()
        }
        if(chosen == 0){
          alert("Please press the Temperature/Humidity button first")
          document.getElementById(id="S5").checked = false;
        }
      } else{
        tempArray5 = [0]
        graphFunction()

        humArray5 = [0]
        graphFunction()
      }
      tempArray5 = tempList5
      humArray5 = humList5
    })
    })

  //The different sensor names from the settings tab
  //Recieving data from local storage
  var traceName1 = localStorage.getItem("sensor1Name")
  var traceName2 = localStorage.getItem("sensor2Name")
  var traceName3 = localStorage.getItem("sensor3Name")
  var traceName4 = localStorage.getItem("sensor4Name")
  var traceName5 = localStorage.getItem("sensor5Name")


//The graph function plots the traces. It can make them in different colours.
//Each trace gets a label name per sensor. 
function graphFunction() {
  // Define Data
  if (chosen == 1){
  var data = [
    //Temperature
    {x: timeList, y: tempArray1, mode:"lines+markers", 
    line: {color: 'rgb(255,0,0)', width: 3}, name: traceName1},

    {x: timeList, y: tempArray2, mode:"lines+markers", 
    line: {color: 'rgb(0,255,0)', width: 3}, name: traceName2},

    {x: timeList, y: tempArray3, mode:"lines+markers", 
    line: {color: 'rgb(0,0,255)', width: 3}, name: traceName3},

    {x: timeList, y: tempArray4, mode:"lines+markers", 
    line: {color: 'rgb(0,255,255)', width: 3}, name: traceName4},

    {x: timeList, y: tempArray5, mode:"lines+markers", 
    line: {color: 'rgb(255,255,0)', width: 3}, name: traceName5},

    // {x: timeArray, y: tempSArray, mode:"lines+markers", 
    // line: {color: 'rgb(0,0,0)', width: 3}, name:"SMHI Temp"}
  ]}

  if(chosen == 2){
    data = [
    //Humidity
    {x: timeList, y: humArray1, mode:"lines+markers", 
    line: {color: 'rgb(255,0,0)', width: 3}, name: traceName1},

    {x: timeList, y: humArray2, mode:"lines+markers", 
    line: {color: 'rgb(0,255,0)', width: 3}, name: traceName2},

    {x: timeList, y: humArray3, mode:"lines+markers", 
    line: {color: 'rgb(0,0,255)', width: 3}, name: traceName3},

    {x: timeList, y: humArray3, mode:"lines+markers", 
    line: {color: 'rgb(0,255,255)', width: 3}, name: traceName4},

    {x: timeList, y: humArray5, mode:"lines+markers", 
    line: {color: 'rgb(255,255,0)', width: 3}, name: traceName5},

    // {x: timeArray, y: humSArray, mode:"lines+markers", 
    // line: {color: 'rgb(0,0,0)', width: 3}, name:"SMHI Hum"}
  ]}

  a = Number(document.getElementById("startTime").value)
  b = Number(document.getElementById("stopTime").value)

  // Define Layout
  //Defines the name of the axis, temp, hum, time, titles
  if (chosen == 1){
    var layout = {
      xaxis: {range: [a, b], title: "Time (Hours)"},
      yaxis: {range: [0, 50], title: "Temperature (°C)"},
      title: "Temperature"
    }
  }
  if (chosen == 2){
    var layout = {
      xaxis: {range: [a, b], title: "Time (Hours)"},
      yaxis: {range: [0, 50], title: "Humidity (%)"},
      title: "Humidity"
    }
  }

  // Display using Plotly
  Plotly.newPlot("myPlot", data, layout)
}
// Axel Roxenborg

// Changing the buttons' appearance while active
  function S1Style(){
    if (S1.checked){
      S1Label.className = "sensorButton1Active"
    } else {
      S1Label.className = "sensorButton1"
    }
  }

  function S2Style(){
    if (S2.checked){
      S2Label.className = "sensorButton2Active"
    } else {
      S2Label.className = "sensorButton2"
    }
  }

  function S3Style(){
    if (S3.checked){
      S3Label.className = "sensorButton1Active"
    } else {
      S3Label.className = "sensorButton1"
    }
  }

  function S4Style(){
    if (S4.checked){
      S4Label.className = "sensorButton2Active"
    } else {
      S4Label.className = "sensorButton2"
    }
  }

  function S5Style(){
    if (S5.checked){
      S5Label.className = "sensorButton1Active"
    } else {
      S5Label.className = "sensorButton1"
    }
  }

  function tempStyle(){
    temp.className = "tempButtonActive"
    hum.className = "humButton"
    //since temp and hum reset the sensor buttons:
      S1Label.className = "sensorButton1"
      S2Label.className = "sensorButton2"
      S3Label.className = "sensorButton1"
      S4Label.className = "sensorButton2"
      S5Label.className = "sensorButton1"
  }

  function humStyle(){
    hum.className = "humButtonActive"
    temp.className = "tempButton"
    S1Label.className = "sensorButton1"
    S2Label.className = "sensorButton2"
    S3Label.className = "sensorButton1"
    S4Label.className = "sensorButton2"
    S5Label.className = "sensorButton1"
  }
  // Sarebro
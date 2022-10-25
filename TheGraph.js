graphFunction()

//Define varibles for temperature and humidity arrays
var a = 0
var b = 0

var timeArray = [0,10,25]

console.log(timeList)

//Temperature
  // Sensor 1
  var temp1Array = [0]
  // Sensor 2
  var temp2Array = [0]
  // Sensor 3
  var temp3Array = [0]
  // Sensor 4
  var temp4Array = [0]
  // Sensor 5
  var temp5Array = [0]
  //SMHI??
  // var tempSArray = [0]

//Humidity
  //Sensor 1
  var hum1Array = [0]
  // Sensor 2
  var hum2Array = [0]
  // Sensor 3
  var hum3Array = [0]
  // Sensor 4
  var hum4Array = [0]
  // Sensor 5
  var hum5Array = [0]
  //SMHI??
  // var humSArray = [0]

  var chosen = 0

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
    // document.getElementById(id="SMHI").checked = false;
  }
  
  function humFunction(){
    //Initialize hum arrays to 0
    hum1Array = [0]
    hum2Array = [0]
    hum3Array = [0]
    hum4Array = [0]
    hum5Array = [0]
    // humSArray = [0]
    chosen = 2
    graphFunction()
    //Reset checkboxes
    document.getElementById(id="S1").checked = false;
    document.getElementById(id="S2").checked = false;
    document.getElementById(id="S3").checked = false;
    document.getElementById(id="S4").checked = false;
    document.getElementById(id="S5").checked = false;
    // document.getElementById(id="SMHI").checked = false;
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
        temp1Array = [8,19,44]
        graphFunction()
      }
      if(chosen == 2){
        hum1Array = [4,30,20]
        graphFunction()
      }
    } else{
      temp1Array = [0]
      graphFunction()

      hum1Array = [0]
      graphFunction()
    }
  })
  })

  //Sensor 2
  document.addEventListener('DOMContentLoaded', function () {
    var sensor2 = document.querySelector('input[id="S2"]')

    sensor2.addEventListener('change', function () {
      if (sensor2.checked) {
        if(chosen == 1){
          temp2Array = [4,11,34]
          graphFunction()
        }
        if(chosen == 2){
          hum2Array = [40,28,18]
          graphFunction()
        }
      } else{
        temp2Array = [0]
        graphFunction()

        hum2Array = [0]
        graphFunction()
      }
    })
    })

  //Sensor 3
  document.addEventListener('DOMContentLoaded', function () {
    var sensor3 = document.querySelector('input[id="S3"]')

    sensor3.addEventListener('change', function () {
      if (sensor3.checked) {
        if(chosen == 1){
          temp3Array = [8,19,44]
          graphFunction()
        }
        if(chosen == 2){
          hum3Array = [4,30,20]
          graphFunction()
        }
      } else{
        temp3Array = [0]
        graphFunction()

        hum3Array = [0]
        graphFunction()
      }
    })
    })

  //Sensor 4
  document.addEventListener('DOMContentLoaded', function () {
    var sensor4 = document.querySelector('input[id="S4"]')

    sensor4.addEventListener('change', function () {
      if (sensor4.checked) {
        if(chosen == 1){
          temp4Array = [8,19,44]
          graphFunction()
        }
        if(chosen == 2){
          hum4Array = [4,30,20]
          graphFunction()
        }
      } else{
        temp4Array = [0]
        graphFunction()

        hum4Array = [0]
        graphFunction()
      }
    })
    })

  //Sensor 5
  document.addEventListener('DOMContentLoaded', function () {
    var sensor5 = document.querySelector('input[id="S5"]')

    sensor5.addEventListener('change', function () {
      if (sensor5.checked) {
        if(chosen == 1){
          temp5Array = [8,19,44]
          graphFunction()
        }
        if(chosen == 2){
          hum5Array = [4,30,20]
          graphFunction()
        }
      } else{
        temp5Array = [0]
        graphFunction()

        hum5Array = [0]
        graphFunction()
      }
    })
    })

  //SMHI??
  // document.addEventListener('DOMContentLoaded', function () {
  //   var sensorS = document.querySelector('input[id="SMHI"]')

  //   sensorS.addEventListener('change', function () {
  //     if (sensorS.checked) {
  //       if(chosen == 1){
  //         tempSArray = [8,19,44]
  //         graphFunction()
  //       }
  //       if(chosen == 2){
  //         humSArray = [4,30,20]
  //         graphFunction()
  //       }
  //     } else{
  //       tempSArray = [0]
  //       graphFunction()

  //       humSArray = [0]
  //       graphFunction()
  //     }
  //   })
  //   })

//The graph function plots the traces. It can make them in different colours.
//Each trace gets a label name per sensor. 
function graphFunction() {
  // Define Data
  if (chosen == 1){
  var data = [
    //Temperature
    {x: timeArray, y: temp1Array, mode:"lines+markers", 
    line: {color: 'rgb(255,0,0)', width: 3}, name:"Sensor 1 Temp"},

    {x: timeArray, y: temp2Array, mode:"lines+markers", 
    line: {color: 'rgb(0,255,0)', width: 3}, name:"Sensor 2 Temp"},

    {x: timeArray, y: temp3Array, mode:"lines+markers", 
    line: {color: 'rgb(0,0,255)', width: 3}, name:"Sensor 3 Temp"},

    {x: timeArray, y: temp4Array, mode:"lines+markers", 
    line: {color: 'rgb(0,255,255)', width: 3}, name:"Sensor 4 Temp"},

    {x: timeArray, y: temp5Array, mode:"lines+markers", 
    line: {color: 'rgb(255,255,0)', width: 3}, name:"Sensor 5 Temp"},

    // {x: timeArray, y: tempSArray, mode:"lines+markers", 
    // line: {color: 'rgb(0,0,0)', width: 3}, name:"SMHI Temp"}
  ]}

  if(chosen == 2){
    data = [
    //Humidity
    {x: timeArray, y: hum1Array, mode:"lines+markers", 
    line: {color: 'rgb(255,0,0)', width: 3}, name:"Sensor 1 Hum"},

    {x: timeArray, y: hum2Array, mode:"lines+markers", 
    line: {color: 'rgb(0,255,0)', width: 3}, name:"Sensor 2 Hum"},

    {x: timeArray, y: hum3Array, mode:"lines+markers", 
    line: {color: 'rgb(0,0,255)', width: 3}, name:"Sensor 3 Hum"},

    {x: timeArray, y: hum4Array, mode:"lines+markers", 
    line: {color: 'rgb(0,255,255)', width: 3}, name:"Sensor 4 Hum"},

    {x: timeArray, y: hum5Array, mode:"lines+markers", 
    line: {color: 'rgb(255,255,0)', width: 3}, name:"Sensor 5 Hum"},

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
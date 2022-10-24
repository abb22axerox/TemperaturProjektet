var a2 = 0
var b2 = 0

var timeArray = [0,10,25]

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
  var humSArray = [0]

// function humFunction(){
  //Humidity
  //Sensor 1
  document.addEventListener('DOMContentLoaded', function () {
    var sensorH1 = document.querySelector('input[id="S1H"]')
    
    sensorH1.addEventListener('change', function () {
      if (sensorH1.checked) {
        hum1Array = [18,10,3]
        humFunctionL()
      } else {
        hum1Array = [0]
        humFunctionL()
      }
    })
    })

  //Sensor 2
  document.addEventListener('DOMContentLoaded', function () {
    var sensorH2 = document.querySelector('input[id="S2H"]')
    
    sensorH2.addEventListener('change', function () {
      if (sensorH2.checked) {
        hum2Array = [4,30,20]
        humFunctionL()
      } else {
        hum2Array = [0]
        humFunctionL()
      }
    })
    })

  //Sensor 3
  document.addEventListener('DOMContentLoaded', function () {
    var sensorH3 = document.querySelector('input[id="S3H"]')
    
    sensorH3.addEventListener('change', function () {
      if (sensorH3.checked) {
        hum3Array = [30,14,6]
        humFunctionL()
      } else {
        hum3Array = [0]
        humFunctionL()
      }
    })
    })

  //Sensor 4
  document.addEventListener('DOMContentLoaded', function () {
    var sensorH4 = document.querySelector('input[id="S4H"]')
    
    sensorH4.addEventListener('change', function () {
      if (sensorH4.checked) {
        hum4Array = [15,26,41]
        humFunctionL()
      } else {
        hum4Array = [0]
        humFunctionL()
      }
    })
    })

  //Sensor 5
  document.addEventListener('DOMContentLoaded', function () {
    var sensorH5 = document.querySelector('input[id="S5H"]')
    
    sensorH5.addEventListener('change', function () {
      if (sensorH5.checked) {
        hum5Array = [7,18,7]
        humFunctionL()
      } else {
        hum5Array = [0]
        humFunctionL()
      }
    })
    })

  //SMHI??
  document.addEventListener('DOMContentLoaded', function () {
    var sensorHS = document.querySelector('input[id="SSH"]')
    
    sensorHS.addEventListener('change', function () {
      if (sensorHS.checked) {
        humSArray = [1,2,1]
        humFunctionL()
      } else {
        humSArray = [0]
        humFunctionL()
      }
    })
    })

  function humFunctionL() {
    // Define Data
    var data = [
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
    
        {x: timeArray, y: humSArray, mode:"lines+markers", 
        line: {color: 'rgb(0,0,0)', width: 3}, name:"SMHI Hum"}
    ]
    
    a2 = Number(document.getElementById("startTime").value)
    b2 = Number(document.getElementById("stopTime").value)

    // Define Layout
    var layout = {
        xaxis: {range: [a2, b2], title: "Time (Hours)"},
        yaxis: {range: [0, 50], title: "Humidity (%)"},  
        title: "Humidity"
    }
    
    // Display using Plotly
    Plotly.newPlot("myPlot", data, layout)
    }
  // }
    // Axel Roxenborg
var a = 0
var b = 0

var timeArray = [0,10,25]

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
  var tempSArray = [0]

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


document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('input[id="mainButton"]')
    
    main.addEventListener('change', function () {
      if (main.checked) {
        console.log("temp")
        //Temperature
        //Sensor 1
        document.addEventListener('DOMContentLoaded', function () {
        var sensor1 = document.querySelector('input[id="S1"]')
    
        sensor1.addEventListener('change', function () {
          if (sensor1.checked) {
            temp1Array = [8,19,44]
            graphFunction()
          } else {
            temp1Array = [0]
            graphFunction()
          }
        })
        })
    
        //Sensor 2
        document.addEventListener('DOMContentLoaded', function () {
            var sensor2 = document.querySelector('input[id="S2"]')
            
        sensor2.addEventListener('change', function () {
            if (sensor2.checked) {
            temp2Array = [14,13,30]
            graphFunction()
            } else {
            temp2Array = [0]
            graphFunction()
            }
        })
        })
    
        //Sensor 3
        document.addEventListener('DOMContentLoaded', function () {
            var sensor3 = document.querySelector('input[id="S3"]')
            
        sensor3.addEventListener('change', function () {
            if (sensor3.checked) {
            temp3Array = [19,33,23]
            graphFunction()
            } else {
            temp3Array = [0]
            graphFunction()
            }
        })
        })
    
        //Sensor 4
        document.addEventListener('DOMContentLoaded', function () {
            var sensor4 = document.querySelector('input[id="S4"]')
            
        sensor4.addEventListener('change', function () {
            if (sensor4.checked) {
            temp4Array = [9,40,22]
            graphFunction()
            } else {
            temp4Array = [0]
            graphFunction()
            }
        })
        })
    
        //Sensor 5
        document.addEventListener('DOMContentLoaded', function () {
            var sensor5 = document.querySelector('input[id="S5"]')
            
        sensor5.addEventListener('change', function () {
            if (sensor5.checked) {
            temp5Array = [11,7,8]
            graphFunction()
            } else {
            temp5Array = [0]
            graphFunction()
            }
        })
        })
    
        //SMHI??
        document.addEventListener('DOMContentLoaded', function () {
            var sensorS = document.querySelector('input[id="SS"]')
            
        sensorS.addEventListener('change', function () {
            if (sensorS.checked) {
            tempSArray = [16,14,37]
            graphFunction()
            } else {
            tempSArray = [0]
            graphFunction()
            }
        })
        })
    
      function graphFunction() {
        // Define Data
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
    
          {x: timeArray, y: tempSArray, mode:"lines+markers", 
          line: {color: 'rgb(0,0,0)', width: 3}, name:"SMHI Temp"}
        ]
    
        a = Number(document.getElementById("startTime").value)
        b = Number(document.getElementById("stopTime").value)
    
        // Define Layout
        var layout = {
          xaxis: {range: [a, b], title: "Time (Hours)"},
          yaxis: {range: [0, 50], title: "Temperature (°C)"},  
          title: "Temperature"
        }
    
        // Display using Plotly
        Plotly.newPlot("myPlot", data, layout)
      }
    
      } else {
        console.log("hum")
        //Humidity
        //Sensor 1
        document.addEventListener('DOMContentLoaded', function () {
            var sensorH1 = document.querySelector('input[id="S1H"]')
            
            sensorH1.addEventListener('change', function () {
            if (sensorH1.checked) {
                hum1Array = [18,10,3]
                graphFunction()
            } else {
                hum1Array = [0]
                graphFunction()
            }
            })
            })

        //Sensor 2
        document.addEventListener('DOMContentLoaded', function () {
            var sensorH2 = document.querySelector('input[id="S2H"]')
            
            sensorH2.addEventListener('change', function () {
            if (sensorH2.checked) {
                hum2Array = [4,30,20]
                graphFunction()
            } else {
                hum2Array = [0]
                graphFunction()
            }
            })
            })

        //Sensor 3
        document.addEventListener('DOMContentLoaded', function () {
            var sensorH3 = document.querySelector('input[id="S3H"]')
            
            sensorH3.addEventListener('change', function () {
            if (sensorH3.checked) {
                hum3Array = [30,14,6]
                graphFunction()
            } else {
                hum3Array = [0]
                graphFunction()
            }
            })
            })

        //Sensor 4
        document.addEventListener('DOMContentLoaded', function () {
            var sensorH4 = document.querySelector('input[id="S4H"]')
            
            sensorH4.addEventListener('change', function () {
            if (sensorH4.checked) {
                hum4Array = [15,26,41]
                graphFunction()
            } else {
                hum4Array = [0]
                graphFunction()
            }
            })
            })

        //Sensor 5
        document.addEventListener('DOMContentLoaded', function () {
            var sensorH5 = document.querySelector('input[id="S5H"]')
            
            sensorH5.addEventListener('change', function () {
            if (sensorH5.checked) {
                hum5Array = [7,18,7]
                graphFunction()
            } else {
                hum5Array = [0]
                graphFunction()
            }
            })
            })

        //SMHI??
        document.addEventListener('DOMContentLoaded', function () {
            var sensorHS = document.querySelector('input[id="SSH"]')
            
            sensorHS.addEventListener('change', function () {
            if (sensorHS.checked) {
                humSArray = [1,2,1]
                graphFunction()
            } else {
                humSArray = [0]
                graphFunction()
            }
            })
            })

        function graphFunction() {
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
            
            a = Number(document.getElementById("startTime").value)
            b = Number(document.getElementById("stopTime").value)

            // Define Layout
            var layout = {
                xaxis: {range: [a2, b2], title: "Time (Hours)"},
                yaxis: {range: [0, 50], title: "Humidity (%)"},  
                title: "Humidity"
            }
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout)
            }
        
      }
    })
    })
//Define variables
var sensor1Name
var sensor2Name
var sensor3Name
var sensor4Name
var sensor5Name

function getData(){
    //gettting the name for sensor1
    sensor1Name = document.getElementById("sensor1Value").value;
    //saving the values in local storage
    localStorage.setItem("sensor1Name", sensor1Name);  

    //gettting the name for sensor2
    sensor2Name = document.getElementById("sensor2Value").value;
    //saving the values in local storage
    localStorage.setItem("sensor2Name", sensor2Name);  

    //gettting the name for sensor3
    sensor3Name = document.getElementById("sensor3Value").value;
    //saving the values in local storage
    localStorage.setItem("sensor3Name", sensor3Name);  

    //gettting the name for sensor4
    sensor4Name = document.getElementById("sensor4Value").value;
    //saving the values in local storage
    localStorage.setItem("sensor4Name", sensor4Name);  

    //gettting the name for sensor5
    sensor5Name = document.getElementById("sensor5Value").value;
    //saving the values in local storage
    localStorage.setItem("sensor5Name", sensor5Name);

    //Add default names
    if(sensor1Name == null){
        localStorage.setItem("sensor1Name", "Sensor1"); 
    }
    if(sensor2Name == null){
        localStorage.setItem("sensor2Name", "Sensor2"); 
    }
    if(sensor3Name == null){
        localStorage.setItem("sensor3Name", "Sensor3"); 
    }
    if(sensor4Name == null){
        localStorage.setItem("sensor4Name", "Sensor4"); 
    }
    if(sensor5Name == null){
        localStorage.setItem("sensor5Name", "Sensor5"); 
    }
    alert("Saved successfully!")
}
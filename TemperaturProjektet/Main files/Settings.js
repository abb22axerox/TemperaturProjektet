//Define variables
var sensor1Name
var sensor2Name
var sensor3Name
var sensor4Name
var sensor5Name

function getData(){
    //gettting the name for sensor1
    sensor1Name = document.getElementById("sensor1Value").value
    //saving the values in local storage
    localStorage.setItem("sensor1Name", sensor1Name)

    //gettting the name for sensor2
    sensor2Name = document.getElementById("sensor2Value").value
    //saving the values in local storage
    localStorage.setItem("sensor2Name", sensor2Name)

    //gettting the name for sensor3
    sensor3Name = document.getElementById("sensor3Value").value
    //saving the values in local storage
    localStorage.setItem("sensor3Name", sensor3Name)

    //gettting the name for sensor4
    sensor4Name = document.getElementById("sensor4Value").value
    //saving the values in local storage
    localStorage.setItem("sensor4Name", sensor4Name)

    //gettting the name for sensor5
    sensor5Name = document.getElementById("sensor5Value").value
    //saving the values in local storage
    localStorage.setItem("sensor5Name", sensor5Name)

    //Add default names
    if(sensor1Name == ""){
        localStorage.setItem("sensor1Name", "Växthuset")
        console.log("yes")
    }
    if(sensor2Name == ""){
        localStorage.setItem("sensor2Name", "Pingisrummet")
    }
    if(sensor3Name == ""){
        localStorage.setItem("sensor3Name", "Hyllorna")
    }
    if(sensor4Name == ""){
        localStorage.setItem("sensor4Name", "Toaletten")
    }
    if(sensor5Name == ""){
        localStorage.setItem("sensor5Name", "Vardagsrummet")
    }
    alert("Saved successfully!")
}
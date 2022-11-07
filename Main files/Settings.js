function getData()
{
    //gettting the values
    var email = document.getElementById("sensor1Value").value;

    //saving the values in local storage
    localStorage.setItem("sensor1Name", email);  
}
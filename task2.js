document.getElementById("form1").addEventListener("submit", (event) => {
    event.preventDefault();
    
    console.log("First name: " + event.target.elements["fname"].value 
        + " Last name: " + event.target.elements["lname"].value);
});
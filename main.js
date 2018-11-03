var box = document.getElementById("box");

var button = document.getElementById("dogButton");





button.addEventListener("click", function() {

    button.innerHTML = "Generating Doggo...";

    axios.get("https://dog.ceo/api/breeds/image/random").then(function(response){
        var dogImageURL = response.data.message;

    
        box.innerHTML = `
        <img src="${dogImageURL}"/>
        `

        button.innerHTML = "Generate Doggo!!!"
    });



});


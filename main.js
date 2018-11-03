var container = document.getElementById("container");

var button = document.getElementById("dogButton");

var selectBox = document.getElementById("dropDown");

var dogHTML = ``;


axios.get("https://dog.ceo/api/breeds/list").then(function(response) {
    response.data.message.forEach(function(dogBreed) {
        dogHTML = `
        <option value="${dogBreed}">${dogBreed}</option>
        `
        selectBox.innerHTML += dogHTML;
    });
});



selectBox.addEventListener("change", function() {
    axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function(response) {
        container.innerHTML = `<img src="${response.data.message}"/>`
    });
});




button.addEventListener("click", function() {

    button.innerHTML = "Generating Doggo...";

    axios.get("https://dog.ceo/api/breeds/image/random").then(function(response){
        var dogImageURL = response.data.message;

    
        container.innerHTML = `
        <img src="${dogImageURL}"/>
        `

        button.innerHTML = "Generate Doggo!!!"
    });



});


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let profile = document.getElementById("profile");
let url = "https://my-json-server.typicode.com/vitaliymv/TH14/users/";

fetch(url + id)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        profile.innerHTML = `
            <h1>${data.name}</h1>
            <img src="${data.img}" alt="${data.name}">
            <p>${data.balance}</p>
        `
    });

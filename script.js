let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://my-json-server.typicode.com/vitaliymv/TH14/products";
let xhr = new XMLHttpRequest();

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        productsGrid.innerHTML = null;

        data.forEach(p => {
            productsArray.push(p);
            let pEl = document.createElement("div");
            pEl.classList.add("product");
            pEl.innerHTML = `
                <h2 class="product-name">${p.name}</h2>
                <img src="${p.photo_url}" alt="${p.name}" class="product-photo">
                <p class="product-price">${p.price}UAH</p>
                <p class="product-desc"><b>Description: </b>${p.description}</p>
                <a href="profile.html?id=${p.author_id}">Seller profile</a>
                <button>Buy</button>
            `
            productsGrid.append(pEl);
        });
    });
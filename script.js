let products = [];
let filter = "All";

const container = document.getElementById("product-container");
const count = document.getElementById("productCount");
const searchInput = document.getElementById("searchInput");

// Load products from JSON
fetch("products.json")
.then(res => res.json())
.then(data => {
products = data;
render();
});

function render(){
const search = searchInput.value.toLowerCase();

let filtered = products.filter(p =>
(filter === "All" || p.category === filter) &&
p.name.toLowerCase().includes(search)
);

container.innerHTML = "";

filtered.forEach(p => {
container.innerHTML += `
<div class="card">
<img src="${p.image}">
<div class="card-content">
<span class="category">${p.category}</span>
<h3>${p.name}</h3>
<div class="price">₹${p.price}</div>
<a class="buy-btn" href="https://wa.me/918660165085?text=I want ${p.name}" target="_blank">
Buy on WhatsApp
</a>
</div>
</div>
`;
});

count.innerText = filtered.length;
}

// Search
searchInput.addEventListener("input", render);

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn=>{
btn.addEventListener("click", ()=>{
document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
filter = btn.dataset.filter;
render();
});
});

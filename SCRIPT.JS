let products = [];

const container = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");
const productCount = document.getElementById("productCount");

// Load products
fetch("products.json")
.then(res => res.json())
.then(data => {
  products = data;
  render(products);
});

// Render products
function render(list){
  container.innerHTML = "";
  productCount.innerText = list.length;

  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <div class="card-content">
          <span class="category">${p.category}</span>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="price">₹${p.price}</div>
          <a class="buy-btn"
          href="https://wa.me/918660165085?text=I want ${p.name}">
          Order Now
          </a>
        </div>
      </div>
    `;
  });
}

// Search
searchInput.addEventListener("input", ()=>{
  let val = searchInput.value.toLowerCase();
  render(products.filter(p=>p.name.toLowerCase().includes(val)));
});

// Filter
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.onclick = ()=>{
    if(btn.innerText === "All"){
      render(products);
    }else{
      render(products.filter(p=>p.category === btn.innerText));
    }
  }
});

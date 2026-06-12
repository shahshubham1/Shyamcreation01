let products = [];

const container = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");
const productCount = document.getElementById("productCount");

// Load products
async function loadProducts(){
  const res = await fetch("data/products.json");
  products = await res.json();
  render(products);
}

// Render products
function render(list){
  container.innerHTML = "";
  productCount.innerText = list.length;

  list.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <h4>₹${p.price}</h4>
        <a class="buy-btn"
        href="https://wa.me/918660165085?text=I want ${p.name}">
        Order on WhatsApp
        </a>
      </div>
    `;
  });
}

// Search
searchInput.addEventListener("input", ()=>{
  let val = searchInput.value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(val)
  );

  render(filtered);
});

// Filters
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.onclick = ()=>{
    let cat = btn.innerText;

    if(cat === "All"){
      render(products);
    } else {
      render(products.filter(p => p.category === cat));
    }
  }
});

loadProducts();

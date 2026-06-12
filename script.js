const products = [
  {name:"Elegant Red Saree", category:"Saree", price:999, img:"images/saree1.jpg"},
  {name:"Silk Designer Saree", category:"Saree", price:1499, img:"images/saree2.jpg"},
  {name:"Casual Kurti", category:"Kurti", price:599, img:"images/kurti1.jpg"},
  {name:"Party Wear Kurti", category:"Kurti", price:899, img:"images/kurti2.jpg"},
  {name:"Wedding Anarkali", category:"Anarkali", price:1999, img:"images/anarkali1.jpg"},
  {name:"Modern Western Dress", category:"Western", price:1299, img:"images/western1.jpg"},
];

let filter = "All";

const container = document.getElementById("productList");
const count = document.getElementById("count");
const searchInput = document.getElementById("searchInput");

function render(){
  const search = searchInput.value.toLowerCase();

  let filtered = products.filter(p=>{
    return (filter==="All" || p.category===filter)
    && p.name.toLowerCase().includes(search);
  });

  container.innerHTML = "";

  filtered.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
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

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
    toast("Filter applied: " + filter);
  });
});

searchInput.addEventListener("input", render);

function toast(msg){
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(()=>t.style.display="none",2000);
}

render();

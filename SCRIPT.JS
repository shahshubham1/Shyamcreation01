console.log("Shyam Creation UI loaded");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});

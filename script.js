// Form Submit Alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We’ll get back to you soon.");
});

// Add to Cart Button Alert
document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

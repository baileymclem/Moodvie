var listEl = document.querySelector("#movie-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Comedy", "Drama", "Romance", "Adventure", "Action"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
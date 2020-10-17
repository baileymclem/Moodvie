
var listEl = document.querySelector("#movie-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var genreArr = ["35", "27", "10749", "28"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = genreArr[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
var button = document.querySelector (".show-cat")
var cat = document.querySelector (".cat")
//console.log(cat.outerHTML);

button.addEventListener ("click", function () {
  cat.classList.add ("show");

});
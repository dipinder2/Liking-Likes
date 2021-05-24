var array = [0, 0, 0];
function addLike(element) {
  var formElement = "crs-span";
  var idx = element.id.toLowerCase().split("-")[1];
  console.log(idx);
  array[idx] += 1;
  setEachLikesCounter(idx);
}
function setEachLikesCounter(idx) {
  var queryselector = "#crs-span-" + idx;
  var element = document.querySelector(queryselector);
  element.innerHTML = array[idx] + " like(s)";
}

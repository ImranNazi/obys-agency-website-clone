var btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
  btn.textContent = "starting...";
  btn.style.backgroundColor = "cyan";
});

btn.addEventListener("mouseleave", function () {
  alert();
});

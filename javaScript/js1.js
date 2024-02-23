var btn = document.querySelector("button");
var para = document.querySelector("p");
para.classList.add("test1");
para.textContent += " raj";
btn.textContent = "starting....";
para.innerHTML += "<i> done</i>";

//creating new element
var img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.querySelector("body").appendChild(img);
img.src = "https://m.media-amazon.com/images/I/51bR5Z9xiWL._SL500_.jpg";
document.querySelector("body").appendChild(img);

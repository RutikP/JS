document.body.style.backgroundImage=`url("https://images.pexels.com/photos/680242/pexels-photo-680242.png?auto=compress&cs=tinysrgb&h=750&w=1260")`;
document.body.style.backgroundSize="cover";

let home = document.querySelector(".home");
home.addEventListener("mouseover", function () {
  document.getElementById("home").style.color = "black";
  document.getElementById("home").style.textDecoration = "none";
});
home.addEventListener("mouseleave", function () {
  document.getElementById("home").style.color = "rgb(240, 111, 133)";
});
let about = document.querySelector(".about");
about.addEventListener("mouseover", function () {
  document.getElementById("about").style.color = "black";
  document.getElementById("about").style.textDecoration = "none";
});
about.addEventListener("mouseleave", function () {
  document.getElementById("about").style.color = "rgb(240, 111, 133)";
});
let store = document.querySelector(".store");
store.addEventListener("mouseover", function () {
  document.getElementById("store").style.color = "black";
  document.getElementById("store").style.textDecoration = "none";
});
store.addEventListener("mouseleave", function () {
  document.getElementById("store").style.color = "rgb(240, 111, 133)";
});




let explore = document.querySelector(".btn");
explore.addEventListener("mouseover", function () {
  document.getElementById("addbtn").style.color = "yellow";
  document.getElementById("addbtn").style.backgroundColor = "black";
  document.getElementById("addbtn").style.textDecoration = "none";
});
explore.addEventListener("mouseleave", function () {
    document.getElementById("addbtn").style.color = "black";
    document.getElementById("addbtn").style.backgroundColor = "transparent";
    document.getElementById("addbtn").style.textDecoration = "none";
});


let explore1 = document.querySelector(".btn1");
explore1.addEventListener("mouseover", function () {
  document.getElementById("addbtn1").style.color = "yellow";
  document.getElementById("addbtn1").style.backgroundColor = "black";
  document.getElementById("addbtn1").style.textDecoration = "none";
});
explore1.addEventListener("mouseleave", function () {
    document.getElementById("addbtn1").style.color = "black";
    document.getElementById("addbtn1").style.backgroundColor = "transparent";
    document.getElementById("addbtn1").style.textDecoration = "none";
});



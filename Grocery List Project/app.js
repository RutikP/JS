Showitems();

document.body.style.backgroundImage = `url('https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`;
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundSize = "cover";

var hr1 = document.getElementById("hr1");
hr1.addEventListener("mouseover", function () {});

let input = document.querySelector(".input");

input.addEventListener("click", function () {
  document.getElementById("inputtxt").style.outline = "none";
});

let btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function () {
  document.getElementById("btn1").style.backgroundColor = "black";
  document.getElementById("btn1").style.color = "yellow";
  document.getElementById("btn1").style.borderColor = "yellow";
});

btn.addEventListener("mouseleave", function () {
  document.getElementById("btn1").style.backgroundColor = "transparent";
  document.getElementById("btn1").style.color = "black";
  document.getElementById("btn1").style.borderColor = "black";
});
let clrbtn = document.querySelector(".clrbtn");

clrbtn.addEventListener("mouseover", function () {
  document.getElementById("clrbtn1").style.backgroundColor = "black";
  document.getElementById("clrbtn1").style.color = "#5499C7 ";
  document.getElementById("clrbtn1").style.borderColor = "#5499C7";
});

clrbtn.addEventListener("mouseleave", function () {
  document.getElementById("clrbtn1").style.backgroundColor = "transparent";
  document.getElementById("clrbtn1").style.color = "black";
  document.getElementById("clrbtn1").style.borderColor = "black";
});

var itemsObj = [];
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  let inputtext = document.getElementById("inputtxt");
  let items = localStorage.getItem("items");

  if (items == null) {
    itemsObj = [];
    let clrbtn = document.getElementById("clrbtn1");
    clrbtn.style.display = "none";
  } else {
    itemsObj = JSON.parse(items);
    let clrbtn = document.getElementById("clrbtn1");
    clrbtn.style.display = "block";
  }
  let inputVal = inputtext.value;
  itemsObj.push(inputVal);
  localStorage.setItem("items", JSON.stringify(itemsObj));
  inputtext.value = "";
  Showitems();
});

//here "items" is a key and "itemsObj" is value(it is array)

function Showitems() {
  let items = localStorage.getItem("items");

  if (items == null) {
    itemsObj = [];
    let clrbtn = document.getElementById("clrbtn1");
    clrbtn.style.display = "none";
  } else {
    itemsObj = JSON.parse(items);
    let clrbtn = document.getElementById("clrbtn1");
    clrbtn.style.display = "block";
  }
  var grocerys = document.getElementById("subdiv1");

  let html = "";
  itemsObj.forEach(function (element, index) {
    html += `<b style="font-size:25px;margin-left:10px;margin-bottom:20px;">${
      index + 1
    }.${element}</b><button id="${index}"onclick="deleteItem(this.id)" style="margin-right:0px;"class="btn remove" id="removebtn"><b>X</b></button><br>
        `;
  });
  let itemsElm = document.getElementById("subdiv1");
  if (itemsObj.length != 0) {
    itemsElm.innerHTML = html;
  } else {
    itemsElm.innerHTML = `<b style="font-size:20px;margin-left:10px;">Nothing to show! Add Items..<b>`;
    let clrbtn = document.getElementById("clrbtn1");
    clrbtn.style.display = "none";
  }
}
function deleteItem(index) {
  //   console.log("I am deleting", index);

  let items = localStorage.getItem("items");
  if (items == null) {
    itemsObj = [];
  } else {
    itemsObj = JSON.parse(items);
  }

  itemsObj.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemsObj));
  Showitems();
}

let clritem = document.getElementById("clrbtn1");
clritem.addEventListener("click", function () {
  localStorage.clear();

  Showitems();
});

// let removebtn = document.querySelector(".remove");
// removebtn.addEventListener("mouseover",function(){
//     document.getElementById("removebtn").backgroundColor="red";
//     document.getElementById("removebtn").borderColor="black";
//     document.getElementById("removebtn").innerHTML.color="black";

// });

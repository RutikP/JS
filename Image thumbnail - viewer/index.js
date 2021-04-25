images = document.getElementById("div1").getElementsByTagName("img")
for(i=0;i<images.length;i++){
images[i].onmouseover = function(){
    this.style.cursor = "hand";
    this.style.borderColor = "red";
}
images[i].onmouseout = function(){
    this.style.cursor = "pointer";
    this.style.borderColor = "grey";
}
}


function viewImg(event){
     event = event || window.target;
    var targetEle = event.target || event.srcElement;
    if(targetEle.tagName == "IMG" ){
    document.getElementById("mainImg").src = targetEle.getAttribute("src");
}
    else {
        alert("You should click on image to view");
    }
}
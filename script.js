let miniBox=document.querySelector(".mini-box");
let bigBox=document.querySelector(".big-box");
//elementin ozu ilk 3 method
let id;
miniBox.ondragstart=(e)=>{
   let id=document.getElementById("drag").getAttribute("id");
    e.dataTransfer.setData("id",id);
  
    // console.log("drag start");
};
// miniBox.ondragend=()=>{
//     console.log("drag end");
// };
// miniBox.ondrag=()=>{
//     console.log("drag on");
// };

bigBox.ondragenter=()=>{
    console.log("drag box enter");
};
bigBox.ondragleave=()=>{
    console.log("drag box left");
};
document.addEventListener("dragover", function(e){
    let dragElemente=document.getElementById(id);
    var dragX = e.pageX, dragY = e.pageY;
    console.log("X: " + dragX + " Y: "+dragY);
    dragElemente.style.marginLeft= dragX + "px";
    dragElemente.style.marginTop= dragY + "px";
});
bigBox.ondragover=(e)=>{
    // console.log(this); "this" bize arrow functionda windows elementi qaytarir 
    e.preventDefault();
    console.log("drag box drop over");
};

bigBox.ondrop=function (e) {
  // let dragElement=document.getElementById(id);
  let dragElement=document.getElementById(e.dataTransfer.getData("id"))
  console.log(dragElement);
  bigBox.appendChild(dragElement);
  
}


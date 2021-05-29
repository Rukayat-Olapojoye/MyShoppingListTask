
//Declaration of variables

const Itemlist = [];
const Itemadded = {};
const Item = document.getElementById("item-field");
const Quantity = document.getElementById("quantity-field");
const desc = document.getElementById("description-field");
const itemlistcontainer = document.getElementById("item-list-container");
const additembtn = document.getElementById("addItem");


//Function to add Items from the form

function addItemHandler(){

    //Collecting items, quantities and description as objects
if (!Object.keys(Itemadded).length) {
    Object.assign(Itemadded,{item:Item.value,quantity:Quantity.value, decription:desc.value});
     
}
    
    //Adding each item object as an array element using unshift;
    
   Itemlist.unshift(Object.entries(Itemadded));
     
   // console.log(Itemlist)
    UpdateDom();
      
    //console.log(Itemadded);

}

additembtn.addEventListener("click",addItemHandler);


//Function to Update our Dom
function UpdateDom(){
itemlistcontainer.innerText="";
for (var idx = 0; idx < Itemlist.length; ++idx){

    const lielement = document.createElement("li");
    lielement.innerText = Itemlist[idx];
    lielement.id =idx;
    itemlistcontainer.appendChild(lielement);
    //create done button for each Item
    const donebtn = document.createElement("button");
    donebtn.style.backgroundColor ="#62b888";
    donebtn.innerText="Done";
    donebtn.addEventListener("click",deleteLiElement);
    donebtn.style.borderRadius ="8px";
    lielement.appendChild(donebtn);
  

    // clearing out input values after submission
    Item.value ="";
    Quantity.value ="";
    desc.value = "";

}

}
//function to delete item from container

function deleteLiElement(eventObject){
    const parentElement = eventObject.target.parentElement;
 itemlistcontainer.removeChild(parentElement)
  const parentElementid = parseInt(parentElement.id);
Itemlist.splice(parentElementid, 1);
UpdateDom()
}


 

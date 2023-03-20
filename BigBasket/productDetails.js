document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cartItems")).length+ " items"
let currElement=JSON.parse(localStorage.getItem("product-details"))

let image=document.createElement("img")
image.setAttribute("src",currElement.image_url)


let name1=document.createElement("p")
name1.textContent=currElement.name

let brandName=document.createElement("p")
brandName.textContent=currElement.brand

let mrp=document.createElement("p")
let spanContent=document.createElement("span")
mrp.textContent="MRP : "
spanContent.textContent= "Rs."+" "+currElement.strikedoffprice


let price=document.createElement("p")
let spanContent1=document.createElement("span")
price.textContent="Price : "
spanContent1.textContent= "Rs."+" "+currElement.price


let qDiv=document.createElement("div")
qDiv.setAttribute("class","quantity buttons_added")
let minInput=document.createElement("input")
minInput.setAttribute("type","button")
minInput.setAttribute("value","-")
minInput.setAttribute("class","minus")

let dataInput=document.createElement("input")
dataInput.setAttribute("type","number")
dataInput.setAttribute("step","1")
dataInput.setAttribute("min","1")
dataInput.setAttribute("name","quantity")
dataInput.setAttribute("value","1")
dataInput.setAttribute("title","Qty")
dataInput.setAttribute("class","input-text qty text")
dataInput.setAttribute("size","4")
dataInput.setAttribute("pattern","")
dataInput.setAttribute("inputmode","")

      

let plusInput=document.createElement("input")
plusInput.setAttribute("type","button")
plusInput.setAttribute("value","+")
plusInput.setAttribute("class","plus")

minInput.addEventListener("click",function(){
  decreaseCount(this,currElement)
}) 
plusInput.addEventListener("click",function(event){
  increaseCount(this,currElement)
}) 

let brk=document.createElement("br")
let button=document.createElement("button")
button.textContent="Add to Cart"
button.addEventListener("click", function(){
  addtoCart(currElement)
})



qDiv.append(minInput,dataInput,plusInput)











document.getElementById("image").append(image)
mrp.append(spanContent)
price.append(spanContent1)

document.getElementById("desc").append(brandName,name,mrp,price,qDiv,brk,button)
document.getElementById("container").append(document.getElementById("image"),document.getElementById("desc"))


var cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
var cartTotal = localStorage.getItem('cartTotal') || 0;

function addtoCart(product){
  console.log(product.name)
  var pres=ifPresent(product.name,cartItems)
  if(pres==true){
    alert("This product is already added!")
  }
  else{
    cartItems.push(product);
    cartTotal = parseInt(cartTotal) + product.price;
    alert("Successfully added product to the cart!")
    localStorage.setItem("cartTotal", cartTotal);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cartItems")).length+ " items"
}


function ifPresent(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return true;
      }
    }
  }
  
  // count increase
  function increaseCount(a, b, elem) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    value = isNaN(value)? 0 : value;
    value++;
    input.value = value;
    elem.quantity=value;
    
  }
  //   count decrease
  function decreaseCount(a,b,elem) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 1) {
      value = isNaN(value)? 0 : value;
      value--;
      input.value = value;
      elem.quantity=value;
    }
  }
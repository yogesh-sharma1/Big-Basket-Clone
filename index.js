var mySmartBasket = [
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000068_22-fresho-capsicum-green.jpg",
    name: "Fresho Capsicum - Green, 250 g",
    price: 17,
    brand: "FRESHO",
    strikedoffprice: 30.26,
    quantity:1
  },
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg",
      name: "Fresho Carrot - Orange, 500 g",
    price: 15,
    brand: "FRESHO",
    strikedoffprice: 27.63,
    quantity:1
  },
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    name: "Fresho Coriander Leaves, 100 g",
    price: 10,
    brand: "FRESHO",
    strikedoffprice: 21.05,
    quantity:1
  },
  {
    image_url:
    "https://www.bigbasket.com/media/uploads/p/s/10000118_18-fresho-ginger.jpg",
    name:"Fresho Fresh Ginger / Aada, 250 g",
    price: 32,
    brand: "FRESHO",
    strikedoffprice: 76.32,
    quantity:1
  },
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
      name: "Fresho Onion, 1 kg",
    price: 24,
    brand: "FRESHO",
    strikedoffprice: 31.58,
    quantity:1
  },
    
]

  var users = JSON.parse(localStorage.getItem('users')) || [];
  var userLogin = document.getElementById('userLogin');
  
  if(users.length > 0){
      userLogin.textContent = users[users.length-1].name;
  }

displayMySmartBasket(mySmartBasket)

function displayMySmartBasket(mySmartBasket){
  mySmartBasket.map(function(el){
      let div=document.createElement("div")
      // let offerDiv=document.createElement("div")
      
      let image=document.createElement("img")
      image.setAttribute("src",el.image_url)
      image.setAttribute("alt",el.name)
      image.addEventListener("click",function(){
        localStorage.setItem("product-details",JSON.stringify(el));
        imageClick('productDetails.html')
      })

      let desc=document.createElement("p")
      desc.textContent=el.name

      let priceDiv=document.createElement("div")
      let price=document.createElement("p")
      price.textContent="Price : Rs. "+el.price
      let strikedOffPrice=document.createElement("p")
      strikedOffPrice.textContent="MRP : Rs. "+el.strikedoffprice

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
        decreaseCount(dataInput,el)
      }) 
      plusInput.addEventListener("click",function(event){
        increaseCount(dataInput,el)
      }) 


      let button=document.createElement("button")
      button.textContent="Add to Cart"
      button.addEventListener("click", function(){
        addtoCart(el)
      })

      priceDiv.append(price,strikedOffPrice)
      
      qDiv.append(minInput,dataInput,plusInput)
      div.append(image,desc,priceDiv,qDiv,button)
      document.getElementById("mySmartBasketMainDiv").append(div)
  })
}

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
var cartTotal = localStorage.getItem("cartTotal") || 0;

function addtoCart(product){
  console.log(product.name)
  var pres=ifPresent(product.name,cartItems)
  if(pres){
    alert("This product is already added!")
  }
  else{
    // product.quantity++;
    cartItems.push(product);
    cartTotal = parseInt(cartTotal) + product.price
    alert("Successfully added product to the cart!")
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  document.getElementById("totaItems").textContent = cartItems.length + " items"
}

document.getElementById("totaItems").textContent = cartItems.length + " items"

function ifPresent(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
        return true;
    }
  }
}

// count increase
// function increaseCount(a, b, elem) {
//   var input = b.previousElementSibling;
//   var value = parseInt(input.value, 10); 
//   value = isNaN(value)? 0 : value;
//   value++;
//   input.value = value;
//   elem.quantity=value;
// }
//   count decrease
// function decreaseCount(a,b,elem) {
//   var input = b.nextElementSibling;
//   var value = parseInt(input.value, 10); 
//   if (value > 1) {
//     value = isNaN(value)? 0 : value;
//     value--;
//     input.value = value;
//     elem.quantity=value;
//   }
// }

function decreaseCount(a,item){
  if(item.quantity > 0){
      item.quantity--;
      a.value = item.quantity;
      cartTotal -= item.price;
      localStorage.setItem('cartItems',JSON.stringify(cartItems));
      localStorage.setItem('cartTotal',cartTotal);
      console.log(item.quantity);
  }
}

function increaseCount(a,item){
  // if(item)
  item.quantity++;
  a.value = item.quantity;
  cartTotal = parseInt(cartTotal) + item.price;
  localStorage.setItem('cartItems',JSON.stringify(cartItems));
  localStorage.setItem('cartTotal',cartTotal);
  console.log( item.quantity);
}



function imageClick(url){
    window.location=url;
}

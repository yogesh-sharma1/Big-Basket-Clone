var indexPageGroceryArr = [
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000068_22-fresho-capsicum-green.jpg",
      name: "Fresho Capsicum - Green, 250 g",
    price: "Rs 17 (Rs.0.07/g)",
    strikedoffprice: 30.26,
  },
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg",
      name: "Fresho Carrot - Orange, 500 g",
    price: "Rs 15 (Rs.0.03/g)",
    strikedoffprice: 27.63,
  },
  {
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
      name: "Fresho Coriander Leaves, 100 g",
    price: "Rs 10 (Rs.0.1/g)",
    strikedoffprice: 21.05,
  },
  {
    image_url:
    "https://www.bigbasket.com/media/uploads/p/s/10000118_18-fresho-ginger.jpg",
    name:"Fresho Fresh Ginger / Aada, 250 g",
    price:"Rs 32 (Rs.0.13/g)",
    strikedoffprice: 76.32,
  },
  {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
        name: "Fresho Onion, 1 kg",
      price: "Rs 24 (Rs.24/kg)",
      strikedoffprice: 31.58,
    },
    
]
indexPageGroceryDispFun(indexPageGroceryArr);

function indexPageGroceryDispFun(indexPageGroceryArr){
    console.log("hi")
    indexPageGroceryArr.map(function(el){

        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",el.image_url)
        image.setAttribute("alt",el.name)
        let desc=document.createElement("h5")
        desc.textContent=el.name

        let priceDiv=document.createElement("div")
        let price=document.createElement("p")
        price.textContent=el.price
        let strikedOffPrice=document.createElement("p")
        strikedOffPrice.textContent=el.strikedoffprice
        let button=document.createElement("button")
        button.textContent="Add to Cart"
        button.addEventListener("click", function(){
          addtoCart(el)
        })

        priceDiv.append(price,strikedOffPrice)
        div.append(image,desc,priceDiv,button)
        document.getElementById("mainDiv").append(div)
    })
    
}
var cartArrIndexGrocery=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
  cartArrIndexGrocery.push(product);
  localStorage.setItem("cart-list",JSON.stringify(cartArrIndexGrocery))
}

document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"




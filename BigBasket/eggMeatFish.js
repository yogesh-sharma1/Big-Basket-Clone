var eggMeatFish = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
        name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
        price: 80,
        strikedoffprice: 120,
        quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
         name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
      price: 209,
      strikedoffprice: 255,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
         name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
      price: 297.35,
      strikedoffprice: 479,
      quantity:1
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
      name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
      price: 116,
      strikedoffprice: 194,
      quantity:1
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
           name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
        price: 297.35,
        strikedoffprice: 479,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
        name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
        price: 116,
        strikedoffprice: 194,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
          name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
        price: 80,
        strikedoffprice: 120,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
           name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
        price: 209 ,
        strikedoffprice: 255,
        quantity:1
      },
] 
 
      document.getElementById("totalProductCount").textContent=eggMeatFish.length
      eggMeatFishFun(eggMeatFish);

function eggMeatFishFun(eggMeatFishArr){
    console.log("hi")
    eggMeatFish.map(function(el){

        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",el.image_url)
        image.setAttribute("alt",el.name)
        let desc=document.createElement("p")
        desc.textContent=el.name

        let priceDiv=document.createElement("div")
        let price=document.createElement("p")
        price.textContent=el.price
        let strikedOffPrice=document.createElement("p")
        strikedOffPrice.textContent=el.strikedoffprice


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
          decreaseCount(event, this,el)
        }) 
        plusInput.addEventListener("click",function(){
          increaseCount(event, this,el)
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

var cartArr=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
  
  var pres=ifPresent(product.name,cartArr)
if(pres==true){
  alert("This product is already added!")
}
  else{
    cartArr.push(product);
    localStorage.setItem("cart-list",JSON.stringify(cartArr))
    alert("Successfully added to the cart.")
  }
  
  document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"
}

function ifPresent(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
        return true;
    }
}
}

document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"

document.getElementById("filterByPrice").addEventListener("change",sortByPriceFun)

function sortByPriceFun(){
  console.log("hi")
    console.log(eggMeatFish)
    let filterByPriceVal=document.getElementById("filterByPrice").value
    
    
        console.log(filterByPriceVal)
         if(filterByPriceVal===""){
            return 1
         }
         if(filterByPriceVal=="lth"){
            eggMeatFish=eggMeatFish.sort(function(a,b){
                 return a.price-b.price
            })
         }
         if(filterByPriceVal=="htl"){
            eggMeatFish=eggMeatFish.sort(function(a,b){
                return b.price-a.price
           })
         }
         console.log(eggMeatFish)
         eggMeatFishFun(eggMeatFish)
}

function increaseCount(a, b, elem) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10); 
  value = isNaN(value)? 0 : value;
  value ++;
  input.value = value;
  elem.quantity=value;
  
}
function decreaseCount(a, b,elem) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10); 
  if (value > 1) {
    value = isNaN(value)? 0 : value;
    value --;
    input.value = value;
    elem.quantity=value;
  }
}

var eggMeatFish = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
        name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
        brand: "FRESHO",
       price: 80,
        strikedoffprice: 120,
        quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
         name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
      brand: "FRESHO",
       price: 209,
      strikedoffprice: 255,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
         name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
      brand: "FRESHO",
       price: 297.35,
      strikedoffprice: 479,
      quantity:1
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
      name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
      brand: "FRESHO",
       price: 116,
      strikedoffprice: 194,
      quantity:1
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
           name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
        brand: "FRESHO",
       price: 297.35,
        strikedoffprice: 479,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
        name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
        brand: "FRESHO",
       price: 116,
        strikedoffprice: 194,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
          name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
        brand: "FRESHO",
       price: 80,
        strikedoffprice: 120,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
           name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
        brand: "FRESHO",
       price: 209 ,
        strikedoffprice: 255,
        quantity:1
      },
] 
 
      document.getElementById("totalProductCount").textContent=eggMeatFish.length
      eggMeatFishFun(eggMeatFish);

function eggMeatFishFun(eggMeatFishArr){
  document.getElementById("mySmartBasketMainDiv").textContent=""
  
    eggMeatFish.map(function(el){

        let div=document.createElement("div")
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
        plusInput.addEventListener("click",function(){
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

var cartItems=JSON.parse(localStorage.getItem("cartItems")) || []

function addtoCart(product){
  
  var pres=ifPresent(product.name,cartItems)
  if(pres==true){
    alert("This product is already added!")
  }
  else{
    cartItems.push(product);
    cartTotal = parseInt(cartTotal) + product.price
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    alert("Successfully added to the cart.")
  }
  
  document.getElementById("totaItems").textContent=cartItems.length+ " items"
}

function ifPresent(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
        return true;
    }
}
}

document.querySelector("body").setAttribute("style", "align-items:center; height: 80vh;background-image: url('https://img.freepik.com/free-vector/geometric-frame-background-green-modern-design-vector_53876-157567.jpg?size=626&ext=jpg&ga=GA1.2.232835331.1679132289&semt=ais'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;")

document.getElementById("totaItems").textContent=cartItems.length+ " items"

document.getElementById("filterByPrice").addEventListener("change",sortByPriceFun)

function sortByPriceFun(){
  
   
    let filterByPriceVal=document.getElementById("filterByPrice").value
        var arr=[]
    
        console.log(filterByPriceVal)
         if(filterByPriceVal==""){
            return 1
         }
         if(filterByPriceVal=="lth"){
            var arr=eggMeatFish.sort(function(a,b){
                 return a.price-b.price
            })
         }
         if(filterByPriceVal=="htl"){
            var arr=eggMeatFish.sort(function(a,b){
                return b.price-a.price
           })
         }
         console.log(eggMeatFish)

         eggMeatFishFun(arr)
}

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





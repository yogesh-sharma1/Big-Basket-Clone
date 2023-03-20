var buyMoreSaveMore = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40178581_9-gillette-mach-3-bladed-shaving-cartridgesrazor-with-lubrication-strip-protects-skin.jpg",
         name: "Gillette Mach 3 Bladed Shaving Cartridges/Razor - With Lubrication Strip, Protects Skin, 16 pcs",
      brand: "GILLETTE",
       price: 1443.75,
      strikedoffprice: 1925,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
        name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
      brand: "GILLETTE",
       price: 199.20 ,
      strikedoffprice: 249,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
        name: "Real Fruit Power Juice - Mixed, 1 L",
      brand: "REAL",
       price: 102,
      strikedoffprice: 120,
      quantity:1
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
       name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
      brand: "PARK AVENUE",
       price:262.50 ,
      strikedoffprice: 375,
      quantity:1
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
          name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
        brand: "GILLETTE",
       price: 199.20,
        strikedoffprice: 249,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
          name: "Real Fruit Power Juice - Mixed, 1 L",
        brand: "REAL",
       price: 102 ,
        strikedoffprice: 120,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40178581_9-gillette-mach-3-bladed-shaving-cartridgesrazor-with-lubrication-strip-protects-skin.jpg",
           name: "Gillette Mach 3 Bladed Shaving Cartridges/Razor - With Lubrication Strip, Protects Skin, 16 pcs",
        brand: "GILLETTE",
       price: 1443.75,
        strikedoffprice: 1925,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
          name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
        brand: "GILLETTE",
       price: 199.20 ,
        strikedoffprice: 249,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
          name: "Real Fruit Power Juice - Mixed, 1 L",
        brand: "REAL",
       price: 102,
        strikedoffprice: 120,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
         name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
        brand: "PARK AVENUE",
       price:262.50 ,
        strikedoffprice: 375,
        quantity:1
      },
      {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
            name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
          brand: "GILLETTE",
       price: 199.20,
          strikedoffprice: 249,
          quantity:1
        },
        {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
            name: "Real Fruit Power Juice - Mixed, 1 L",
          brand: "REAL",
       price: 102,
          strikedoffprice: 120,
          quantity:1
        },
]

document.querySelector("body").setAttribute("style", "align-items:center; height: 80vh;background-image: url('https://img.freepik.com/free-vector/geometric-frame-background-green-modern-design-vector_53876-157567.jpg?size=626&ext=jpg&ga=GA1.2.232835331.1679132289&semt=ais'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;")
document.getElementById("totalProductCountBMSM").textContent=buyMoreSaveMore.length
      buyMoreSaveMoreFun(buyMoreSaveMore);

function buyMoreSaveMoreFun(buyMoreSaveMore){
  document.getElementById("mySmartBasketMainDiv").textContent=""
    buyMoreSaveMore.map(function(el){

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
  }else{

  cartArr.push(product);
  localStorage.setItem("cart-list",JSON.stringify(cartArr))
  alert("Successfully added to the cart.")
  }
  document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"
}
document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"

function ifPresent(nameKey, myArray){
  for (let i=0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
        return true;
    }
}
}



document.getElementById("filterByPrice").addEventListener("change",sortByPriceFun)

function sortByPriceFun(){
  
   
    let filterByPriceVal=document.getElementById("filterByPrice").value
        var arr=[]
    
        console.log(filterByPriceVal)
         if(filterByPriceVal==""){
            return 1
         }
         if(filterByPriceVal=="lth"){
            var arr=buyMoreSaveMore.sort(function(a,b){
                 return a.price-b.price
            })
         }
         if(filterByPriceVal=="htl"){
            var arr=buyMoreSaveMore.sort(function(a,b){
                return b.price-a.price
           })
         }
         console.log(eggMeatFish)

         buyMoreSaveMoreFun(arr)
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

function imageClick(url){
  window.location=url;
}
var eggMeatFish = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
        name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
      price: "Rs 80 (Rs.0.32/g)",
      strikedoffprice: 120,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
         name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
      price: "Rs 209 (Rs.6.97/PC)",
      strikedoffprice: 255,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
         name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
      price: "Rs 297.35",
      strikedoffprice: 479,
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
      name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
      price:"Rs 116 (Rs.0.46/g",
      strikedoffprice: 194,
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/1221156_1-fresho-chicken-curry-cut-without-skin-500-g-chicken-breast-boneless-500-g.jpg",
           name: "Fresho Chicken Curry Cut Without Skin 500 g + Chicken Breast - Boneless 500 g, Combo 2 Items",
        price: "Rs 297.35",
        strikedoffprice: 479,
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40227694_1-fresho-rohu-bengali-cut-large-fresh.jpg",
        name:"Fresho Rohu Fish Curry Cut/Bengali Cut, 250 g With Head",
        price:"Rs 116 (Rs.0.46/g",
        strikedoffprice: 194,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
          name: "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue-Free, 6 To 9 Pcs, 250 g",
        price: "Rs 80 (Rs.0.32/g)",
        strikedoffprice: 120,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
           name: "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 30 pcs",
        price: "Rs 209 (Rs.6.97/PC)",
        strikedoffprice: 255,
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

var cartArr=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
  cartArr.push(product);
  localStorage.setItem("cart-list",JSON.stringify(cartArr))
}

document.getElementById("filterByPrice").addEventListener("change",sortByPriceFun)

function sortByPriceFun(){
    let filterByPriceVal=document.getElementById("filterByPrice").value
    
    
        console.log(filterByPriceVal)
         if(filterByPriceVal===""){
            return 1
         }
         if(filterByPriceVal=="lth"){
            eggMeatFish=eggMeatFish.sort(function(a,b){
                 return a.strikedoffprice-b.strikedoffprice
            })
         }
         if(filterByPriceVal=="htl"){
            eggMeatFish=eggMeatFish.sort(function(a,b){
                return b.strikedoffprice-a.strikedoffprice
           })
         }
         console.log(eggMeatFish)
         eggMeatFishFun(eggMeatFish)
}
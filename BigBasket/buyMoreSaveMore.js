var buyMoreSaveMore = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40178581_9-gillette-mach-3-bladed-shaving-cartridgesrazor-with-lubrication-strip-protects-skin.jpg",
         name: "Gillette Mach 3 Bladed Shaving Cartridges/Razor - With Lubrication Strip, Protects Skin, 16 pcs",
      price: "Rs 1443.75 (Rs.90.23/pc)",
      strikedoffprice: 1925,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
        name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
      price: "Rs 199.20 (Rs.199.2/pc)",
      strikedoffprice: 249,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
        name: "Real Fruit Power Juice - Mixed, 1 L",
      price: "Rs 102 (Rs.102/L)",
      strikedoffprice: 120,
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
       name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
      price:"Rs 262.50 (Rs.262.5/pc)",
      strikedoffprice: 375,
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
          name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
        price: "Rs 199.20 (Rs.199.2/pc)",
        strikedoffprice: 249,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
          name: "Real Fruit Power Juice - Mixed, 1 L",
        price: "Rs 102 (Rs.102/L)",
        strikedoffprice: 120,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40178581_9-gillette-mach-3-bladed-shaving-cartridgesrazor-with-lubrication-strip-protects-skin.jpg",
           name: "Gillette Mach 3 Bladed Shaving Cartridges/Razor - With Lubrication Strip, Protects Skin, 16 pcs",
        price: "Rs 1443.75 (Rs.90.23/pc)",
        strikedoffprice: 1925,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
          name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
        price: "Rs 199.20 (Rs.199.2/pc)",
        strikedoffprice: 249,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
          name: "Real Fruit Power Juice - Mixed, 1 L",
        price: "Rs 102 (Rs.102/L)",
        strikedoffprice: 120,
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
         name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
        price:"Rs 262.50 (Rs.262.5/pc)",
        strikedoffprice: 375,
      },
      {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
            name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
          price: "Rs 199.20 (Rs.199.2/pc)",
          strikedoffprice: 249,
        },
        {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
            name: "Real Fruit Power Juice - Mixed, 1 L",
          price: "Rs 102 (Rs.102/L)",
          strikedoffprice: 120,
        },
]

document.getElementById("totalProductCountBMSM").textContent=buyMoreSaveMore.length
      buyMoreSaveMoreFun(buyMoreSaveMore);

function buyMoreSaveMoreFun(buyMoreSaveMore){
    console.log("hi")
    buyMoreSaveMore.map(function(el){

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
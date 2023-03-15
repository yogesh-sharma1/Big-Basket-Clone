var dealsofTheWeekArr = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
        name: "Fresho Tender Coconut Water - No Added Sugar, Flavours, 200 ml Bottle",
      price: "Rs 42 (Rs.0.21/ml)",
      strikedoffprice: 50,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/30007713_8-cavins-milkshake-strawberry.jpg",
         name: "Cavins Strawberry Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack ",
      price: "Rs 30 (Rs.0.15/ml)",
      strikedoffprice: 40,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40127644_5-cavins-rose-lassi.jpg",
         name: "Cavins Rose Lassi - With Zinc, Vitamin A & D Added, Supports Immunity, 180 ml",
      price: "Rs 18.75 (Rs.0.1/ml)",
      strikedoffprice: 25,
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/30007714_8-cavins-milkshake-chocolate.jpg",
      name:"Cavins Chocolate Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack",
      price:"Rs 30 (Rs.0.15/ml)",
      strikedoffprice: 40,
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
              "https://www.bigbasket.com/media/uploads/p/s/40127644_5-cavins-rose-lassi.jpg",
               name: "Cavins Rose Lassi - With Zinc, Vitamin A & D Added, Supports Immunity, 180 ml",
            price: "Rs 18.75 (Rs.0.1/ml)",
            strikedoffprice: 25,
          },
          {
            image_url:
            "https://www.bigbasket.com/media/uploads/p/s/30007714_8-cavins-milkshake-chocolate.jpg",
            name:"Cavins Chocolate Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack",
            price:"Rs 30 (Rs.0.15/ml)",
            strikedoffprice: 40,
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

document.getElementById("totalProductCountDOW").textContent=dealsofTheWeekArr.length
dealsOfTheWeekFun(dealsofTheWeekArr);
function dealsOfTheWeekFun(dealsofTheWeekArr){
    
    dealsofTheWeekArr.map(function(el){

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

var dealsOfTheWeekCart=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
    dealsOfTheWeekCart.push(product);
  localStorage.setItem("cart-list",JSON.stringify(dealsOfTheWeekCart))
}
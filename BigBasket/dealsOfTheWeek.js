var dealsofTheWeekArr = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
        name: "Fresho Tender Coconut Water - No Added Sugar, Flavours, 200 ml Bottle",
      price: 42,
      strikedoffprice: 50,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/30007713_8-cavins-milkshake-strawberry.jpg",
         name: "Cavins Strawberry Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack ",
      price: 30,
      strikedoffprice: 40,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40127644_5-cavins-rose-lassi.jpg",
         name: "Cavins Rose Lassi - With Zinc, Vitamin A & D Added, Supports Immunity, 180 ml",
      price: 18.75,
      strikedoffprice: 25,
      quantity:1
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/30007714_8-cavins-milkshake-chocolate.jpg",
      name:"Cavins Chocolate Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack",
      price:30,
      strikedoffprice: 40,
      quantity:1
    },
    
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
          name: "Real Fruit Power Juice - Mixed, 1 L",
        price: 102,
        strikedoffprice: 120,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
         name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
        price:262.50,
        strikedoffprice: 375,
        quantity:1
      },
      {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
            name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
          price: 199.20,
          strikedoffprice: 249,
          quantity:1
        },
        {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
            name: "Real Fruit Power Juice - Mixed, 1 L",
          price: 102,
          strikedoffprice: 120,
          quantity:1
        },
        {
            image_url:
              "https://www.bigbasket.com/media/uploads/p/s/40127644_5-cavins-rose-lassi.jpg",
               name: "Cavins Rose Lassi - With Zinc, Vitamin A & D Added, Supports Immunity, 180 ml",
            price: 18.75,
            strikedoffprice: 25,
            quantity:1
          },
          {
            image_url:
            "https://www.bigbasket.com/media/uploads/p/s/30007714_8-cavins-milkshake-chocolate.jpg",
            name:"Cavins Chocolate Milkshake - With Zinc, Vitamin A & D Added, Immunity Booster, 200 ml Tetra Pack",
            price:30,
            strikedoffprice: 40,
            quantity:1
          },
          
            {
              image_url:
                "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
                name: "Real Fruit Power Juice - Mixed, 1 L",
              price: 102,
              strikedoffprice: 120,
              quantity:1
            },
            {
              image_url:
              "https://www.bigbasket.com/media/uploads/p/s/40056927_9-park-avenue-perfume-spray-voyage.jpg",
               name:"Park Avenue Perfume Spray - Voyage, 220 ml (Mega Pack)",
              price:262.50,
              strikedoffprice: 375,
              quantity:1
            },
            {
                image_url:
                  "https://www.bigbasket.com/media/uploads/p/s/236283_4-gillette-foam-shave-lathers-quickly-hydrates-regular.jpg",
                  name: "Gillette Foam Shave - Lathers Quickly & Hydrates, Regular, 418 g ",
                price: 199.20,
                strikedoffprice: 249,
                quantity:1
              },
              {
                image_url:
                  "https://www.bigbasket.com/media/uploads/p/s/229922_5-real-fruit-power-juice-mixed.jpg",
                  name: "Real Fruit Power Juice - Mixed, 1 L",
                price: 102,
                strikedoffprice: 120,
                quantity:1
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
        document.getElementById("mainDiv").append(div)
    })
    
}

var dealsOfTheWeekCart=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
    dealsOfTheWeekCart.push(product);
  localStorage.setItem("cart-list",JSON.stringify(dealsOfTheWeekCart))
  alert("Successfully added to the cart.")
  document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"
}

document.getElementById("totaItems").textContent=JSON.parse(localStorage.getItem("cart-list")).length+ " items"



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
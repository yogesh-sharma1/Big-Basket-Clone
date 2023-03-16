var ayurveda = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40135131_8-dabur-chyawanprash-2x-immunity.jpg",
        name: "Dabur Chyawanprash, 2 kg",
      price: 660 ,
      strikedoffprice: 750,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
        name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
      price: 58.20 ,
      strikedoffprice: 60,
      quantity:1
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
         name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
      price: 213.75 ,
      strikedoffprice: 225,
      quantity:1
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
       name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
      price: 58.20 ,
      strikedoffprice: 60,
      quantity:1
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
           name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
        price: 213.75,
        strikedoffprice: 225,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
         name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
        price:58.20 ,
        strikedoffprice: 60,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40135131_8-dabur-chyawanprash-2x-immunity.jpg",
          name: "Dabur Chyawanprash, 2 kg",
        price: 660 ,
        strikedoffprice: 750,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
          name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
        price: 58.20 ,
        strikedoffprice: 60,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
          name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
        price: 58.20 ,
        strikedoffprice: 60,
        quantity:1
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
           name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
        price: 213.75 ,
        strikedoffprice: 225,
        quantity:1
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
         name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
        price:58.20,
        strikedoffprice: 60,
        quantity:1
      },
      {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
             name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
          price: 213.75,
          strikedoffprice: 225,
          quantity:1
        },
       
]

document.getElementById("totalProductCountAyurveda").textContent=ayurveda.length
ayurvedaFun(ayurveda);
function ayurvedaFun(ayurveda){
    
    ayurveda.map(function(el){

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

var ayurvedaCartArr=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
    ayurvedaCartArr.push(product);
  localStorage.setItem("cart-list",JSON.stringify(ayurvedaCartArr))
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
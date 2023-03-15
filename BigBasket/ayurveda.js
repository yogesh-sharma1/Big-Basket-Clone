var ayurveda = [
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40135131_8-dabur-chyawanprash-2x-immunity.jpg",
        name: "Dabur Chyawanprash, 2 kg",
      price: "Rs 660 (Rs.660/pc)",
      strikedoffprice: 750,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
        name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
      price: "Rs 58.20 (Rs.0.49/pc)",
      strikedoffprice: 60,
    },
    {
      image_url:
        "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
         name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
      price: "Rs 213.75 (Rs.213.75/pc)",
      strikedoffprice: 225,
    },
    {
      image_url:
      "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
       name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
      price:"Rs 58.20 (Rs.58.2/pc)",
      strikedoffprice: 60,
    },
    {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
           name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
        price: "Rs 213.75 (Rs.213.75/pc)",
        strikedoffprice: 225,
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
         name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
        price:"Rs 58.20 (Rs.58.2/pc)",
        strikedoffprice: 60,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40135131_8-dabur-chyawanprash-2x-immunity.jpg",
          name: "Dabur Chyawanprash, 2 kg",
        price: "Rs 660 (Rs.660/pc)",
        strikedoffprice: 750,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
          name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
        price: "Rs 58.20 (Rs.0.49/pc)",
        strikedoffprice: 60,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40050841_6-dabur-hajmola-anardana-digestive-tablets.jpg",
          name: "Dabur Hajmola Anardana - Digestive Tablets, 120 pcs",
        price: "Rs 58.20 (Rs.0.49/pc)",
        strikedoffprice: 60,
      },
      {
        image_url:
          "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
           name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
        price: "Rs 213.75 (Rs.213.75/pc)",
        strikedoffprice: 225,
      },
      {
        image_url:
        "https://www.bigbasket.com/media/uploads/p/s/263775_7-dabur-hajmola-imli-digestive-tablets.jpg",
         name:"Dabur Hajmola Imli - Digestive Tablets, 120 pcs",
        price:"Rs 58.20 (Rs.58.2/pc)",
        strikedoffprice: 60,
      },
      {
          image_url:
            "https://www.bigbasket.com/media/uploads/p/s/40113632_2-dabur-sat-isabgol-effective-relief-from-constipation.jpg",
             name: "Dabur Sat Isabgol - Effective Relief From Constipation, 200 g",
          price: "Rs 213.75 (Rs.213.75/pc)",
          strikedoffprice: 225,
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

var ayurvedaCartArr=JSON.parse(localStorage.getItem("cart-list")) || []

function addtoCart(product){
    ayurvedaCartArr.push(product);
  localStorage.setItem("cart-list",JSON.stringify(ayurvedaCartArr))
}
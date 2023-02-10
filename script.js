const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [{id: 1,title:"VARMBLIXT",price:89.90,Quantities:{img:"Images/Photo2.png"}},
{id: 2,title:"BLAVINGAD",price:69.90,Quantities:{img:"Images/BLAVINGAD.png"}},
{id: 3,title:"OBEGRANSAD",price:129.90,Quantities:{img:"Images/OBEGRANSAD.png"}},
{id: 4,title:"BYGGLEK",price:89.90,Quantities:{img:"Images/BYGGLEK.png"}}
]

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductQuantity = document.querySelector(".Quantities");




menuItems.forEach((item,index)=>{
  item.addEventListener("click", () =>{
    console.log("you clicked!" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change chosen product
    chosenProduct= products[index]

    //change text of currentProduct
    currentProductTitle.textContent = chosenProduct.title
    currentProductPrice.textContent = "$" + chosenProduct.price +"0"
    currentProductImg.src = chosenProduct.Quantities.img
    

  })
})


const productButton = document.querySelector(".ProductButton");
const payment = document.querySelector(".payment");
const Close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

Close.addEventListener("click",()=>{
  payment.style.display="none"
})


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
const payButton = document.querySelector(".payButton");
const productButton = document.querySelector(".ProductButton");
const payment = document.querySelector(".payment");
const Close = document.querySelector(".close");
const fButton = document.querySelector(".fButton");
const fInput = document.querySelector(".fInput");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

Close.addEventListener("click",()=>{
  payment.style.display="none"
})

payButton.addEventListener("click",()=>{
  payment.style.display="none"
  alert("Thank you Purchasing with Us! Hope to see you again!");
})

fButton.addEventListener("click",()=>{
  if(fInput.value === ""){
    alert("Please enter your email address")
  }
  else{
    alert("Thank you for signing up!");
    fInput.value="";
  }
  
})

var nameSurname = document.querySelector(".payTitle").value;
var phoneNumber = document.querySelector(".payInput[placeholder='+12345678']").value;
var address = document.querySelector(".payInput[placeholder='John Doe']").value;

var jsondata = {name: nameSurname,number: phoneNumber, address: address};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://aarondaranceid-2daa.restdb.io/rest/contacts",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63e64767478852088da68029",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

let items=[{
  item_image:'girls.jpg',
  rating:{
    stars:4.5,
    noOfReviews:1.4,
  },
  company_name:"carlton london",
  item_name:"Rhodium CZ floral switers",
  current_price:1000,
  original_price:1500,
  discount_per:42,
},
{
  item_image:'short.jpg',
  rating:{
    stars:4.2,
    noOfReviews:1.1,
  },
  company_name:"H&M",
  item_name:"cotton shorts",
  current_price:600,
  original_price:1000,
  discount_per:30,
},
  
{
    item_image:'style.jpg',
  rating:{
    stars:4.9,
    noOfReviews:3,
  },
  company_name:"Zara",
  item_name:"Printed Cotton T-Shirt",
  current_price:1100,
  original_price:21000,
  discount_per:40,
},
{
  item_image:'girls.jpg',
  rating:{
    stars:4.5,
    noOfReviews:1.4,
  },
  company_name:"carlton london",
  item_name:"Rhodium CZ floral switers",
  current_price:1000,
  original_price:1500,
  discount_per:42,
},
{
  item_image:'short.jpg',
  rating:{
    stars:4.2,
    noOfReviews:1.1,
  },
  company_name:"H&M",
  item_name:"cotton shorts",
  current_price:600,
  original_price:1000,
  discount_per:30,
},
  
{
    item_image:'style.jpg',
  rating:{
    stars:4.9,
    noOfReviews:3,
  },
  company_name:"Zara",
  item_name:"Printed Cotton T-Shirt",
  current_price:1100,
  original_price:21000,
  discount_per:40,
},
{
  item_image:'girls.jpg',
  rating:{
    stars:4.5,
    noOfReviews:1.4,
  },
  company_name:"carlton london",
  item_name:"Rhodium CZ floral switers",
  current_price:1000,
  original_price:1500,
  discount_per:42,
},
{
  item_image:'short.jpg',
  rating:{
    stars:4.2,
    noOfReviews:1.1,
  },
  company_name:"H&M",
  item_name:"cotton shorts",
  current_price:600,
  original_price:1000,
  discount_per:30,
},
  
{
    item_image:'style.jpg',
  rating:{
    stars:4.9,
    noOfReviews:3,
  },
  company_name:"Zara",
  item_name:"Printed Cotton T-Shirt",
  current_price:1100,
  original_price:21000,
  discount_per:40,
},
{
    item_image:'style.jpg',
  rating:{
    stars:4.9,
    noOfReviews:3,
  },
  company_name:"Zara",
  item_name:"Printed Cotton T-Shirt",
  current_price:1100,
  original_price:21000,
  discount_per:40,
}

];

let bagItems=[];
onload();
function onload(){
  let bagItemsStr=localStorage.getItem('bagItems');
  bagItems=bagItemsStr? JSON.parse(bagItemsStr):[];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addTobag(itemId){
bagItems.push(itemId);
displayBagIcon();}

function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItems.length>0){
      bagItemCountElement.style.visibility='visible';

  bagItemCountElement.innerText=bagItems.length;
}else{
  bagItemCountElement.style.visibility='hidden';
}
}
 
function displayItemsOnHomePage(){
let itemsContainerElement=document.querySelector('.items-container');
 let itemsHTML="";

items.forEach(item=>{
  itemsHTML+=`<div class="item-container">
        <img  class="img"src="${item.item_image}" alt="item image">
        <div class="rating">
          ${item.rating.stars}⭐|${item.rating.noOfReviews}k
        </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
        <span class="current-price">Rs ${
          item.current_price}</span>
        <span class="original-price">${
          item.original_price}</span>
        <span class="discount">${item.discount_per}% OFF</span>
        <br><br>
          <button class="btn-add-bag" onclick="addTobag(${item.id})"
 >Add to Bag</button>
        </div>
      </div>`;
        });
        itemsContainerElement.innerHTML=itemsHTML;}


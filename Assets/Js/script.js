function BgChange(bg){
  let Bgimg=document.getElementById("MainClick");

  if(bg==='CABINNET'){
    Bgimg.style.background="url('./Assets/Images/Click4.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
  else if(bg==='SHELVINGUNITS'){
    Bgimg.style.background="url('./Assets/Images/Click5.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
  else if(bg==='TEATABLE'){
    Bgimg.style.background="url('./Assets/Images/TeaTable.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
  else if(bg==='KITCHENFURNITURE'){
    Bgimg.style.background="url('./Assets/Images/Kitch2.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
  else if(bg==='DECORS'){
    Bgimg.style.background="url('./Assets/Images/Decors.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
  else if(bg==="OFFICETABLE"){
    Bgimg.style.background="url('./Assets/Images/Of.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
   else if(bg==="ST"){
    Bgimg.style.background="url('./Assets/Images/Click5.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
   }
  else{
    Bgimg.style.background="url('./Assets/Images/SofaCk1.png')";
    Bgimg.style.backgroundRepeat='no-repeat';
    Bgimg.style.backgroundSize='cover';
    Bgimg.style.backgroundPosition='center';
    Bgimg.style.minHeight='100vh';
  }
}

//JSON DATAS
let Datas=[
  {
    id:1,
    name:"Round Wood Table",
    img:"./Assets/Images/AddtoCart1.webp",
    price:5550
  },
  {
    id:2,
    name:"Modern Ceramic Lamp",
    img:"./Assets/Images/AddtoCart2.webp",
    price:4500
  },
  {
    id:3,
    name:"Indor Plant Plot",
    img:"./Assets/Images/AddtoCart3.webp",
    price:2500
  },
  {
    id:4,
    name:"Round Stell Table Tea",
    img:"./Assets/Images/AddtoCart4.webp",
    price:8000
  },
  {
    id:5,
    name:"Handmade Floral Vessel",
    img:"./Assets/Images/AddtoCart5.webp",
    price:3000
  },
  {
    id:6,
    name:"Adjustable Leather Sofa",
    img:"./Assets/Images/AddtoCart6.webp",
    price:9500
  },
  {
    id:7,
    name:"Steel Pot Jug",
    img:"./Assets/Images/AddtoCart7.webp",
    price:2500
  },
  {
    id:8,
    name:"Microfiber Bed Pillow",
    img:"./Assets/Images/AddtoCart8.webp",
    price:1400
  },
  
]

//FUNCTION TO DISPLAY PRODUCTS

function DisplayProducts(){
  let Result=document.getElementById("AddToCartRow")
  let content="";
  Datas.map((x,y)=>{
    content+=` <div class="col-lg-3 col-12">
    <div class="card mt-5">
    <img src="${x.img}" alt="">
    <div class="card-body">
    <h5>${x.name}</h5>
    <p>${x.price}</p>
    <button class="btn btn-dark w-100" onclick="AddToCart(${x.id})">ADD TO CART</button>
    </div>
    </div>
    </div>`
  })
  Result.innerHTML=content;
}
DisplayProducts()

let Cart=[];
// FUNCTION FOR ADD TO CART
function AddToCart(pdctid){
  let Find=Datas.find((x,y)=>{
    return x.id===pdctid
  })
  let Quantitycheck=Cart.find((x,y)=>{
    return x.id===pdctid
  })
  if(Quantitycheck){
    Find.quantity++
  }
  else{
  Find.quantity=1;
  Cart.push(Find)
 }
  DisplayAddedCart(Cart)
}

//FUNCTION TO DISPLAY ADDED CART
function DisplayAddedCart(GettingCart){
  let Content2="";
  let Result2=document.getElementById("AddedBody")
  GettingCart.map((x,y)=>{
    Content2+=`<tr>
        <td><img src="${x.img}" alt=""  height="60px"></td>
        <td>${x.name}</td>
        <td>${x.price}</td>
        <td>${x.quantity}</td>
        <td><button class="btn btn-danger" onclick="RemoveCart(${x.id})">REMOVE CART</button></td>
      </tr>`
  })
  Result2.innerHTML=Content2
}

//FUNCTION TO REMOVE CART
function RemoveCart(RemoveCart){
    let samequantity2=Cart.find((x,y)=>{
      return x.id===RemoveCart
    })
    if(samequantity2.quantity>1){
      samequantity2.quantity--
    }
    else{
    Cart=Cart.filter((x,y)=>{
      return x.id!==RemoveCart
    })}
      DisplayAddedCart(Cart)
}

//FOR WINDOWS ONLOAD
window.onload=function(){
    let myModal=new bootstrap.Modal(document.getElementById("LoginPage"));
    // myModal.show()
}
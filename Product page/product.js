var product = JSON.parse(localStorage.getItem("product"));

document.querySelector("#title").innerText = product[0].name;

var imagediv = document.createElement("div");
imagediv.setAttribute("id","images");

var img1 = document.createElement("img");
img1.setAttribute("src",product[0].image);

var sec_img_div = document.createElement("div");
var img2 = document.createElement("img");
img2.setAttribute("src",product[0].hoverimage);

var img3 = document.createElement("img");
img3.setAttribute("src",product[0].image);

sec_img_div.append(img2,img3);

imagediv.append(img1,sec_img_div);

var infodiv = document.createElement("div");

var proj = document.createElement("p");
proj.innerText = "LOVODA";
var productname = document.createElement("h1");
productname.innerText = product[0].name;

var stardiv = document.createElement("div");
stardiv.setAttribute("id","stardiv");
var star1 = document.createElement("p");
star1.innerHTML = '<i class="fa-regular fa-star"></i>';
var star2 = document.createElement("p");
star2.innerHTML = '<i class="fa-regular fa-star"></i>';
var star3 = document.createElement("p");
star3.innerHTML = '<i class="fa-regular fa-star"></i>';
var star4 = document.createElement("p");
star4.innerHTML = '<i class="fa-regular fa-star"></i>';
var star5 = document.createElement("p");
star5.innerHTML = '<i class="fa-regular fa-star"></i>';
var p =  document.createElement("p");
p.innerText = "Write a review";
stardiv.append(star1,star2,star3,star4,star5,p);

// var quediv = document.createElement("div");
var que = document.createElement("p");
que.innerHTML = "| " +"  "+ '<i class="fa-regular fa-comments"></i>' +" Ask a question";
que.setAttribute("id","que");

var productprice = document.createElement("h3");
productprice.innerText = "$"+product[0].price;

infodiv.append(proj,productname,stardiv,que,productprice);

document.querySelector("#parentbox").append(imagediv);
document.querySelector("#product_detail").append(infodiv);



//div => img1,img2,img3
//div => text all


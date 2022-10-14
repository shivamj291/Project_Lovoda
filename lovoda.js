var productsdata = [
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395",
     name: "Evermore Ear Cuff Earring",
     price : "10.00"
    },
    {image :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313",
     hoverimage : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_823x.jpg?v=1659450313",
     name: "Wired Ear Cuff Earring",
     price : "10.00"
    },
    {image :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226",
     hoverimage : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-4_1_823x.jpg?v=1659450231",
     name: "Fern Ear Cuff Earring",
     price : "10.00"
    },
    {image :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1.jpg?v=1659450051",
     hoverimage : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1_823x.jpg?v=1659450054",
     name: "Blossom Ear Cuff Earrings",
     price : "10.00"
    },
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-3_1.jpg?v=1659449973",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-4_1_493x.jpg?v=1659449973",
     name: "Barrel Stone Earring",
     price : "18.00"
    },
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-2_1.jpg?v=1659449908",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_493x.jpg?v=1659449908",
     name: "Ball Stud Earrings | Gold",
     price : "12.00"
    },
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-1_1.jpg?v=1659449836",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-4_1_493x.jpg?v=1659449841",
     name: "Classic Stone Earring | Gold",
     price : "12.00"
    },
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-1_1_823x.jpg?v=1659449763",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-4_1_493x.jpg?v=1659449765",
     name: "Acclaim Hoop Earrings",
     price : "20.00"
    },
];
displaydata(productsdata);

function displaydata(data){
    document.querySelector("#productbox").innerHTML = "";
    data.map(function(ele){
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src",ele.image);

        var overdiv = document.createElement("div");
        var hoverimage = document.createElement("img");
        hoverimage.setAttribute("src",ele.hoverimage);
        overdiv.append(hoverimage);

        var name = document.createElement("p");
        name.innerText = ele.name;

        var price = document.createElement("h4");
        price.innerText = "$"+ele.price;

        div.append(image,overdiv,name,price);
        div.addEventListener("click",function(){
            // console.log(ele);
            getdata(ele);
        });
        // div.setAttribute("href","product.html");
        document.querySelector("#productbox").append(div);
        // localStorage.setItem("products",JSON.stringify(data));
    })
}

var storedata = [];
function getdata(ele){
    storedata.push(ele);
    localStorage.setItem("product",JSON.stringify(storedata));
    window.location.href= "file:///C:/Users/Pratik%20Patil/Documents/VS%20Code/Project_Lovoda/Project_Lovoda/Product%20page/product.html";
} 
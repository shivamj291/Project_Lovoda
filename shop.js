var productsdata = [
    {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401014-7-2_823x.jpg?v=1645728002",
     hoverimage :"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401014-7-3_823x.jpg?v=1645728002",
     name: "Round and Round Ring",
     price : "14.00"
    },
    {
     image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401022-7-2_823x.jpg?v=1645729199",
     name: "Ripple Ring",
     price : "14.00"
    },
    {
        image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401020-7-2_823x.jpg?v=1645728959",
        name: "Dreamer Ring",
        price : "14.00"
       },
       {
        image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401021-7-2_823x.jpg?v=1646420217",
        name: "Lucky 3's Ring",
        price : "14.00"
       },

       {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401024-7-2_823x.jpg?v=1645729420",
     name: "Ambition Stone Ring | Pine",
     price : "20.00"
    },
    {
     image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/040500107-g_3_of_3__44142.jpg?v=1645113389",
     name: "Initial Ring",
     price : "18.00"
    },
    {
        image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011000098-1__56085_823x.jpg?v=1645115768",
        name: "Ray of Light hoops",
        price : "16.00"
       },
       {
        image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401021-7-2_823x.jpg?v=1646420217",
        name: "Ambition Stone Ring | Dusty Rose",
        price : "20.00"
       },
           //    --------------
           {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401005-7-2__27544_823x.jpg?v=1645115956",
           name: "Dimention Ring",
           price : "12.00"
          },
          {
           image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401015-7-2_823x.jpg?v=1645728140",
           name: "Bubbly Ring",
           price : "18.00"
          },
          {
              image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L401015-7-2_823x.jpg?v=1645728140",
              name: "Daisy Post Earrings",
              price : "14.00"
             },
             {
              image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101047-C-1_823x.jpg?v=1647541449",
              name: "Classique Hoop Earrings",
              price : "18.00"
             },
      
             {image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201000-1__52069_823x.jpg?v=1645116357",
           name: "Samba Charm Necklace",
           price : "24.00"
          },
          {
           image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100370-1__23662_823x.jpg?v=1645113597",
           name: "Boheme Stone Necklace (14K)",
           price : "30.00"
          },
          {
              image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100564_3__89149_823x.jpg?v=1645115346",
              name: "Sparkling Stone Necklace (14K)",
              price : "22.00"
             },
             {
              image : "https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201002-2__44414_823x.jpg?v=1645116382",
              name: "La Vie En Rose Charm Necklace",
              price : "32.00"
             },
];
displaydata(productsdata);

function displaydata(data){
    document.querySelector("#productbox").innerHTML = "";
    data.map(function(ele){
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.setAttribute("src",ele.image);

        // var overdiv = document.createElement("div");
        // var hoverimage = document.createElement("img");
        // hoverimage.setAttribute("src",ele.hoverimage);
        // overdiv.append(hoverimage);

        var name = document.createElement("h5");
        name.innerText = ele.name;

        var price = document.createElement("h3");
        price.innerText = "$"+ele.price;

        div.append(image,name,price);
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

function SortData(){
    var alpha = document.getElementById("sortby").value;
    if(alpha === "normal"){
        // productsdata.sort(function(a,b){
        //     if(a.name>b.name) return 1;
        //     if(a.name<b.name) return -1;
        //     return 0;
        // });
        displaydata(productsdata);
        };
    if(alpha === "A-Z"){
        productsdata.sort(function(a,b){
            if(a.name>b.name) return 1;
            if(a.name<b.name) return -1;
            return 0;
        });
        displaydata(productsdata);
        };
       
    if(alpha === "Z-A"){
        productsdata.sort(function(a,b){
            if(a.name>b.name) return -1;
            if(a.name<b.name) return 1;
            return 0;
            });
        displaydata(productsdata);
        };
    if(alpha === "lth"){
        productsdata.sort(function(a,b){
            return a.price-b.price;
            });
            displaydata(productsdata);
    }
    if(alpha === "htl"){
        productsdata.sort(function(a,b){
            return b.price-a.price;
            });
            displaydata(productsdata);
    }
}     
        
    

//div => div=>img,name,price
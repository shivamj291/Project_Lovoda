document.getElementById("addbtn").addEventListener("click", addfun);


var addcount=0;
document.querySelector("#added").innerText=addcount;
function addfun(){
    addcount++;
    document.querySelector("#added").innerText=addcount;
}

document.getElementById("subbtn").addEventListener("click", subfun);

var subcount=0;
document.querySelector("#subbed").innerText=subcount;
function subfun(){
    subcount++;
    document.querySelector("#subbed").innerText=subcount;
}


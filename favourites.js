// write js code here corresponding to favourites.html
var out=JSON.parse(localStorage.getItem("favourites"))

out.forEach(function(elem,index) {
    var tr=document.createElement("tr")
    var td=document.createElement("td")
    td.innerText=elem.MN 
    var td1=document.createElement("td")
    td1.innerText=elem.TA
    var td2=document.createElement("td")
    td2.innerText=elem.TB
    var td3=document.createElement("td")
    td3.innerText=elem.DA 
    var td4=document.createElement("td")
    td4.innerText=elem.VE 
    var td5=document.createElement("td")
    td5.innerText="Remove"
    td5.style.cursor="pointer"
    td5.style.color="blue"
    td5.addEventListener("click",function(){
        target(elem,index)
    })

    tr.append(td,td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(tr)
});
 
function target(elem,index){
    out.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(out))
    window.location.reload()
}
// write js code here corresponding to matches.html
var out=JSON.parse(localStorage.getItem("schedule"))

out.forEach(function(elem) {
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
    td5.innerText="ADD as Favourites"
    td5.style.color="blue"
    td5.style.cursor="pointer"
    td5.addEventListener("click",function(){
        target(elem)
    })

    tr.append(td,td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(tr)
});
 arr=JSON.parse(localStorage.getItem("favourites")) ||[]
function target(elem){
 arr.push(elem)
 localStorage.setItem("favourites",JSON.stringify(arr))
}



 document.querySelector("#filterVenue").addEventListener("onChange",sven())
function sven(){
    var selected=document.querySelector("#filterVenue").value
    var filteredlist=out.filter(function(elem){
   if(elem.VE == selected){
       console(out)
   }
    })

    }

// write js code here corresponding to index.html
// You should add submit event on 
document.querySelector("#masaiForm").addEventListener("submit",target)


var arr=JSON.parse(localStorage.getItem("schedule")) || []
function target(){
    event.preventDefault()
    
  var obj={
      MN:masaiForm.matchNum.value,
      TA:masaiForm.teamA.value,
      TB:masaiForm.teamB.value,
      DA:masaiForm.date.value,
      VE:masaiForm.venue.value,
  }
  arr.push(obj)
  localStorage.setItem("schedule",JSON.stringify(arr))
  window.location.href="matches.html"
}
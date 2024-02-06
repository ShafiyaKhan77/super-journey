let count=0
let countEl=document.getElementById("count-el")
function inc(){
    count+=1
    countEl.innerText=count     
}
function save(){
    let saveEl=document.getElementById("save-el")
    saveEl.textContent+=count+ " " + "-"
    countEl.textContent=0
    count=0
    
}
let name="Shafiya Khan"
let greeting="Welcome Here Mam"
let welcome=document.getElementById("welcome-el")
welcome.innerText=greeting+" "+ name +"!"

const createBtn = document.getElementById("task")
const hidden = document.getElementById("hide")
const red1 = document.getElementsByClassName("red1")[0]
const yellow1 = document.getElementsByClassName("yellow1")[0]
const blue1 = document.getElementsByClassName("blue1")[0]
const black1 = document.getElementsByClassName("black1")[0]
const textarea = document.getElementsByClassName("textarea")[0]
const done = document.getElementsByClassName("btn2")[0]
const x=document.getElementsByClassName("closebtn")[0]
createBtn.addEventListener("click", () => {
    hidden.style.display="block";
})

red1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="red"
})
yellow1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="yellow"
})
blue1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="blue"
})
black1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="black"
})
done.addEventListener("click", () =>{
    hidden.style.display="none";
})

closebtn.addEventListener("click", () => {
    // e.target.parentElement.remove();
    hidden.style.display="remove";
})








    
    

    
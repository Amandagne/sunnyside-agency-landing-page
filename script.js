const bar = document.querySelector("#bar")
const nav = document.querySelector("#nav")

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.toggle("active")
    })
}
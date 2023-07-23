const b = document.getElementById("input");
const c = document.getElementsByClassName("list")[0];

const listAdd=() =>{
    if (b.value === '') {
        alert("Could you write something?");
    } else {
        let a = document.createElement("li");
        a.innerHTML = b.value;
        c.appendChild(a);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        a.appendChild(span)
        span.classList.toggle("span")
        save()
    }
    b.value=""
}
c.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        save()
    }else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        save()
    }
},false)
function save(){
    localStorage.setItem("data",c.innerHTML)
}
function show() {
    c.innerHTML=localStorage.getItem("data")
}
show()
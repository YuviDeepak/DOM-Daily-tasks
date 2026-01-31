let bgchange= ()=>{

    let clr1=document.getElementById("bg1")
    let clr2=document.getElementById("bg2")
    let tv=document.getElementById("tovalue")
    let bbbg=document.getElementById("bdy")
    bbbg.style.backgroundImage = `linear-gradient(to ${tv.value} ,${clr1.value}, ${clr2.value})`;
}

let count = 0
let add_to_cart = document.getElementById("Addtocart")

let incre = ()=>{
    if(count<10){
        count++
        add_to_cart.innerText=count
    }
    else{
        alert("The quantity of the product should not ecxeed 10")

    }
}

let decre = ()=>{
    if(count>0){
        count--
        add_to_cart.innerText=count
    }
    else{
        alert("The quantity of the product should be above 0")
        
    }
}

let re = ()=>{
    count=0
    add_to_cart.innerText=count
}
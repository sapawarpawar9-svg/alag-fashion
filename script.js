// PRODUCT SEARCH FUNCTION 🔍

const search = document.getElementById("search");

const products = document.querySelectorAll(".card");


search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();


    products.forEach(function(product){


        let name = product.querySelector("h3")
        .innerText
        .toLowerCase();


        let category = product.querySelector("p")
        .innerText
        .toLowerCase();



        if(name.includes(value) || category.includes(value)){


            product.style.display="block";


        }

        else{


            product.style.display="none";


        }


    });


});






// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(0.9)";


setTimeout(()=>{

button.style.transform="scale(1)";

},150);



});


});







// HEADER CHANGE ON SCROLL


window.addEventListener("scroll",()=>{


let header=document.querySelector("header");


if(window.scrollY>80){


header.style.background="rgba(0,0,0,0.95)";


}

else{


header.style.background="rgba(0,0,0,0.55)";


}


});







// PRODUCT ANIMATION


const cards=document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position=card.getBoundingClientRect().top;


let height=window.innerHeight;



if(position < height-100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}



});



});





// DEFAULT CARD STYLE


cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.6s";


});
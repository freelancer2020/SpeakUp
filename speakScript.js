"user strict";

/*
function openLessons() {
    try {
    let list = document.getElementsByClassName("lessons-content")[0];
    let listCon = document.getElementsByClassName("part-bottom")[0];
    let arrow = document.getElementsByClassName("arrow")[0];
    arrow.classList.toggle("arrowRot");
    list.classList.toggle("openLessons");
    listCon.classList.toggle("resOver");
    } catch(err) {
        alert(err.message);
    }
}


const lessonsBtn = document.getElementById("part-top");
lessonsBtn.addEventListener("click", openLessons, false);
*/
function smart(e) {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("open");
    e.currentTarget.classList.toggle("round"); 
}

let gr = document.getElementsByClassName("plus");
for (let i = 0; i < gr.length; i++) {
    gr[i].addEventListener("click", smart, false);
}

function mobileMenuList() {
    let menu = document.getElementsByClassName("mobileMenu")[0];
    menu.classList.toggle("clicker");
}

const userclick = document.getElementById("clickable");
userclick.onclick = mobileMenuList;


 function holder() {
        let o = 0;
    while (o < 3) {
        o++;
        const targ = document.getElementsByClassName("screen")[0];
        const myTemplate = document.getElementById("templ").content.cloneNode(true);
        targ.append(myTemplate);
    }
    return;
}


let n = 0;
function representLeft() {
    n++;
    let mango = document.getElementsByClassName("screen")[0];
    let point = mango.children[0];
    if (n > mango.children.length - 2) {
        n = 0;
    }
    try {
    point.style.marginLeft = `-${(n * 255)}px`;
    } catch(err) {
        alert(err.message);
    }
}

function representRight() {
    n--;
    let mango = document.getElementsByClassName("screen")[0];
    let point = mango.children[0];
    if ( n < 0) {
        n = 0;
    }
    point.style.marginLeft = `-${n * 255}px`;
}

const userRight = document.getElementsByClassName("item-arrow-right")[0];
userRight.addEventListener("click", representRight, false);

const userLeft = document.getElementsByClassName("item-arrow-left")[0];
userLeft.addEventListener("click", representLeft, false);

/*
function remover() {
    let opera = document.getElementsByClassName("screen")[0].children;
    for (let i = 0; i < opera.length; i++) {
        opera[i].style.display = "none";
    }

}

*/
   function render() {
    //holder();
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level1.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(card => {
       let parser = new DOMParser();
       let contentUser =  parser.parseFromString(card, "text/html");
       let cards = contentUser.getElementsByClassName("tem");
       let arr = [];
       for (let x = 0; x < cards.length; x++) {
           arr.push(cards[x].content.cloneNode(true));
       }
       for (let y = 0; y < arr.length; y++) {
           document.getElementsByClassName("screen")[0].append(arr[y]);
       }
       
    })
    
    
}


window.onload = function() {
    
    render();
}




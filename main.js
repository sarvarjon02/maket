let son = 0
let b = 0
let block = document.querySelector('.slider')
function slide1(raqam){
    b=0
    son = raqam
    if(son>=4){
        son=0
    }
    if(son<0){
        son=3
    }
    // block.style.left
    block.style.left = -son*1920+'px'
}
function vaqt(){
    b++
    setTimeout("vaqt()",4000)
    if(b==5){
        onga()
    }
}

const login = document.querySelector('input[name="login"]');

login.addEventListener('focus', (event) => {
    const label = document.querySelector(`label[for='${event.target.id}']`);
    console.log(label)
    label.style.transform = 'translateY(00px)'
});

login.addEventListener('blur', (event) => {
    label = document.querySelector(`label[for='${event.target.id}']`);
    label.style.transform = 'translateY(20px)'
});




const login1 = document.querySelector('input[name="login1"]');

login1.addEventListener('focus', (event) => {
    const label = document.querySelector(`label[for='${event.target.id}']`);
    console.log(label)
    label.style.transform = 'translateY(00px)'
});

login1.addEventListener('blur', (event) => {
    label = document.querySelector(`label[for='${event.target.id}']`);
    label.style.transform = 'translateY(20px)'
});




const login2 = document.querySelector('input[name="login2"]');

login2.addEventListener('focus', (event) => {
    const label = document.querySelector(`label[for='${event.target.id}']`);
    console.log(label)
    label.style.transform = 'translateY(00px)'
});

login2.addEventListener('blur', (event) => {
    label = document.querySelector(`label[for='${event.target.id}']`);
    label.style.transform = 'translateY(20px)'
});





let c = 0
let d = document.getElementById('text').innerHTML
function change(){
    let text = document.getElementById('text')
    c++
    text.innerHTML = c
    let f = setTimeout('change()',70)
    if(c==d){
        clearTimeout(f)
    }
}
change()

let c1 = 0
let d1 = document.getElementById('text1').innerHTML
function change1(){
    let text1 = document.getElementById('text1')
    c1++
    text1.innerHTML = c1
    let fl = setTimeout('change1()',50)
    if(c1==d1){
        clearTimeout(fl)
    }
}
change1()

let c2 = 0
let d2 = document.getElementById('text2').innerHTML
function change2(){
    let text2 = document.getElementById('text2')
    c2++
    text2.innerHTML = c2
    let f2 = setTimeout('change2()',100)
    if(c2==d2){
        clearTimeout(f2)
    }
}
change2()

let c3 = 0
let d3 = document.getElementById('text3').innerHTML
function change3(){
    let text3 = document.getElementById('text3')
    c3++
    text3.innerHTML = c3
    let f3 = setTimeout('change3()',29)
    if(c3==d3){
        clearTimeout(f3)
    }
}
change3()

let c4 = 0
let d4 = document.getElementById('text4').innerHTML
function change4(){
    let text4 = document.getElementById('text4')
    c4++
    text4.innerHTML = c4
    let f4 = setTimeout('change4()',14)
    if(c4==d4){
        clearTimeout(f4)
    }
}
change4()
let c5 = 0
let d5 = document.getElementById('text5').innerHTML
function change5(){
    let text5 = document.getElementById('text5')
    c5++
    text5.innerHTML = c5
    let f5 = setTimeout('change5()',10)
    if(c5==d5){
        clearTimeout(f5)
    }
}
change5()


function navbar() {
    document.querySelector("#myDropdown").classList.toggle("show");
}







// var sections = document.querySelectorAll("section");

// onscroll = function(){
//     var scrollPosition = document.documentElement.scrollTop;

//     sections.forEach((section) => {
//         if (
//           scrollPosition >= section.offsetTop - section.offsetHeight 
//           *0.25 && 
//           scrollPosition < section.offsetTop + section.offsetHeight 
//           -section.offsetHeight *0.25
//             ) {
//                 var currentId = section.attributes.id.value
//                 removeAllActiveClasses();
//                 addActiveClasses(currentId);
//             }
//     });
// };

// var removeAllActiveClasses = function () {
//     document.querySelectorAll("header nav a").forEach((el) => {
//         el.classList.remove("active");
//     });
// };
// var addActiveClasses = function (id) {
//     var selector = `header nav a[id="id"]`;
//     document.querySelector(selector).classList.add("active");
// };





$(document).ready(function() {
    $(window).bind('scroll', function(){
        var gap = 50;
        if($(window).scrollTop() > gap){
            $('header').addClass('active2');
        }
        else{
            $('header').removeClass('active2');
        }
    });
});



$(function(){
    $(".slider_act>.sliderbtn").click(function(){
        $(".sliderbtn").css({"color":"grey","border":"none", "border-radius":"10px", "width":"30px"})
		$(this).css({"color":"black","border":"2px solid gray", "border-radious":"2px", "width":"20px"})
    })
})


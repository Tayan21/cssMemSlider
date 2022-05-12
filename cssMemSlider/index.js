const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const slider = document.querySelector('.slider-inner');
const image = document.querySelector('img');
const text = document.querySelector('.text');
const button = document.querySelectorAll('.button');
console.log(button);

let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
let par = [
    'Everything will be OK!',
    'You are your only limit!',
    'Use your brain!',
    'Make it happen!',
    'You can change! Start now!',
    'Be kind!',
    'Don\'t give up!'
];

button1.addEventListener('click', () =>{
    image.src = images[0];
    text.innerHTML = par[0];
});

button2.addEventListener('click', () =>{
    image.src = images[1];
    text.innerHTML = par[1];
});

button3.addEventListener('click', () =>{
    image.src = images[2];
    text.innerHTML = par[2];
});

button4.addEventListener('click', () =>{
    image.src = images[3];
    text.innerHTML = par[3];
});

button5.addEventListener('click', () =>{
    image.src = images[4];
    text.innerHTML = par[4];
});

button6.addEventListener('click', () =>{
    image.src = images[5];
    text.innerHTML = par[5];
});

button7.addEventListener('click', () =>{
    image.src = images[6];
    text.innerHTML = par[6];
});

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("mousedown", function(){
        button[i].classList.add('mousedown');
        console.log('mousedown');
    });
    button[i].addEventListener("mouseup", function(){
        button[i].classList.remove('mousedown');
        console.log('mouseup');
    });
    button[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });

}
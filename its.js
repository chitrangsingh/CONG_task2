let colourbtn = document.querySelector("#colorbtn");
let addbtn = document.querySelector(".addbtn");
let ptag = document.querySelector(".ptag");


let current_hour = new Date().getHours();
let greetings;
console.log(current_hour);
if (current_hour>=5 && current_hour<12) {
    greetings = "Good Morning !! ";
}
else if (current_hour>=12 && current_hour<17) {
    greetings = "Good Afternoon !! ";
}
else if(current_hour>=17 && current_hour<21){
    greetings = "Good Evening !! ";
}
else{
    greetings = "Good Night !! ";
}
alert(greetings);

function getRandomColor() {
    // Generate a random color in hexadecimal format
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colourbtn.addEventListener('click',function(){
    let randomColour = getRandomColor();
    colourbtn.style.backgroundColor = randomColour;
});

addbtn.addEventListener('click',function(){
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    let sum = num1 + num2;
    ptag.innerHTML = `The sum of ${num1} and ${num2} is equals to ${sum}`;
});
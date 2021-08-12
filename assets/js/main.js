//Date and day elements

let output1 = document.getElementById('output1');
let date = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleDateString();

//switch function
switch (day){
    case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednsday"
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}

output1.innerHTML = day;
date.innerHTML = ndate;


//Colors array
let colors = ['blue', 'yellow', 'green', 'red', 'purple', 'orange'];
//Get button
let btn = document.getElementById('btn');
//add event listener
btn.addEventListener('click', function(){
    //randomiser
    var randomColor = colors[Math.floor(Math.random() * (colors.length))]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})
let output = document.getElementById('output');
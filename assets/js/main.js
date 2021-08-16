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
        day = "Wednsday";
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


//Colors array to quotes container
let colors = ['#fd00ff', '#fdff00', '#00ff38', '#00f9ff', '#3c00ff'];
//Get button
let btn = document.getElementById('btn');
//add event listener
btn.addEventListener('click', function(){
    //randomiser
    var randomColor = colors[Math.floor(Math.random() * (colors.length))];
    //get container
    let container = document.getElementById('container');

    container.style.backgroundColor = randomColor;
    //container.style.background = randomColor;

});
let output = document.getElementById('output');


//Quotes array
    let quotes = [
        {
            quoteText: "Psychedelics, used responsibly and with proper caution, would be for psychiatry what the microscope is for biology and medicine or the telescope is for astronomy.",
            quoteAuthor: "Professor Stan Grof",
            quoteImage: "assets/images/prof-stan-grof.jpg",

        }, 
        {
            quoteText: "It gave me an inner joy, an open mindedness, a gratefulness, open eyes and an internal sensitivity for the miracles of creation... I think that in human evolution it has never been as necessary to have this substance LSD. It is just a tool to turn us into what we are supposed to be.",
            quoteAuthor: "Albert Hofmann",
            quoteImage: "assets/images/albert-hofmann.jpg",
        }

    ];

    
   
    btn.addEventListener('click', function(){
     let randomNumber = Math.floor(Math.random() * (quotes.length));
       let randomQuote = quotes[randomNumber]['quoteText'];
        let quoteImage =  quotes[randomNumber]['quoteImage'];
        let quoteAuthor = quotes[randomNumber]['quoteAuthor'];
        
       output.innerHTML = randomQuote;
        console.log(randomQuote + " " + quoteAuthor + " " + quoteImage);
   });

 
    
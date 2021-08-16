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
let colors = ['#CD5C5C', '#FF5733'];
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
            quoteText: "Enlightenment is just another word for feeling comfortable with being a completely ordinary person.",
            quoteAuthor: "Veronique Vienne",
            quoteImage: "assets/images/1.png",

        }, 
        {
            quoteText: "Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.",
            quoteAuthor: "Albert Einstein",
            quoteImage: "assets/images/2.png",
        }

    ];

    
    btn.addEventListener('click', function(){
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        let randomQuote = quotes[randomNumber]['quoteText'];
        let quoteImage =  quotes[randomNumber]['quoteImage'];
        let quoteAuthor = quotes[randomNumber]['quoteAuthor'];
        //let quoteMood explore this//
        output.innerHTML = randomQuote;
        console.log(randomQuote + " " + quoteAuthor + " " + quoteImage);
    });
    
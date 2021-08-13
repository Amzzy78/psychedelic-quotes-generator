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


//Colors array to quotes container
let colors = ['#CD5C5C', '#FF5733'];
//Get button
let btn = document.getElementById('btn');
//add event listener
btn.addEventListener('click', function(){
    //randomiser
    var randomColor = colors[Math.floor(Math.random() * (colors.length))]
    //get container
    let container = document.getElementById('container');

    container.style.backgroundColor = randomColor;
    //container.style.background = randomColor;

})
let output = document.getElementById('output');


//Quotes array

let quotesold = [
    '"Life lived in the absence of the psychedelic experience that primordial shamanism is based on is life trivialized, life denied, life enslaved to the ego." — Terence McKenna',
    '"Psychedelics prove to you that there/’s more than one way of seeing the world." — Jesse Lawler',
    '"That’s why I always recommend a psychedelic experience because it makes you realize that all you’ve learned is in fact just learned and not necessarily the truth." — Bill Hicks',
    '"It’s very, very dangerous to lose contact with living nature." — Albert Hofmann',
    '"Unlike happiness, unhappiness cannot happen without the presence of an ego."— Mokokoma Mokhonoana',
    '"The opposite of spiritual is not material but egotistical." — Michael Pollan',
    '"Psychedelics show you what’s in and on your mind, those subconscious thoughts and feelings that are hidden, covered up, forgotten, out of sight, maybe even completely unexpected, but nevertheless imminently present." — Rick Strassman',
    '"Subjects see new dimensions in the universe, have strong feelings of being an integral part of creation, and tend to regard ordinary things in everyday life—such as meals, walks in nature, playing with children, or sexual intercourse — as sacred." — Stanislav Grof',
    '"To use your head, you have to go out of your mind." — Timothy Leary',
    '"Whenever in doubt, turn off your mind, relax, and float downstream." — John Lennon',
    '"Enlightenment is just another word for feeling comfortable with being a completely ordinary person." — Veronique Vienne',
    '"Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy." — Albert Einstein'
    ];

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
    })
    
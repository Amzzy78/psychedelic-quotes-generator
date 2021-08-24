//Date and day elements

let output1 = document.getElementById('output1');
let date = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleDateString();

//switch function
switch (day) {
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
btn.addEventListener('click', function () {
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
        quoteText: '"Psychedelics, used responsibly and with proper caution, would be for psychiatry what the microscope is for biology and medicine or the telescope is for astronomy."',
        quoteAuthor: 'Professor Stanislav Grof',   

    },

    {
        quoteText: '“The rule of thumb is the more profound the experience, the longer you should wait before doing it again. The Guild of Guides suggests a minimum of six months between entheogenic journeys because it takes at least that long for the learning and insights to be absorbed and integrated into your life.”',
        quoteAuthor: 'Dr.James Fadiman'
    },

    {
        quoteText: '"It gave me an inner joy, an open mindedness, a gratefulness, open eyes and an internal sensitivity for the miracles of creation... I think that in human evolution it has never been as necessary to have this substance LSD. It is just a tool to turn us into what we are supposed to be."',
        quoteAuthor: 'Dr. Albert Hofmann',
        
    },

    {
        quoteText: '“Psychedelics are illegal not because a loving government is concerned that you may jump out of a third-story window. Psychedelics are illegal because they dissolve opinion structures and culturally laid down models of behaviour and information processing. They open you up to the possibility that everything you know is wrong.”',
        quoteAuthor: 'Terence McKenna'
    },

    {
        quoteText: '“There is a wealth of information built into us … tucked away in the genetic material in every one of our cells … without some means of access, there is no way even to begin to guess at the extent and quality of what is there. The psychedelic drugs allow exploration of this interior world and insights into its nature.”',
        quoteAuthor: 'Professor Alexander Shulgin',
    },

    {
        quoteText: '“In regular Freudian therapy you get an intellectual change, but it doesn’t really change anything,” says Haynes. “What you get from LSD is an emotional change.”',
        quoteAuthor: 'Roberta Haynes',
    },

    {
        quoteText: '"It is true that my discovery of LSD was a chance discovery, but it was the outcome of planned experiments and these experiments took place in the framework of systematic pharmaceutical, chemical research. It could better be described as serendipity."',
        quoteAuthor: 'Dr. Albert Hofmann'
    }

];

btn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    let randomQuote = quotes[randomNumber]['quoteText'];
    let quoteAuthor = quotes[randomNumber]['quoteAuthor'];
    //let quoteImage =  quotes[randomNumber]['quoteImage'];

    output.innerHTML = randomQuote + " " + quoteAuthor;

    console.log(randomQuote + " " + quoteAuthor);
});

//images
var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["assets/images/squares.jpg", "assets/images/mushys.jpg", "assets/images/glitter-lady.jpg", "assets/images/coral.jpg", "assets/images/tribal-man.jpg", "assets/images/swirls-colour.jpg", "assets/images/trip.jpg", "assets/images/mushrooms.jpg", "assets/images/rainbow-colours.jpg"];

var i = 0;

//next btn
next.addEventListener('click', function(){
   i++;
   if(i > arr.length - 1){
      i = 0;
   }
   document.getElementById('image').src = arr[i];

})
//prev btn
previous.addEventListener('click', function(){
    i--;
   if(i < 0){
       i = arr.length - 1;
   }
    document.getElementById('image').src = arr[i];
    

})
//Colors array to quotes container
let colors = ['#fd00ff', '#fdff00', '#00ff38', '#00f9ff', '#3c00ff'];
//Get element by id
let btn = document.getElementById('btn');
//Add click event to button
btn.addEventListener('click', function () {
    //Randomiser of colours when button clicked
    var randomColor = colors[Math.floor(Math.random() * (colors.length))];
    //Get container
    let container = document.getElementById('container');

    container.style.backgroundColor = randomColor;

});
//Locate the outputs of quoteText, quoteImage and quoteAuthor by id
let output = document.getElementById('output');
let quoteSrc = document.getElementById('quote-image');
let author = document.getElementById('author');


//Quotes array
let quotes = [{
        quoteText: '"Psychedelics, used responsibly and with proper caution, would be for psychiatry what the microscope is for biology and medicine or the telescope is for astronomy."',
        quoteAuthor: 'Professor Stanislav Grof',
        quoteImage: 'assets/images/stan-grof.jpg'

    },
    {
        quoteText: '"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."',
        quoteAuthor: 'Aldous Huxley',
        quoteImage: 'assets/images/Aldous-Huxley.jpg'
    },
    {
        quoteText: '"The rejection of any source of evidence is always treason to that ultimate rationalism which urges forward science and philosophy alike"',
        quoteAuthor: 'Alfred North Whitehead',
        quoteImage: 'assets/images/Alfred-North-Whitehead.jpg'
    },

    {
        quoteText: '“The rule of thumb is the more profound the experience, the longer you should wait before doing it again. The Guild of Guides suggests a minimum of six months between entheogenic journeys because it takes at least that long for the learning and insights to be absorbed and integrated into your life.”',
        quoteAuthor: 'Dr.James Fadiman',
        quoteImage: 'assets/images/Dr.James-Fadiman.jpeg'
    },

    {
        quoteText: '"It gave me an inner joy, an open mindedness, a gratefulness, open eyes and an internal sensitivity for the miracles of creation... I think that in human evolution it has never been as necessary to have this substance LSD. It is just a tool to turn us into what we are supposed to be."',
        quoteAuthor: 'Dr. Albert Hofmann',
        quoteImage: 'assets/images/Dr.Albert Hofmann.jpg'

    },

    {
        quoteText: '“Psychedelics are illegal not because a loving government is concerned that you may jump out of a third-story window. Psychedelics are illegal because they dissolve opinion structures and culturally laid down models of behaviour and information processing. They open you up to the possibility that everything you know is wrong.”',
        quoteAuthor: 'Terence McKenna',
        quoteImage: 'assets/images/Terence-McKenna.jpg'
    },
    {
        quoteText: '"I had found my ‘mission’ in life – to scientifically research these changing states of consciousness, and their potential value for humanity, and to integrate this knowledge into modern society."',
        quoteAuthor: 'Amanda Feilding',
        quoteImage: 'assets/images/amanda-fielding.jpeg'
    },

    {
        quoteText: '“There is a wealth of information built into us … tucked away in the genetic material in every one of our cells … without some means of access, there is no way even to begin to guess at the extent and quality of what is there. The psychedelic drugs allow exploration of this interior world and insights into its nature.”',
        quoteAuthor: 'Professor Alexander Shulgin',
        quoteImage: 'assets/images/Professor-Alexander-Shulgin.jpg'
    },

    {
        quoteText: '“In regular Freudian therapy you get an intellectual change, but it doesn’t really change anything,” says Haynes. “What you get from LSD is an emotional change.”',
        quoteAuthor: 'Roberta Haynes',
        quoteImage: 'assets/images/roberta-haynes.jpg'
    },
    {
        quoteText: '“The best way to overcome the taboo, and re-integrate psychedelics into the fabric of society, is by undertaking the very best scientific research.”',
        quoteAuthor: 'Amanda Feilding',
        quoteImage: 'assets/images/amanda-fielding.jpeg'
    },
    {
        quoteText: '"It is true that my discovery of LSD was a chance discovery, but it was the outcome of planned experiments and these experiments took place in the framework of systematic pharmaceutical, chemical research. It could better be described as serendipity."',
        quoteAuthor: 'Dr. Albert Hofmann',
        quoteImage: 'assets/images/Dr.Albert Hofmann.jpg'
    },
    {
        quoteText: '“The modern person is drawn to the shamanic archetype—the vision of sacred earth, revelatory word, and multidimensional cosmos—finds himself horrified by contemporary society and the accelerating processes of global destruction it has unleashed.”',
        quoteAuthor: 'Daniel Pinchbeck',
        quoteImage: 'assets/images/Daniel_Pinchbeck.jpg'
    },
    {
        quoteText: '“With psychedelics, if you’re fortunate and break through, you understand what is truly of value in life. Material, power, dominance, and territory have no value. People wouldn’t fight wars, and the whole system we have currently would fall apart. People would become peaceful, loving citizens, not robots marching around in the dark with all their lights off.”',
        quoteAuthor: 'Gary Fisher',
        quoteImage: 'assets/images/gary-fisher.jpg'
    },
    {
        quoteText: '"We are living through a mental health crisis. Existing treatments barely scratch the surface of the problem, and have not translated into real-world benefit for a huge number of people."',
        quoteAuthor: 'Amanda Feilding',
        quoteImage: 'assets/images/amanda-fielding.jpeg'
    }

];
//When the btn is clicked fetch all outputs assigned to object and randomise
btn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    let randomQuote = quotes[randomNumber].quoteText;
    let quoteAuthor = quotes[randomNumber].quoteAuthor;
    let quoteImage = quotes[randomNumber].quoteImage;

    output.innerHTML = randomQuote;
    author.innerHTML = quoteAuthor;
    quoteSrc.src = quoteImage;

});

//Images held in array to be fetched via the prev and nect buttons
var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["assets/images/squares.jpg", "assets/images/mushys.jpg", "assets/images/glitter-lady.jpg", "assets/images/coral.jpg", "assets/images/tribal-man.jpg", "assets/images/swirls-colour.jpg", "assets/images/trip.jpg", "assets/images/mushrooms.jpg", "assets/images/rainbow-colours.jpg"];

var i = 0;

//Next btn
next.addEventListener('click', function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById('image').src = arr[i];

});
//Prev btn
prev.addEventListener('click', function () {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];


});

//Date and day elements

let output1 = document.getElementById('output1');
let date = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleDateString();

//Switch function
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
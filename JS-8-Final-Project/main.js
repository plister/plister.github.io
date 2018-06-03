/*Clicking "Jam" button first shuffles the array, and then takes the value of the input number and returns that quantity of lines/sentences from the array in the lyrics textbox.*/
/*going to want to put all this code in a getLyrics function*/

function phishIpsum(event) {

  event.preventDefault()

  let lyricsArray = [
    "I never ever saw the stars so bright, in the farmhouse things will be alright", 
    "Each betrayal begins with trust, every man returns to dust", 
    "Now you forever sing your song with the wolves where you belong, now quite alone I often dream, I hear you singing through the steam", 
    "I change the landscape as I pass, meandering from sand to glass", 
    "Your hands and feet are mangos, but you're gonna be a genius anyway", 
    "That time then and once again, I'm bouncing round the room", 
    "With your past and your future precisely divided, am I at that moment? I haven't decided", 
    "Things are falling down on me, heavy things I could not see, when I finally came around, something small would pin me down", 
    "Left is where I always turn, left is how I'm forced to learn, left the route my walking takes, left alone with my mistakes", 
    "I need a different life, I think, perhaps I'll be the missing link", 
    "Never is that point in time that doesn't have dimension, always is the measure of how long time's been around",
    "Should I spend my adolescent days wearing tie dyes or Vuarnets, I can't decide, a big ten kegger at the frat, or watching Jerry shake his fat",
    "The passion that sparked me one terrible night, had shocked and persuarded my soul to ignite",
    "Set the gearshift to the high gear of your soul, you've got to run like an antelope out of control",
    "Can we stand? Can we stare? We can stage a runaway golf cart marathon",
    "There've been times when I wonder and times when I don't, concepts I'll ponder and concepts I won't ever see",
    "I was taught a month ago, To bide my time and take it slow, But then I learned just yesterday, To rush and never waste the day"
  ]

  let newLyricsArray = []
  
  const shuffleLyrics =_.shuffle(lyricsArray);
  
  let numberOfLyrics = document.getElementById('numberOfLyrics').value
  
  for (let i=0; i< numberOfLyrics; i++) {
    /* use .push to create/establish the newLyrics array*/
    let phishlyric = shuffleLyrics[i]
    /*getting a lyric at the 0 index...*/
    newLyricsArray.push(phishlyric)
  }
  /*Needed to swap .innerHTML in place of .value for it to work properly*/
  document.getElementById('phishIpsumLyrics').innerHTML = newLyricsArray.join(". ") + "."

  document.getElementById("lyricsBox").style.visibility = "visible"
}

/*Look at using .join() for formatting the lyrics
--Can make the separator ". " 

Look at toggleClass to hide the textbox

Could add a checkbox asking if they'd like a list or paragraph formatting, then do an if/else statement (\n = new line)

Perform validation - if the input number is greater than items in the array, then reshuffle and take the next items needed
--Also, if needed, make the new array greater before pushing it out
*/


/*
Click the button, shuffle the array, and take the first five items. 
Lodash has a function called shuffle. - minified source code for _.shuffle from the site. 
Link included in html file as a script, so _.shuffle should then work. 
.slice method? - would I need to use a for loop to repeatedly use .slice until the inputNumber is met.

Would still need to loop it through if inputNumber exceeds the number of items/lyrics in the array. Might need a conditional?

1. import _.shuffle from lodash
2. const list = [1, 2, 3, 4]
3. const shuffleList = _.shuffle(list)
4. console.log(shuffleList) => [new array]
newValue = shuffleList.slice({input.val})

input.val refers to the number input in the form.
*/

/*When the button is clicked/submitted, shuffle the array and return x items/lines from the array. (x= inputNumber)*/



/*
function getLyrics() {
    for (let i=0; i<inputNumber; i++) {
        _.shuffle(lyrics)
        return lyrics.slice(i)
    }
} 
Would I use .slice or .map? Which would work better for the purposes of pulling multiple? 
*/
/*
i = 0; i < inputNumber; i++;

Need to create a function that continuously returns random items from an array until it equals the quantity entered in the input. 


function getLyrics(inputNumber) {
	for (let i = 0; i < inputNumber; i++) {
		return Math.random()
	}
}





Class notes::
You can iterate over an array with:

let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(i);
}
If the array length is fixed (aka elements are not being added/removed which change the number of elements in the array), the previous loop is slightly inefficient because it is essentially looking up the length property once every loop. An improvement is to chain the let assignment:

let a = [1, 2, 3, 4, 5];
for (let i = 0, len = a.length; i < len; i++) {
  console.log(i);
}


var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.body.innerHTML = randomItem;
https://css-tricks.com/snippets/javascript/select-random-item-array/
*/
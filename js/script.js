/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//2022.03.08A - Write, test `quotes` array
const quotes = [
  {//(1)
    quote: '[... The ability to both] abstain from and enjoy those things which many are too weak to abstain from and cannot enjoy without excess, but to be strong enough to both bear the one and be sober in the other is the mark of a perfect, invincible soul.',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: 175,
    media: 'Book',
    tag: 'Philosophy'
  },
  {//(2)
    quote: `We don't react to events; we react to our judgments about them, and the judgments are up to us.`,
    source: 'Ward Farnsworth',
    citation: 'The Practicing Stoic',
    year: 2018,
    media: 'Book',
    tag: 'Philosophy'
  },
  {//(3)
    quote: 'It is not what things are, but what they are for us that matters.',
    source: 'Schopenhauer',
    citation: 'The Wisdom of Life',
    year: '1851',
    media: 'Book',
    tag: 'Philosophy'
  },
  {//(4)
    quote: 'Stay detached from things that are not up to you.',
    source: 'Epictetus',
    tag: 'Philosophy'
  },
  {//(5)
    quote: 'We believe these affairs of ours are great because we are small.',
    source: 'Seneca',
    tag: 'Philosophy'
  },
  {//(6)
    quote: 'The world is nothing but change, [and] our life is only perception.',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: 175,
    media: 'Book',
    tag: 'Philosophy'
  },
  {//(7)
    quote: 'Most of all, the world is a place where parts of wholes are described.',
    source: 'The Books',
    citation: 'Smells Like Content',
    year: '2011',
    media: 'Song',
    tag: 'Philosophy'
  },
  {//(8)
    quote: 'We went ahead [and fabricated] a catalog of unstable elements, modicums, particles,[and matter] with not zero total strangeness [that exist] for brief moments which amount to nothing more than tiny fragments of a finger snap.',
    source: 'The Books',
    citation: 'Smells Like Content',
    year: '2011',
    media: 'Song',
    tag: 'Philosophy'
  },
  {//(9)
    quote: `Don't let what you cannot do interfere with what you can do.`,
    source: 'John Wodden',
    tag: 'Motivation'
  },
  {//(10)
    quote: 'There is nothing either good or bad, but thinking makes it so.',
    source: 'William Shakespeare',
    tag: 'Philosophy'
  },
];

//RNG - Returns integer between integers [min,max] (inclusive)
const rng = (min=1,max=10) => Math.floor( Math.random()*(max-min+1)+min );

//Initialize Variables
let rIndex=0;
let track=[]; //Track indices of quotes shown

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  rIndex=rng(0,quotes.length-1); //Random index value for quotes[]
  
  //Eliminate repeat-quotes until all quotes have been shown. Repeat.
  while(track.includes(rIndex)){ rIndex=rng(0,quotes.length-1); }
  track.push(rIndex);
  if(track.length===quotes.length) track=[];

  console.log(rIndex, quotes[rIndex])
  return quotes[rIndex];
}

/***
 * `printQuote` function
***/
function printQuote(){
  const Obj=getRandomQuote();
  let HTML='';

  //Markup quote string
  html=`<p class="quote">${Obj.quote}</p>\
  <p class="source">${Obj.source}`;
  if(Obj.citation) html+=`<span class="citation">${Obj.citation}</span>`;
  if(Obj.media) html+=`<span class="year">${Obj.media}</span>`;
  if(Obj.year) html+=`<span class="year">Year: ${Obj.year}</span>`;
  if(Obj.tag) html+=`<span class="citation">Tag: ${Obj.tag}.</span>`;
  html+='</p>';

  /*Code adopdted from:
  https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
  and a previous Team Treehouse exercise I completed on refactoring*/
  //Change background color every new quote
  document.body.style.backgroundColor=
  `rgb(${rng(1,255)},${rng(1,255)},${rng(1,255)})`;

  document.getElementById('quote-box').innerHTML=html;

  //Reset interval - In case user, clicks `Show another quote` button toward end of interval
  clearInterval(intervalID);
  intervalID=setInterval(printQuote, 20000);
}

//Adopted from: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//Change quote every 20 seconds, reset after every printQuote call
let intervalID=setInterval(printQuote, 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
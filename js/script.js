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
    quote: '[... The ability to both] abstain from and enjoy those things which many are too weak to abstain from and cannot enjoy without excess, but to be strong enough to both bear the one and be sober in the other is the mark of perfect, invincible soul.',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: 175,
    tag: 'Philosophy'
  },
  {//(2)
    quote: `We don't react to events; we react to our judgments about them, and the judgments are up to us.`,
    source: 'Farnsworth, Ward',
    citation: 'Practicing Stoic, The',
    year: 2018,
    tag: 'Philosophy'
  },
  {//(3)
    quote: 'It is not what things are, but what they are for us that matters.',
    source: 'Schopenhauer',
    citation: 'Wisdom of Life, The',
    year: '1851',
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
    tag: 'Philosophy'
  },
  {//(7)
    quote: 'Most of all, the world is a place where parts of wholes are described.',
    source: 'Books, The',
    citation: 'Smells Like Content',
    year: '2011',
    tag: 'Philosophy'
  },
  {//(8)
    quote: 'We went ahead [and fabricated] a catalog of unstable elements, modicums, particles,[and matter] with not zero total strangeness [that exist] for brief moments which amount to nothing more than tiny fragments of a finger snap.',
    source: 'Books, The',
    citation: 'Smells Like Content',
    year: '2011',
    tag: 'Philosophy'
  },
  {//(9)
    quote: `Don't let what you cannot do interfere with what you can do.`,
    source: 'Wodden, John',
    tag: 'Motivation'
  },
  {//(10)
    quote: 'There is nothing either good or bad, but thinking makes it so.',
    source: 'William Shakespeare',
    tag: 'Philosophy'
  },
];

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
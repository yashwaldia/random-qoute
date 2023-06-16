
let quotes=[

    '"You have the right to perform your prescribed duty, but you are not entitled to the fruits of your actions." (Chapter 2, Verse 47)',
    '"Change is the law of the universe. You can be a millionaire or a pauper in an instant." (Chapter 2, Verse 14)',
    '"There is neither this world, nor the world beyond. Nor happiness for the one who doubts." (Chapter 4, Verse 40)',
    '"A person can rise through the efforts of his own mind; mind is the friend and mind is the enemy of the self." (Chapter 6, Verse 5)',
    '"The soul is neither born, and nor does it die." (Chapter 2, Verse 20)',
    '"One who sees inaction in action, and action in inaction, is intelligent among men." (Chapter 4, Verse 18)',
    '"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place." (Chapter 6, Verse 19)',
    '"The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace." (Chapter 2, Verse 64)',
    '"For the soul, there is never birth nor death. Nor, having once been, does he ever cease to be. He is unborn, eternal, ever-existing, undying and primeval." (Chapter 2, Verse 20)',
    '"The yogi is greater than the ascetics, greater than the empiricists, and greater than the fruitive workers. Therefore, O Arjuna, in all circumstances, be a yogi." (Chapter 6, Verse 46)',
    '"Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga." (Chapter 2, Verse 48)',
    '"No one who does good work will ever come to a bad end, either here or in the world to come." (Chapter 6, Verse 40)',
    '"As a person abandons worn-out clothes and acquires new ones, so when the body is worn out, a new one is acquired by the Self, who lives within." (Chapter 2, Verse 22)',
    '"The power of God is with you at all times; through the activities of mind, senses, breathing, and emotions; and is constantly doing all the work using you as a mere instrument." (Chapter 18, Verse 61)',
    '"He alone sees truly who sees God in every creature." (Chapter 13, Verse 27)',
    '"On this path, no effort is wasted, no gain is ever reversed, and even a little advancement on this path can protect one from the most dangerous type of fear." (Chapter 2, Verse 40)',
    '"Reshape yourself through the power of your will; never let yourself be degraded by self-will. The will is the only friend of the Self, and the will is the only enemy of the Self." (Chapter 6, Verse 5)',
    '"When a person responds to the joys and sorrows of others as though they were his own, he has attained the highest state of spiritual union." (Chapter 6, Verse 32)',
    '"Those who live in accordance with the divine laws without complaining, firmly established in truthfulness, are freed from all karma." (Chapter 3, Verse 17)',
    '"The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind." (Chapter 2, Verse 23)',
    '"A person can rise through the efforts of his own mind; mind is the friend and mind is the enemy of the self." (Chapter 6, Verse 6)',
    '"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place." (Chapter 6, Verse 19)',
    '"There is neither this world, nor the world beyond. Nor happiness for the one who doubts." (Chapter 4, Verse 40)',
    '"The senses are higher than the body, the mind higher than the senses; above the mind is the intellect, and above the intellect is the Atman (soul)." (Chapter 3, Verse 42)',
    '"It is better to live your own destiny imperfectly than to live an imitation of somebody else life with perfection." (Chapter 3, Verse 35)',
    '"You have the right to perform your prescribed duty, but you are not entitled to the fruits of your actions." (Chapter 2, Verse 47)',
    '"One who sees inaction in action, and action in inaction, is intelligent among men." (Chapter 4, Verse 18)',
    '"Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga." (Chapter 2, Verse 48)',
    '"The soul is neither born, and nor does it die." (Chapter 2, Verse 20)',
    '"You came empty-handed, and you will leave empty-handed." (Chapter 5, Verse 29)',
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">
<img src="comma.jpg">
<p>${quotes[index]}</p>
<img src="comma.jpg">
</div>

`;
div.innerHTML=quote;

}

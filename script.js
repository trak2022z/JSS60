const articleOne = document.querySelector('#article-1');
const articleTwo = document.querySelector('#article-2');
const bonsai = document.querySelector('.horticulture');

// trying to assign a new parent will not work
bonsai.parentNode = articleOne;

//parent node for H2 is article-2
console.log(bonsai.parentNode); // <article id="article-2">; still the second article
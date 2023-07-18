const container = document.querySelector('#container');

const content = document.createElement('div');
const redtext = document.createElement('p');
const blueHeading = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const meToo = document.createElement('p');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');


content.classList.add('content');
redtext.classList.add('redtext');
redtext.classList.add('blueHeading');
div.classList.add('special');


content.textContent = 'This is the glorious text-content!';
redtext.textContent = 'Hey I’m red!';
blueHeading.textContent = 'I’m a blue h3!';
h1.textContent = "I’m in a div";
meToo.textContent = "ME TOO!";
redtext.style = "color: red";
blueHeading.style = "color: blue";
div.style = "background-color: pink; border: 2px solid black";


container.appendChild(content);
container.appendChild(redtext);
container.appendChild(blueHeading);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(meToo);




btn.onclick = () => alert("Hello World");


btn2.addEventListener('click', () => {
  alert("Hello World");
});


btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
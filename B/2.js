'use strict'

const ul = document.querySelector('#target');

const para1 = document.createElement('li');
para1.innerText = 
`First item`;
ul.appendChild(para1);

const para2 = document.createElement('li');
para2.innerText = 
`Second item`;
ul.appendChild(para2);

const para3 = document.createElement('li');
para3.innerText = 
`Third item`;
ul.appendChild(para3);

para2.classList.add('my-item');
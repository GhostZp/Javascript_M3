'use strict'

const ul = document.querySelector('#target');
const html =
        `<li>First item</li>
        <li>Second item</li>
        <li>Third item</li>`;
ul.innerHTML = html;  

document.querySelector('#target').classList.add('my-list');
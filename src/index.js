var messages = require('./messages');

var style = require('./style/globalStyle.css');

// import BUTTON from './button';
// import KITTEN from './IMAGE';
// import UPPSALAJS from './uppsalajs';

// var app = document.getElementById('app');

// var newMessage = () => (`
// <div>
//     ${BUTTON.button} 
//     <p>
//     ${messages.hi} ${messages.event}
//     </p>
//     <p>
//     ${KITTEN}
//     </p>
//      <p>
//     ${UPPSALAJS}
//     </p>
// </div>
// `);

import {multiply} from './mathStuff';

const newMessage = () => (`
<div class="${style.box}"> 
    DEVELOPMENT: ${DEVELOPMENT.toString()}<br />
    PRODUCTION: ${PRODUCTION.toString()}<br />
    ${multiply(3,3)} 
</div>`
);

app.innerHTML = newMessage();

//BUTTON.attachEl();

if(module.hot){
    module.hot.accept();
}


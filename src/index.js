import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', {}, "An Awesome Person")
const p = React.createElement('p', {}, "Who is learning React")
const l1 = React.createElement('li', {}, "JavaScript")
const l2 = React.createElement('li', {}, "React")
const l3 = React.createElement('li', {}, "Movies")
const l4 = React.createElement('li', {}, "Ice cream")
const ul = React.createElement('ul', {className: "my-interests"}, [l1,l2,l3,l4])

const meInReact = React.createElement('div', {className: "me"}, [h1,p,ul] )
// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

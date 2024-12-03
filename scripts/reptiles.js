let mainDiv = document.querySelector('main');

let containerDiv = document.createElement('div');
containerDiv.classList.add('container');
mainDiv.appendChild(containerDiv);

let imageElement = document.createElement('img');
imageElement.setAttribute('src', '/assets/images/reptiles/reptile-hero-image.png');
imageElement.setAttribute('alt', 'jungle-hero-image');
containerDiv.appendChild(imageElement);

let heroDiv = document.createElement('div');
heroDiv.classList.add('hero-text');
containerDiv.appendChild(heroDiv);

let h1Element = document.createElement('h1');
heroDiv.appendChild(h1Element);

let paragraphElement = document.createElement('p');
heroDiv.appendChild(paragraphElement);

let btnElement = document.createElement('button');
btnElement.classList.add('hero-btn');
heroDiv.appendChild(btnElement);

document.querySelector('h1').textContent = 'Welcome to the Reptile Page'
document.querySelector('p').textContent = 'Ave Maria Gratia plena Mariagratia plena Maria gratia plena. Ave ave dominus, dominus tecum. Benedicta tu in mulieribus. Et benedictus. Et benedictus fructus ventris Ventris tuae, Jesus Ave Maria'

let btnText = document.createTextNode('Click!');
btnElement.appendChild(btnText);

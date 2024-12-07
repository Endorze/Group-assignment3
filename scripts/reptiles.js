const mainDiv = document.querySelector('main');

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
mainDiv.appendChild(containerDiv);

const imageElement = document.createElement('img');
imageElement.setAttribute('src', '/assets/images/reptiles/reptile-hero-image.png');
imageElement.setAttribute('alt', 'jungle-hero-image');
containerDiv.appendChild(imageElement);

const heroDiv = document.createElement('div');
heroDiv.classList.add('hero-text');
containerDiv.appendChild(heroDiv);

const h1Element = document.createElement('h1');
heroDiv.appendChild(h1Element);

const paragraphElement = document.createElement('p');
paragraphElement.classList.add('text-paragraph');
heroDiv.appendChild(paragraphElement);

const btnElement = document.createElement('button');
btnElement.classList.add('hero-btn');
heroDiv.appendChild(btnElement);




document.querySelector('h1').textContent = 'Welcome to the Reptile Page';
document.querySelector('.text-paragraph').textContent = 'Ave Maria Gratia plena Mariagratia plena Maria gratia plena. Ave ave dominus, dominus tecum. Benedicta tu in mulieribus. Et benedictus. Et benedictus fructus ventris Ventris tuae, Jesus Ave Maria';

const btnText = document.createTextNode('Click!');
btnElement.appendChild(btnText);

//Read more button

document.querySelector('.read-more-text').textContent = 'The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a birds beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.'

// const contentDiv = document.querySelector('.hawksbill-turtle')
// contentDiv.classList.add('input-class');


// const checkBoxInput = document.createElement('input')
// checkBoxInput.setAttribute('id', 'ch')
// checkBoxInput.setAttribute('type', 'checkbox')
// contentDiv.appendChild(checkBoxInput); 


function Reptile(name, lifespan, food, description, length, weight, found) {
    this.name = name;
    this.lifespan = lifespan;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;

}

let frillnecked = new Reptile('Frill-necked Lizard','Lifespan: 20 years','Food: Small insects & spiders','Description: When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.','Length: 90cm','Found: Northern Australia')
document.querySelector('.fnl-name').textContent = frillnecked.name;
document.querySelector('.fnl-lifespan').textContent = frillnecked.lifespan;
document.querySelector('.fnl-food').textContent = frillnecked.food;
document.querySelector('.fnl-length').textContent = frillnecked.length;
document.querySelector('.fnl-found').textContent = frillnecked.found;
document.querySelector('.fnl-description').textContent = frillnecked.description;

let hawksbill = new Reptile('Hawksbill Turtle','Lifespan: 50 years','Food: other animals (sponges & jellyfish), sea plants','Description: The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.','Length: 80cm (carapace)','Found: Tropical coasts of Queensland, Northern Territory and Western Australia.')
document.querySelector('.hb-name').textContent = hawksbill.name;
document.querySelector('.hb-lifespan').textContent = hawksbill.lifespan;
document.querySelector('.hb-food').textContent = hawksbill.food;
document.querySelector('.hb-length').textContent = hawksbill.length;
document.querySelector('.hb-found').textContent = hawksbill.found;
document.querySelector('.hb-description').textContent = hawksbill.description;


let perentie = new Reptile('Perentie', 'Lifespan: 20 years', 'Food: Carnivore, they eat animals like kangaroos, rabbits, lizards and birds','Description: The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.','Length: 2.5m','weight: 20kg','Found in: deserts')
document.querySelector('.p-name').textContent = perentie.name;
document.querySelector('.p-lifespan').textContent = perentie.lifespan;
document.querySelector('.p-food').textContent = perentie.food;
document.querySelector('.p-length').textContent = perentie.length;
document.querySelector('.p-weight').textContent = perentie.weight;
document.querySelector('.p-found').textContent = perentie.found;
document.querySelector('.p-description').textContent = perentie.description;



let animalTabs = document.querySelectorAll('.tab');

console.log(animalTabs)

animalTabs = Array.from(document.querySelectorAll('.tab'))

console.log(animalTabs)


const setActive = (clickedTab) => {
    animalTabs.forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active')
}

animalTabs.forEach(tab => tab.addEventListener ('click', () => setActive(tab)))

let reptileContent = Array.from(document.querySelectorAll('.content'));

const findContent = classToMatch => {
    reptileContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add('featured')
        } else {
            contentDiv.classList.remove('featured')
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener('click', () => findContent(tab.textContent.toLowerCase())));
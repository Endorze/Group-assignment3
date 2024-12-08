const mammalsData = {
  echidna: {
    name: "Echidna",
    lifespan: 50,
    group: "mammals",
    food: "insects such as ants and termites, beetle larvae and worms",
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    length: 76,
    weight: 10,
    found: "Throughout Australia",
    images: {
      small: "assets/images/mammals/echidna-small.jpg",
      large: "assets/images/mammals/echidna-large.jpg",
    },
  },
  tasmanianDevil: {
    name: "Tasmanian Devil",
    lifespan: 5,
    group: "mammals",
    food: "A predator, then eat meat from other animals such as wallabies and wombats",
    description:
      "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    length: 70,
    weight: 10,
    found: "Tasmania",
    images: {
      small: "assets/images/mammals/tasmanian-devil-small.jpg",
      large: "assets/images/mammals/tasmanian-devil-large.jpg",
    },
  },
  quokka: {
    name: "Quokka",
    lifespan: 10,
    group: "mammals",
    food: "Plant eaters, they munch on shrubs and grasses",
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    length: 50,
    weight: 3,
    found:
      "Only found on Rottnest Island and a few places on mainland Western Australia",
    images: {
      small: "assets/images/mammals/quokka-small.jpg",
      large: "assets/images/mammals/quokka-large.jpg",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const animalsList = document.getElementById("animalsList");
  const animalSummaries = document.getElementById("animalSummaries");
  const modal = document.getElementById("fullSummaryModal");
  const modalContent = document.getElementById("fullSummaryContent");
  const closeButton = document.querySelector(".close-button");

  // Clear existing summaries before adding new ones
  function clearSummaries() {
    animalSummaries.innerHTML = "";
  }

  // Populate sidebar
  for (const key in mammalsData) {
    const li = document.createElement("li");
    li.textContent = mammalsData[key].name;
    li.addEventListener("click", () => {
      clearSummaries();
      showAnimalSummary(key);
    });
    animalsList.appendChild(li);
  }

  // Show all animal summaries initially
  for (const key in mammalsData) {
    showAnimalSummary(key);
  }

  function showAnimalSummary(animalKey) {
    const animal = mammalsData[animalKey];
    const summaryDiv = document.createElement("div");
    summaryDiv.className = "animal-summary";

    const shortDescription = animal.description.substring(0, 200) + "...";

    summaryDiv.innerHTML = `
            <img src="${animal.images.small}" alt="${animal.name}" onerror="this.src='./assets/placeholder.jpg'">
            <h2>${animal.name}</h2>
            <p>${shortDescription}</p>
            <p><strong>Diet:</strong> ${animal.food}</p>
            <p><strong>Group:</strong> ${animal.group}</p>
            <button class="read-more-btn">Read More</button>
        `;

    // Adds event listener to Read More button
    summaryDiv.querySelector(".read-more-btn").addEventListener("click", () => {
      showFullSummary(animalKey);
    });

    animalSummaries.appendChild(summaryDiv);
  }

  function showFullSummary(animalKey) {
    const animal = mammalsData[animalKey];
    modalContent.innerHTML = `
            <div class="title-area">
                <img src="${animal.images.small}" alt="${animal.name}" onerror="this.src='./assets/placeholder.jpg'">
                <h2>${animal.name}</h2>
            </div>
            <div class="description">
                <img src="${animal.images.large}" alt="${animal.name}" onerror="this.src='./assets/placeholder.jpg'">
                <p><strong>Length:</strong> ${animal.length}cm</p>
                <p><strong>Weight:</strong> ${animal.weight}kg</p>
                <p>${animal.description}</p>
            </div>
            <div class="details">
                <p><strong>Diet:</strong> ${animal.food}</p>
                <p><strong>Habitat:</strong> ${animal.found}</p>
                <p><strong>Lifespan:</strong> ${animal.lifespan} years</p>
            </div>
        `;
    modal.style.display = "block";
  }

  // Closes modal when clicking the close button
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Closes modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

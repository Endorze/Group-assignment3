/* Data schema 
{ name: string,
lifespan: number,
group: string,
food: array,
description: string,
length: string,
weight: string,
found: array,
}*/
const animals = [
  {
    name: "Echidna",
    lifespan: 50,
    group: "mammals",
    food: ["ants", "termites", "beetle larvae", "worms"],
    description:
      "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    length: "76cm",
    weight: "10kg",
    found: ["Throughout Australia"],
    image: "../assets/homepage/images/mammals/mammal-echidna.jpg",
  },
  {
    name: "Tasmanian Devil",
    lifespan: 5,
    group: "mammals",
    food: ["meat from other animals", "wallabies", "wombats"],
    description:
      "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    length: "70cm",
    weight: "10kg",
    found: "Tasmania",
    image: "../assets/homepage/images/mammals/mammal-tasmanian-devil.jpeg",
  },
  {
    name: "Quokka",
    lifespan: 10,
    group: "mammals",
    food: ["shrubs", "grasses"],
    description:
      "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    length: "50cm",
    weight: "3kg",
    found: ["Rottnest Island", "few places on mainland Western Australia"],
    image: "../assets/homepage/images/mammals/mammal-quokka.jpg",
  },
  {
    name: "Frill-Necked Lizard",
    lifespan: 20,
    group: "reptiles",
    food: ["Small insects", "spiders"],
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    length: "90cm",
    weight: "1kg",
    found: ["Northern Australia"],
    image: "../assets/homepage/images/reptiles/reptile-frill-necked-lizard.jpeg",
  },
  {
    name: "Hawksbill Turtle",
    lifespan: 50,
    group: "reptiles",
    food: ["sponges", "jellyfish", "sea plants"],
    description:
      "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird's beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    length: "80cm (carapace)",
    weight: "50kg",
    found: [
      "Tropical coasts of Queensland",
      "Northern Territory",
      "Western Australia",
    ],
    image: "../assets/homepage/images/reptiles/reptile-hawks-bill-turtle.jpg",
  },
  {
    name: "Perentie",
    lifespan: 20,
    group: "reptiles",
    food: ["kangaroos", "rabbits", "lizards and birds"],
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    length: "2.5m",
    weight: "20kg",
    found: ["Deserts"],
    image: "../assets/homepage/images/reptiles/reptile-perentie.png",
  },
  {
    name: "Cassowary",
    lifespan: 20,
    group: "birds",
    food: [
      "Plant matter like fruit",
      "insects",
      "small animals like mice and lizards",
    ],
    description:
      "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
    length: "1.7m",
    weight: "44kg",
    found: ["Queensland"],
    image: "../assets/homepage/images/birds/bird-cassowary.jpg",
  },
  {
    name: "Kookaburra",
    lifespan: 20,
    group: "birds",
    food: ["Insects", "small animals", "snakes", "frogs", "lizards"],
    description:
      "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    length: "43cm",
    weight: "300g",
    found: ["Australia wide"],
    image: "../assets/homepage/images/birds/bird-kookaburra.jpeg",
  },
  {
    name: "Yellow Tailed Black Cockatoo",
    lifespan: 41,
    group: "birds",
    food: ["Fruit", "seeds", "other plant material"],
    description:
      "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    length: "65cm",
    weight: "900g",
    found: ["SE Australia"],
    image: "../assets/homepage/images/birds/bird-yellow-tailed-black-cockatoo.jpeg",
  },
];

// Sidebar menu
const createSidebarMenu = (animals) => {
  const sideBarMenuList = document.querySelector(".sidebar-menu-list");

  animals.forEach((animal) => {
    const menuList = document.createElement("li");
    menuList.classList.add("menu-list");
    const menuListLink = document.createElement("a");
    menuListLink.textContent = animal.name;

    menuList.appendChild(menuListLink);
    sideBarMenuList.appendChild(menuList);
  });
};

createSidebarMenu(animals);

// Animal card builder
const createAnimalCard = (animals) => {
  animals.forEach((animal) => {
    const animalCardContainer = document.querySelector(
      ".animal-card-container"
    );

    const animalCard = document.createElement("div");
    animalCard.classList.add("animal-card");

    const animalCardInner = document.createElement("div");
    animalCardInner.classList.add("animal-card-inner");

    if (animal.group === "mammals") {
      animalCard.classList.add("group-mammal");
    } else if (animal.group === "reptiles") {
      animalCard.classList.add("group-reptile");
    } else {
      animalCard.classList.add("group-bird");
    }

    const animalImageWrapper = document.createElement("div");
    animalImageWrapper.classList.add("animal-image-wrapper");
    const animalImage = document.createElement("img");
    animalImage.classList.add("animal-image");
    const animalName = document.createElement("p");
    animalName.classList.add("animal-name");
    const animalDescription = document.createElement("p");
    animalDescription.classList.add("animal-description");
    const animalFoodWrapper = document.createElement("div");
    animalFoodWrapper.classList.add("animal-food-wrapper");
    const animalGroupWrapper = document.createElement("div");
    animalGroupWrapper.classList.add("animal-group-wrapper");
    const animalGroup = document.createElement("a");
    animalGroup.classList.add("animal-group");

    animalImage.src = animal.image;
    animalImage.alt = `${animal.name}`;
    animalName.textContent = animal.name;
    animalDescription.textContent = animal.description.substring(0, 200) + "... ";
    animalGroup.textContent = `Group: ${animal.group}`;
    animalFoodWrapper.textContent = `Food: `

    animal.food.forEach(foodItem => {
      const foodPill = document.createElement("span");
      foodPill.classList.add("food-pill"),
      foodPill.textContent = foodItem;
      animalFoodWrapper.appendChild(foodPill);
    })

    animalGroup.addEventListener("click", () => {
      if (animal.group === "mammals") {
        animalGroup.href = "/mammals.html";
        animalGroup.target = "_blank";
      } else if (animal.group === "reptiles") {
        animalGroup.href = "/reptiles.html";
        animalGroup.target = "_blank";
      } else {
        animalGroup.href = "/birds.html";
        animalGroup.target = "_blank";
      }
    });

    animalGroupWrapper.appendChild(animalGroup);
    animalCardInner.appendChild(animalGroupWrapper);
    animalCardInner.appendChild(animalName);
    animalCardInner.appendChild(animalImageWrapper);
    animalImageWrapper.appendChild(animalImage);
    animalCardInner.appendChild(animalFoodWrapper);
    animalCardInner.appendChild(animalDescription);

    animalCard.appendChild(animalCardInner);
    animalCardContainer.appendChild(animalCard);
  });
};

createAnimalCard(animals);

// add and remove active
const setActive = () => {
  const allSidebarItems = document.querySelectorAll(".menu-list");
  const allAnimalCards = document.querySelectorAll(".animal-card");
  allSidebarItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const isActive = allAnimalCards[index].classList.contains("active");
      allSidebarItems.forEach((menu) => menu.classList.remove("clicked"));
      allAnimalCards.forEach((card) => card.classList.remove("active"));
      if (!isActive) {
        allAnimalCards[index].classList.add("active");
        item.classList.add("clicked");
      }
    });
  });
};
setActive();

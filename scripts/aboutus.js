function Person(name, aboutText, tab, image, imageName, ageText, age, interest, origin, species, group, foodText, food) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
    this.image = image;
    this.imageName = imageName;
    this.ageText = ageText;
    this.age = age;
    this.interest = interest;
    this.origin = origin;
    this.species = species;
    this.group = group;
    this.foodText = foodText;
    this.food = food;
}

const teamMembers = [
    new Person(
        "Our Team!",
        "Information about the team, about the project, etc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "The Team",
        "assets/images/mammals/mammal-wombat.jpeg",
        "Our team picture",
        "Years on earth:",
        42,
        ["Film", " Animals", " Sudoku"],
        "Earth",
        "Humans (Homo Sapiens)",
        "Mammal",
        "What it eats:",
        ["Pizza"],

    ),
    new Person(
        "Emelie B. Silfverberg",
        "Emelie is uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Emelie",
        "assets/images/mammals/mammal-bilby.jpg",
        "Emelie picture",
        "Years on earth:",
        26,
        ["Film", " Animals", " Sudoku"],
        "Stockholm, Sweden",
        "Human (Homo Sapien)",
        "Mammal",
        "What it eats:",
        [],
    ),
    new Person(
        "May Sunktong",
        "A frontend development student with an educational background. I want my bubble to be clean and not infested with bugs.",
        "May",
        "assets/images/mammals/mammal-bilby.jpg",
        "May picture",
        "Years on earth:",
        32,
        [],
        "",
        "Human (Homo Sapien)",
        "",
        "What it eats:",
        [],
    ),
    new Person(
        "Victor Furustubbe",
        "An aspiring front-end developer with a background in graphic design. I only look for the bare necessities, the simple bare necessities.",
        "Victor",
        "assets/images/mammals/mammal-bilby.jpg",
        "Victor picture",
        "Years on earth:",
        35,
        [],
        "",
        "Human (Homo Sapien)",
        "",
        "What it eats:",
        [],
    ),
    new Person(
        "Alex Jim Hallgren",
        "about My biggest dream is to one day become a full fledged senior fullstack-developerme text",
        "Alex",
        "assets/images/mammals/mammal-bilby.jpg",
        "Alex picture",
        "Years on earth:",
        26,
        [],
        "",
        "Human (Homo Sapien)",
        "",
        "What it eats:",
        [],
    ),
    new Person(
        "Yasmine",
        "about me text",
        "Yasmine",
        "assets/images/mammals/mammal-bilby.jpg",
        "Yasmine",
        "Years on earth:",
        1,
        [],
        "",
        "Human (Homo Sapien)",
        "",
        "What it eats:",
        [],
    ),
];


const createTabs = (teamMembers) => {
    const tabsContainer = document.querySelector(".team-tabs");

    teamMembers.forEach((person) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = person.tab;

        
        tab.addEventListener("click", () => {
            setActiveTab(tab);
            updateTeamContent(person); 
        });

        tabsContainer.appendChild(tab);
    });
};


const setActiveTab = (activeTab) => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    activeTab.classList.add("active");
};


const updateTeamContent = (person) => {
    const teamSection = document.querySelector(".team");

    while (teamSection.firstChild) {
        teamSection.removeChild(teamSection.firstChild);
    }

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-info__container");
    const personImage = document.createElement("img");
    personImage.src = person.image || "../assets/images/default-team.jpg"; // Default image if missing
    personImage.alt = person.imageName || "Team image";
    personImage.classList.add("team__image");

    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("info__container");
        const interestWrapper = document.createElement("div");
        interestWrapper.classList.add("interest__container");

            const interest = document.createElement("p");
            interest.classList.add("info__interest");
            interest.textContent = person.interest;

            const interestText = document.createElement("p");
            interestText.classList.add("info__interest-text");
            interestText.textContent = person.interest;

            interestWrapper.appendChild(interest);
            interestWrapper.appendChild(interestText);

        infoWrapper.appendChild(interestWrapper);

        const age = document.createElement("p");
        age.classList.add("info__age");
        age.textContent = person.age;

        const origin = document.createElement("p")
        origin.classList.add("info__origin");
        origin.textContent = person.origin;

        const food = document.createElement("p")
        food.classList.add("info__food");
        food.textContent = person.food;
        
        infoWrapper.appendChild(age);
        infoWrapper.appendChild(origin);
        infoWrapper.appendChild(food);

    imgContainer.appendChild(personImage);
    imgContainer.appendChild(infoWrapper);

    const memberWrapper = document.createElement("div");
    memberWrapper.classList.add("team__container");

    const speciesWrapper = document.createElement("div");
    speciesWrapper.classList.add("species__container");

    const teamName = document.createElement("h3");
    teamName.classList.add("team__name");
    teamName.textContent = person.name;

    const species = document.createElement("h4");
    species.classList.add("species__text");
    species.textContent = person.species;


    const teamText = document.createElement("p");
    teamText.classList.add("team__text");
    teamText.textContent = person.aboutText;

    memberWrapper.appendChild(teamName);
    memberWrapper.appendChild(speciesWrapper);
        speciesWrapper.appendChild(species);
        speciesWrapper.appendChild(species);
    memberWrapper.appendChild(teamText);

    teamSection.appendChild(imgContainer);
    teamSection.appendChild(memberWrapper);
};

createTabs(teamMembers);

if (teamMembers.length > 0) {
    document.querySelectorAll(".tab")[0].classList.add("active");
    updateTeamContent(teamMembers[0]);
}

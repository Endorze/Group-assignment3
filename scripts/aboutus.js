function Person(name, aboutText, tab, image, imageName, age, interest, origin, species, group, food) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
    this.image = image;
    this.imageName = imageName;
    this.age = age;
    this.interest = interest;
    this.origin = origin;
    this.species = species;
    this.group = group;
    this.food = food;
}

const teamMembers = [
    new Person(
        "Team Capybara",
        "On this page you can read more about each and one of the team members of team Capybara!",
        "The Team",
        "assets/images/mammals/mammal-wombat.jpeg",
        "Our team picture",
        "26+",
        ["Studying",],
        "Earth",
        "Humans (Homo Sapiens)",
        "Mammal",
        "Omnivore",

    ),
    new Person(
        "Emelie B. Silfverberg",
        "Emelie is uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Emelie",
        "assets/images/mammals/mammal-bilby.jpg",
        "Emelie picture",
        26,
        ["Film", " Animals", " Sudoku"],
        "Stockholm, Sweden",
        "Human (Homo Sapien)",
        "Mammal",
        ["Sushi"],
    ),
    new Person(
        "May Sunktong",
        "A frontend development student with an educational background. I want my bubble to be clean and not infested with bugs.",
        "May",
        "assets/images/mammals/mammal-bilby.jpg",
        "May picture",
        32,
        ["Playing Games", " Reading Books",],
        "Thailand",
        "Human (Homo Sapien)",
        "",
        ["Noodles"],
    ),
    new Person(
        "Victor Furustubbe",
        "An aspiring front-end developer with a background in graphic design. I only look for the bare necessities, the simple bare necessities.",
        "Victor",
        "assets/images/mammals/mammal-bilby.jpg",
        "Victor picture",
        35,
        ["Marbles",],
        "Sweden",
        "Human (Homo Sapien)",
        "",
        ["Grilled cheese off the radiator",],
    ),
    new Person(
        "Alex Jim Hallgren",
        "about My biggest dream is to one day become a full fledged senior fullstack-developer.",
        "Alex",
        "assets/images/mammals/mammal-bilby.jpg",
        "Alex picture",
        26,
        ["Gaming", " Coding",],
        "Töreboda, Sweden",
        "Human (Homo Sapien)",
        "",
        ["Sushi" , " Bruschetta", " Fläsk med potatis & löksås",],
    ),
    new Person(
        "Yasmine Borghol",
        "about me text",
        "Yasmine",
        "assets/images/mammals/mammal-bilby.jpg",
        "Yasmine",
        26,
        ["Crochet", " Reading",],
        "Tunisia",
        "Human (Homo Sapien)",
        "",
        ["Pizza"],
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
        interestWrapper.classList.add("info__child");

            const interest = document.createElement("p");
            interest.classList.add("info__sort");
            interest.textContent = "Interests";

            const interestText = document.createElement("p");
            interestText.classList.add("info__content");
            interestText.textContent = person.interest;

            interestWrapper.appendChild(interest);
            interestWrapper.appendChild(interestText);

        const ageWrapper = document.createElement("div");
        ageWrapper.classList.add("info__child");

            const ageText = document.createElement("p");
            ageText.classList.add("info__sort");
            ageText.textContent = "Age";

            const age = document.createElement("p");
            age.classList.add("info__content");
            age.textContent = person.age;

            ageWrapper.appendChild(ageText);
            ageWrapper.appendChild(age);

        const originWrapper = document.createElement("div");
        originWrapper.classList.add("info__child");

            const originText = document.createElement("p");
            originText.classList.add("info__sort");
            originText.textContent = "Origin";

            const origin = document.createElement("p");
            origin.classList.add("info__content");
            origin.textContent = person.origin;

            originWrapper.appendChild(originText);
            originWrapper.appendChild(origin);

        const foodWrapper = document.createElement("div");
        foodWrapper.classList.add("info__child");
    
            const foodText = document.createElement("p");
            foodText.classList.add("info__sort");
            foodText.textContent = "Diet";
    
            const food = document.createElement("p");
            food.classList.add("info__content");
            food.textContent = person.food;

            foodWrapper.appendChild(foodText);
            foodWrapper.appendChild(food);
    

        infoWrapper.appendChild(ageWrapper);
        infoWrapper.appendChild(interestWrapper);
        infoWrapper.appendChild(originWrapper);
        infoWrapper.appendChild(foodWrapper);

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

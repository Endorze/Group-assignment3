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
        "Our Team!",
        "Information about the team, about the project, etc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "The Team",
        "assets/images/mammals/mammal-wombat.jpeg",
        "Our team picture",
        42,
        ["Film", " Animals", " Sudoku"],
        "Earth",
        "Humans (Homo Sapiens)",
        "Mammal",
        ["Pizza"],

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
        "",
    ),
    new Person(
        "May Sunktong",
        "A frontend development student with an educational background. I want my bubble to be clean and not infested with bugs.",
        "May",
        "assets/images/mammals/mammal-bilby.jpg",
        "May picture",
        "",
        "",
        "",
        "Human (Homo Sapien)",
        "",
    ),
    new Person(
        "Victor Furustubbe",
        "An aspiring front-end developer with a background in graphic design. I only look for the bare necessities, the simple bare necessities.",
        "Victor",
        "assets/images/mammals/mammal-bilby.jpg",
        "",
        "",
        "",
        "",
        "Human (Homo Sapien)",
        "",
    ),
    new Person(
        "Alexander",
        "about me text",
        "Alexander",
        "assets/images/mammals/mammal-bilby.jpg",
        "",
        "",
        "",
        "",
        "Human (Homo Sapien)",
        "",
    ),
    new Person(
        "Yasmine",
        "about me text",
        "Yasmine",
        "assets/images/mammals/mammal-bilby.jpg",
        "",
        "",
        "",
        "",
        "Human (Homo Sapien)",
        "",
    ),
];

const infos = ["Interest: ", "Age: ", "Origin: ", "What it eats:"];
let info = info.at(2);




const createTabs = (members) => {
    const tabsContainer = document.querySelector(".team-tabs");

    members.forEach((member) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = member.tab;

        
        tab.addEventListener("click", () => {
            setActiveTab(tab);
            updateTeamContent(member); 
        });

        tabsContainer.appendChild(tab);
    });
};


const setActiveTab = (activeTab) => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    activeTab.classList.add("active");
};


const updateTeamContent = (member) => {
    const teamSection = document.querySelector(".team");

    while (teamSection.firstChild) {
        teamSection.removeChild(teamSection.firstChild);
    }

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-info__container");
    const personImage = document.createElement("img");
    personImage.src = member.image || "../assets/images/default-team.jpg"; // Default image if missing
    personImage.alt = member.imageName || "Team member image";
    personImage.classList.add("team__image");

    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("info__container");
        const interestWrapper = document.createElement("div");
        interestWrapper.classList.add("interest__container");

            const interest = document.createElement("p");
            interest.classList.add("info__interest");
            interest.textContent = info.interest;

            const interestText = document.createElement("p");
            interestText.classList.add("info__interest-text");
            interestText.textContent = member.interest;

            interestWrapper.appendChild(interest);
            interestWrapper.appendChild(interestText);

        infoWrapper.appendChild(interestWrapper);

        const age = document.createElement("p");
        age.classList.add("info__age")
        age.textContent = member.age;

        const origin = document.createElement("p")
        origin.classList.add("info__origin");
        origin.textContent = member.origin;

        const food = document.createElement("p")
        food.classList.add("info__food");
        food.textContent = member.food;

        
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
    teamName.textContent = member.name;

    const species = document.createElement("h4");
    species.classList.add("species__text");
    species.textContent = member.species;

    // const group = document.createElement("button");
    // group.classList.add("button__group");
    // group.onclick


    const teamText = document.createElement("p");
    teamText.classList.add("team__text");
    teamText.textContent = member.aboutText;

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

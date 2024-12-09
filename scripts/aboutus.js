function IntroContent(name, aboutText, tab, image, imageOverlay, imageName, age, interest, origin, species, group, food) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
    this.image = image;
    this.imageOverlay = imageOverlay;
    this.imageName = imageName;
    this.age = age;
    this.interest = interest;
    this.origin = origin;
    this.species = species;
    this.group = group;
    this.food = food;
}

const introPage = [
    new IntroContent(
        "Team Capybara",
        "This is team Capybara! Together, us five frontend developer students built this website about animals. The focus of this assignment was to work on agile team work. On this page you can read more about each and one of the team members of team Capybara!",
        "The Team",
        "assets/images/aboutus/aboutus-group-photo.png",
        "assets/images/aboutus/aboutus-team-overlay.png",
        "Our team picture",
        "26+",
        ["Studying",],
        "Earth",
        "Humans (Homo sapiens sapiens)",
        "Mammal",
        "Omnivore",
    ),
];

function Person(name, aboutText, tab, image, imageOverlay, imageName, age, interest, origin, species, group, food) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
    this.image = image;
    this.imageOverlay = imageOverlay;
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
        "Emelie B. Silfverberg",
        "A frontend developer student with an interest in problem solving, structure, and design. I get an idea, and I do my best to figure out how to make that happen.",
        "Emelie",
        "assets/images/aboutus/aboutus-emelie.png",
        "assets/images/aboutus/aboutus-emelie-overlay.png",
        "Emelie picture",
        26,
        ["Animals"],
        "Stockholm",
        "Human (Homo sapiens sapiens)",
        "Mammal",
        ["Sushi"],
    ),
    new Person(
        "May Sunktong",
        "A frontend development student with an educational background. I want my bubble to be clean and not infested with bugs.",
        "May",
        "assets/images/aboutus/aboutus-may.png",
        "assets/images/aboutus/aboutus-empty-overlay.png",
        "May picture",
        32,
        ["Games", " Books",],
        "Thailand",
        "Human (Homo sapiens sapiens)",
        "",
        ["Noodles"],
    ),
    new Person(
        "Victor Furustubbe",
        "An aspiring front-end developer with a background in graphic design. I only look for the bare necessities, the simple bare necessities.",
        "Victor",
        "assets/images/aboutus/aboutus-victor.png",
        "assets/images/aboutus/aboutus-empty-overlay.png",
        "Victor picture",
        35,
        ["Marbles",],
        "Sweden",
        "Human (Homo sapiens sapiens)",
        "",
        ["Grilled cheese off the radiator",],
    ),
    new Person(
        "Alex Jim Hallgren",
        "My biggest dream is to one day become a full fledged senior fullstack-developer.",
        "Alex",
        "assets/images/aboutus/aboutus-alex.png",
        "assets/images/aboutus/aboutus-empty-overlay.png",
        "Alex picture",
        26,
        ["Gaming", " Coding",],
        "Töreboda, Sweden",
        "Human (Homo sapiens sapiens)",
        "",
        ["Sushi" , " Bruschetta", " Fläsk med potatis & löksås",],
    ),
    new Person(
        "Yasmine Borghol",
        "I'm a front-end development student  and aspiring developer with a background in project-management",
        "Yasmine",
        "assets/images/aboutus/aboutus-yasmine.png",
        "assets/images/aboutus/aboutus-empty-overlay.png",
        "Yasmine",
        26,
        ["Crochet", " Books",],
        "Tunisia",
        "Human (Homo sapiens sapiens)",
        "",
        ["Pizza"],
    ),
];

const createTabs = (teamMembers, introContent) => {
    const tabsContainer = document.querySelector(".team-tabs");
    let lastActiveTab = null;

    teamMembers.sort((a, b) => a.tab.localeCompare(b.tab));

    teamMembers.forEach((person) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = person.tab;

        tab.addEventListener("click", () => {
            if (lastActiveTab === tab) {
                lastActiveTab = null;
                setActiveTab(null);
                updateTeamContent(introContent);
            } else {
                lastActiveTab = tab;
                setActiveTab(tab);
                updateTeamContent(person);
            }
        });
        tabsContainer.appendChild(tab);
    });
};

const setActiveTab = (activeTab) => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    if (activeTab)activeTab.classList.add("active");
};

const updateTeamContent = (content) => {
    const teamSection = document.querySelector(".team");
    while (teamSection.firstChild) {
        teamSection.removeChild(teamSection.firstChild);
    }

    const teamImage = document.createElement("div");
    teamImage.classList.add("img-info__content", "image");

        const imageObject = document.createElement("img");
        imageObject.src = content.image || "../assets/images/default-team.jpg";
        imageObject.alt = content.imageName || "Team image";
        imageObject.classList.add("image__child");

        const overlayImage = document.createElement("img");
        overlayImage.src = content.imageOverlay;
        overlayImage.alt = "image overlay";
        overlayImage.classList.add("image__child", "overlay-image");

    const teamInfo = document.createElement("div");
    teamInfo.classList.add("img-info__content", "info");
        const interestWrapper = document.createElement("div");
        interestWrapper.classList.add("info__child");
            const interestText = document.createElement("p");
            interestText.classList.add("info__input");
            interestText.textContent = content.interest; 
        
            const interest = document.createElement("p");
            interest.classList.add("info__sort");
            interest.textContent = "Interests";            

        const ageWrapper = document.createElement("div");
        ageWrapper.classList.add("info__child");
            const age = document.createElement("p");
            age.classList.add("info__input");
            age.textContent = content.age;  

            const ageText = document.createElement("p");
            ageText.classList.add("info__sort");
            ageText.textContent = "Age";

        const originWrapper = document.createElement("div");
        originWrapper.classList.add("info__child");
            const origin = document.createElement("p");
            origin.classList.add("info__input");
            origin.textContent = content.origin;
            
            const originText = document.createElement("p");
            originText.classList.add("info__sort");
            originText.textContent = "Origin";   

        const foodWrapper = document.createElement("div");
        foodWrapper.classList.add("info__child");
            const food = document.createElement("p");
            food.classList.add("info__input");
            food.textContent = content.food;    
        
            const foodText = document.createElement("p");
            foodText.classList.add("info__sort");
            foodText.textContent = "Diet";

    const teamTitle = document.createElement("div");
    teamTitle.classList.add("text__content", "title");
        const titleName = document.createElement("h1");
        titleName.classList.add("title__name");
        titleName.textContent = content.name;

        const speciesWrapper = document.createElement("div");
        speciesWrapper.classList.add("title__species-container");
            const species = document.createElement("h4");
            species.classList.add("species__text");
            species.textContent = content.species;
            const group = document.createElement("button");
            group.classList.add("species__button");
            group.textContent = "mammal";
            group.addEventListener("click", () => {
                window.location.href = "mammals.html";
            });
        
    const teamParagraph = document.createElement("p");
    teamParagraph.classList.add("text__content", "paragraph");
    teamParagraph.textContent = content.aboutText; 

    teamSection.appendChild(teamImage);
        teamImage.appendChild(overlayImage);
        teamImage.appendChild(imageObject)
    teamSection.appendChild(teamTitle);
        teamTitle.appendChild(titleName);
        teamTitle.appendChild(speciesWrapper);
            speciesWrapper.appendChild(species);
            speciesWrapper.appendChild(group);
    teamSection.appendChild(teamInfo);
        teamInfo.appendChild(ageWrapper);
            ageWrapper.appendChild(age);
            ageWrapper.appendChild(ageText);
        teamInfo.appendChild(interestWrapper);
            interestWrapper.appendChild(interestText);
            interestWrapper.appendChild(interest);
        teamInfo.appendChild(originWrapper);
            originWrapper.appendChild(origin);
            originWrapper.appendChild(originText);
        teamInfo.appendChild(foodWrapper);
            foodWrapper.appendChild(food);
            foodWrapper.appendChild(foodText);
    teamSection.appendChild(teamParagraph);
};

createTabs(teamMembers, introPage[0]);
updateTeamContent(introPage[0]);
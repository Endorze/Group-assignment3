function Person(name, aboutText, tab, image, imageName) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
    this.image = image;
    this.imageName = imageName;
}

const teamMembers = [
    new Person(
        "Our Team!",
        "Information about the team, about the project, etc. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "The Team",
        "assets/images/mammals/mammal-wombat.jpeg",
        "Our team picture"
    ),
    new Person(
        "Emelie B. Silfverberg",
        "Emelie is uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Emelie",
        "assets/images/mammals/mammal-bilby.jpg",
        "Emelie picture"
    ),
];


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

// forEach(person).Array

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
    const personImage = document.createElement("img");
    personImage.src = member.image || "../assets/images/default-team.jpg"; // Default image if missing
    personImage.alt = member.imageName || "Team member image";
    personImage.classList.add("team__image");
    imgContainer.appendChild(personImage);

    const memberWrapper = document.createElement("div");
    memberWrapper.classList.add("team__container");

    const teamName = document.createElement("h3");
    teamName.classList.add("team__name");
    teamName.textContent = member.name;

    const teamText = document.createElement("p");
    teamText.classList.add("team__text");
    teamText.textContent = member.aboutText;

    memberWrapper.appendChild(teamName);
    memberWrapper.appendChild(teamText);

    teamSection.appendChild(imgContainer);
    teamSection.appendChild(memberWrapper);
};

createTabs(teamMembers);

if (teamMembers.length > 0) {
    document.querySelectorAll(".tab")[0].classList.add("active");
    updateTeamContent(teamMembers[0]);
}

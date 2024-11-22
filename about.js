
function Person(name, aboutText, tab) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
}


const teamMembers = [
    new Person(" ", "Read more about what each team member blah blah blah.", "the team"),

    new Person("Emelie B. Silfverberg", 
        "Emelie is uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", "Emelie"),

    new Person("Jordan B. Smith", 
        "Jordan is an expert in backend systems.", "Jordan"),
        
    new Person("Rex T. Lee", "Rex specializes in frontend and UI/UX design.", "Rex"),
];

// testing

let animalTabs = Array.from(document.querySelectorAll(".tab"));


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

const updateTeamContent = (person) => {
    document.querySelector(".tab").textContent = person.tab;
    document.querySelector(".team__title-name").textContent = person.name;
    document.querySelector(".team__about-text").textContent = person.aboutText;
};

createTabs(teamMembers);


if (teamMembers.length > 0) {
    document.querySelectorAll(".tab")[0].classList.add("active");
    updateTeamContent(teamMembers[0]);
}

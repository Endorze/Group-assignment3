
function Person(name, aboutText, tab) {
    this.name = name;
    this.aboutText = aboutText;
    this.tab = tab;
}


const teamMembers = [
    new Person("Emelie B. Silfverberg", 
        "Emelie is uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..", "Emelie"),
    new Person("Jordan B. Smith", "Jordan is an expert in backend systems.", "Jordan"),
    new Person("Alex T. Lee", "Alex specializes in frontend and UI/UX design.", "Alex"),
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

// Function to set active tab
const setActiveTab = (activeTab) => {
    // Remove active class from all tabs
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    // Add active class to the clicked tab
    activeTab.classList.add("active");
};

// Function to update team content dynamically
const updateTeamContent = (person) => {
    document.querySelector(".team__title-name").textContent = person.name;
    document.querySelector(".team__about-text").textContent = person.aboutText;
};

// Initialize the tabs and set default content
createTabs(teamMembers);

// Set the first tab as active and display its content by default
if (teamMembers.length > 0) {
    document.querySelectorAll(".tab")[0].classList.add("active");
    updateTeamContent(teamMembers[0]);
}

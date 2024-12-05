function IntroContent(name, aboutText, tab, image, imageName, age, interest, origin, species, group, food) {
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

const introPage = [
    new IntroContent(
        "Team Capybara",
        "On this page you can read more about each and one of the team members of team Capybara! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
];

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
    // new Person(
    //     "Team Capybara",
    //     "On this page you can read more about each and one of the team members of team Capybara! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    //     "The Team",
    //     "assets/images/mammals/mammal-wombat.jpeg",
    //     "Our team picture",
    //     "26+",
    //     ["Studying",],
    //     "Earth",
    //     "Humans (Homo Sapiens)",
    //     "Mammal",
    //     "Omnivore",

    // ),
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


const createTabs = (teamMembers, introContent) => {
    const tabsContainer = document.querySelector(".team-tabs");
    let lastActiveTab = null; // Track the last clicked tab

    // Create the tabs for team members
    teamMembers.forEach((person) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.textContent = person.tab;

        tab.addEventListener("click", () => {
            if (lastActiveTab === tab) {
                // If the same tab is clicked twice, show intro content
                lastActiveTab = null; // Reset active tab
                setActiveTab(null); // Remove active styling from all tabs
                updateTeamContent(introContent); // Show intro content
            } else {
                // Show the clicked team member's content
                lastActiveTab = tab; // Set the active tab
                setActiveTab(tab);
                updateTeamContent(person);
            }
        });

        tabsContainer.appendChild(tab);
    });
};

// Function to update the active tab styling
const setActiveTab = (activeTab) => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    if (activeTab) activeTab.classList.add("active");
};

// Function to update the team content
const updateTeamContent = (content) => {
    const teamSection = document.querySelector(".team");

    while (teamSection.firstChild) {
        teamSection.removeChild(teamSection.firstChild);
    }

    // Create and append content for the section
    const teamImage = document.createElement("div");
    teamImage.classList.add("img-info__content", "image");
    const imageObject = document.createElement("img");
    imageObject.src = content.image || "../assets/images/default-team.jpg";
    imageObject.alt = content.imageName || "Team image";
    imageObject.classList.add("image__child");
    teamImage.appendChild(imageObject);

    const teamInfo = document.createElement("div");
    teamInfo.classList.add("img-info__content", "info");
    const ageWrapper = document.createElement("div");
    ageWrapper.classList.add("info__child");
    const ageText = document.createElement("p");
    ageText.classList.add("info__sort");
    ageText.textContent = "Age";
    const age = document.createElement("p");
    age.classList.add("info__input");
    age.textContent = content.age || "N/A";
    ageWrapper.appendChild(ageText);
    ageWrapper.appendChild(age);
    teamInfo.appendChild(ageWrapper);

    const teamTitle = document.createElement("div");
    teamTitle.classList.add("text__content", "title");
    const titleName = document.createElement("h3");
    titleName.classList.add("title__name");
    titleName.textContent = content.name;
    teamTitle.appendChild(titleName);

    const teamParagraph = document.createElement("p");
    teamParagraph.classList.add("text__content", "paragraph");
    teamParagraph.textContent = content.aboutText;

    teamSection.appendChild(teamImage);
    teamSection.appendChild(teamTitle);
    teamSection.appendChild(teamInfo);
    teamSection.appendChild(teamParagraph);
};

// Call the function to create tabs and set up initial state
createTabs(teamMembers, introPage[0]);

// Initialize with intro content
updateTeamContent(introPage[0]);

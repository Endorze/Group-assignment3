
const zooBirds = [
    {
        name: "Cassowary",
        lifespan: "20 years",
        group: "bird",
        food: ["plant matter like fruit", "insects", "small animals like mice and lizards"],
        description:
            "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
        length: "1.7m",
        weight: "44kg",
        found: ["Queensland"],
        image: "./assets/images/birds-html-images/cassowary.png",
        videoTag: "cassowary.mp4",
        sound: "cassowary.mp3",
        id: "cassowary"
    },
    {
        name: "Kookaburra",
        lifespan: "20 years",
        group: "bird",
        food: ["insects", "small animals including snakes, frogs, and lizards"],
        description:
            "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
        length: "43cm",
        weight: "300g",
        found: ["Australia wide"],
        image: "./assets/images/birds-html-images/kookaburra.png",
        videoTag: "kookaburra.mp4",
        sound: "kookaburra.mp3",
        id: "kookaburra"
    },
    {
        name: "Yellow Tailed Black Cockatoo",
        lifespan: "41 years",
        group: "bird",
        food: ["fruit", "seeds", "plant material"],
        description:
            "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size.",
        length: "65cm",
        weight: "900g",
        found: ["Southeastern Australia"],
        image: "./assets/images/birds-html-images/cockatoo.png",
        videoTag: "yellowcockatoo.mp4",
        sound: "yellowblack.mp3",
        id: "yellowtailedblackcockatoo"
    },
    {
        name: "Seagull",
        lifespan: "F-ing forever",
        group: "Devilspawn",
        food: ["Fries", "Dreams", "Hopes"],
        description:
            "Behold the Devilspawn Seagull: A Winged Menace In the shadowed corners of seaside towns and urban jungles alike, a sinister presence lurks—the Devilspawn Seagull.This unholy creature, a mutation of chaos and avarice, thrives not on the usual spoils of fish and crumbs but on something far more sinister: hopes, dreams, and...McDonald's fries.",
        length: "1.4m-10.5m",
        weight: "About 500kg of fries",
        found: ["Everywhere, but preferably close to gas-stations, harbors and Mcdonalds, and perhaps even IN THE WALLS :("],
        image: "./assets/images/birds-html-images/seagull.png",
        videoTag: "seagull.mp4",
        sound: "seagull.mp3",
        id: "seagull"
    },
    {
        name: "Flamingo",
        lifespan: "10-20 years",
        group: "bird",
        food: ["seeds", "fruits", "flowers", "insects"],
        description:
            "The Emu is Australia's largest bird and the second-largest bird in the world, standing up to 1.9 meters tall. Though flightless, it has powerful legs that allow it to run at speeds of up to 50 km/h. Emus are highly adaptive and found in various habitats across Australia. They are curious birds and have a diet that varies widely, including plants, seeds, and insects. Emus are also known for their unique breeding behavior, where males incubate the eggs and care for the chicks.",
        length: "1.3-1.9m",
        weight: "30-55kg",
        found: ["Mainland Australia"],
        image: "./assets/images/birds-html-images/flamingo.png",
        videoTag: "flamingo.mp4",
        sound: "flamingo.mp3",
        id: "flamingo",
    },
    {
        name: "Colibri",
        lifespan: "7 years",
        group: "bird",
        food: ["grass seeds", "insects"],
        description:
            "The Gouldian Finch is a brightly colored and striking bird, often called the 'rainbow finch' due to its vibrant plumage in shades of red, yellow, green, blue, and black. Native to the savannahs of northern Australia, these finches are highly social and live in flocks. They primarily feed on grass seeds but will also consume insects during the breeding season. Unfortunately, habitat loss and other factors have made them a threatened species, and conservation efforts are underway to protect their populations.",
        length: "12-14cm",
        weight: "15g",
        found: ["Northern Australia"],
        image: "./assets/images/birds-html-images/colibri.png",
        videoTag: "colibri.mp4",
        sound: "hummingbird.mp3",
        id: "colibri"

    },
    {
        name: "Pigeon",
        lifespan: "7 years",
        group: "bird",
        food: ["grass seeds", "insects"],
        description:
            "The Gouldian Finch is a brightly colored and striking bird, often called the 'rainbow finch' due to its vibrant plumage in shades of red, yellow, green, blue, and black. Native to the savannahs of northern Australia, these finches are highly social and live in flocks. They primarily feed on grass seeds but will also consume insects during the breeding season. Unfortunately, habitat loss and other factors have made them a threatened species, and conservation efforts are underway to protect their populations.",
        length: "12-14cm",
        weight: "15g",
        found: ["Northern Australia"],
        image: "./assets/images/birds-html-images/pigeon.png",
        videoTag: "pigeon.mp4",
        sound: "pigeon.mp3",
        id: "pigeon"
    },
    {
        name: "Mordekai",
        lifespan: "7 years",
        group: "bird",
        food: ["grass seeds", "insects"],
        description:
            "The Gouldian Finch is a brightly colored and striking bird, often called the 'rainbow finch' due to its vibrant plumage in shades of red, yellow, green, blue, and black. Native to the savannahs of northern Australia, these finches are highly social and live in flocks. They primarily feed on grass seeds but will also consume insects during the breeding season. Unfortunately, habitat loss and other factors have made them a threatened species, and conservation efforts are underway to protect their populations.",
        length: "12-14cm",
        weight: "15g",
        found: ["Northern Australia"],
        image: "./assets/images/birds-html-images/bluejay.png",
        videoTag: "bluejay.mp4",
        sound: "pigeon.mp3",
        id: "bluejay"
    },
    {
        name: "Resplendant Quetzal",
        lifespan: "7 years",
        group: "bird",
        food: ["grass seeds", "insects"],
        description:
            "The Gouldian Finch is a brightly colored and striking bird, often called the 'rainbow finch' due to its vibrant plumage in shades of red, yellow, green, blue, and black. Native to the savannahs of northern Australia, these finches are highly social and live in flocks. They primarily feed on grass seeds but will also consume insects during the breeding season. Unfortunately, habitat loss and other factors have made them a threatened species, and conservation efforts are underway to protect their populations.",
        length: "12-14cm",
        weight: "15g",
        found: ["Northern Australia"],
        image: "./assets/images/birds-html-images/resplendant.png",
        videoTag: "resplendantquetzal.mp4",
        sound: "pigeon.mp3",
        id: "resplendantquetzal"
    },
]

const setSideBarContent = (className) => {
    const selectedSidebar = document.querySelector(`${className}`);
    if (!selectedSidebar) {
        return;
    }

    zooBirds.forEach((bird) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("bird-button-text-container");

        newDiv.id = `${bird.id}`

        const birdImage = document.createElement("img");
        birdImage.src = bird.image;
        birdImage.alt = bird.name;
        birdImage.id = bird.id;
        newDiv.appendChild(birdImage);

        const birdName = document.createElement("p");
        birdName.textContent = bird.name;
        newDiv.appendChild(birdName);

        selectedSidebar.appendChild(newDiv);
    })
}

const setPhoneSideBarContent = (className) => {
    const selectedSidebar = document.getElementById(`${className}`);
    if (!selectedSidebar) {
        return;
    }

    zooBirds.forEach((bird) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("bird-button-text-container");

        newDiv.id = `${bird.id}`

        const birdImage = document.createElement("img");
        birdImage.src = bird.image;
        birdImage.alt = bird.name;
        birdImage.id = bird.id;
        newDiv.appendChild(birdImage);

        const birdName = document.createElement("p");
        birdName.textContent = bird.name;
        newDiv.appendChild(birdName);

        selectedSidebar.appendChild(newDiv);
    })
}

setSideBarContent(".bird-buttons");
setPhoneSideBarContent("bird-buttons")


const birdInfoContainer = document.querySelector(".bird-information-container")
birdInfoContainer.style.display = "none"

const birdAudio = document.getElementById("bird-audio");
const playAudioButton = document.getElementById("play-audio-btn");

const setShortBirdInformation = (birdId) => {
    const readMoreButton = document.getElementById("read-more-btn")
    const bird = zooBirds.find(bird => bird.id == birdId)
    if (!bird) {
        console.error(`Bird with id "${birdId}" not found.`);
        return;
    }

    document.querySelector(".bird-name").textContent = "Name: " + bird.name;
    document.querySelector(".bird-name").id = bird.id;
    document.getElementById("bird-image").src = bird.image;
    document.querySelector(".bird-desc").textContent = bird.description.substring(0, 200) + "...";
    document.querySelector(".bird-group").textContent = `Group: ${bird.group}`;
    document.querySelector(".bird-food").textContent = `Food: ${bird.food.join(", ")}`;
    document.querySelector(".bird-length").textContent = ""
    document.querySelector(".bird-weight").textContent = "";
    document.querySelector(".bird-found").textContent = ""


    const birdVideo = document.getElementById("bird-video");
    if (birdVideo) {
        birdVideo.src = `./assets/bird-videos/${bird.videoTag}`;
        birdVideo.load();
        birdInfoContainer.style.display = null
        readMoreButton.style.display = "block";
    }
    birdAudio.src = `./assets/bird-sounds/${bird.sound}`;
    birdAudio.load();
};


const setBirdInformation = (birdId) => {

    const bird = zooBirds.find(bird => bird.id == birdId)
    if (!bird) {
        console.error(`Bird with id "${birdId}" not found.`);
        return;
    }

    document.querySelector(".bird-name").textContent = "Name: " + bird.name;
    document.querySelector(".bird-name").id = bird.id;
    document.querySelector(".bird-lifespan").textContent = `Lifespan: ${bird.lifespan}`;
    document.querySelector(".bird-group").textContent = `Group: ${bird.group}`;
    document.querySelector(".bird-food").textContent = `Food: ${bird.food.join(", ")}`;
    document.querySelector(".bird-desc").textContent = bird.description;
    document.querySelector(".bird-length").textContent = `Length: ${bird.length}`;
    document.querySelector(".bird-weight").textContent = `Weight: ${bird.weight}`;
    document.querySelector(".bird-found").textContent = `Found in: ${bird.found.join(", ")}`;

    const birdVideo = document.getElementById("bird-video")
    if (birdVideo) {
        birdVideo.src = `./assets/bird-videos/${bird.videoTag}`
    }
    birdAudio.src = `./assets/bird-sounds/${bird.sound}`;
    birdAudio.load();
};

playAudioButton.addEventListener("click", () => {
    birdAudio.currentTime = 0;
    birdAudio.play();

}
);

document.querySelectorAll(".bird-button-text-container img").forEach((img) => {
    const birdId = img.id;
    img.addEventListener("click", () => {
        setShortBirdInformation(birdId);
        document.getElementById("navigate-birds").scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("read-more-btn").addEventListener("click", () => {
    const activeBirdId = document.querySelector(".bird-name").id
    setBirdInformation(activeBirdId);
});


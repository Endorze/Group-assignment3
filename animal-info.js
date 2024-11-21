const animals = {
  mammals: {
    echidna: {
      lifespan: 50,
      group: ["mammal"],
      food: ["ants", "termites", "beetle larvae", "worms"],
      description:
        "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
      length: 76,
      weight: 10000,
      found: ["Throughout Australia"],
    },
    tasmanianDevil: {
      lifespan: 5,
      group: ["mammal"],
      food: ["meat from other animals such as wallabies and wombats"],
      description:
        "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
      length: 70,
      weight: 10000,
      found: ["Tasmania"],
    },
    quokka: {
      lifespan: 10,
      group: ["mammal"],
      food: ["shrubs", "grasses"],
      description:
        "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
      length: 50,
      weight: 3000,
      found: ["Rottnest Island", "Mainland Western Australia"],
    },
    koala: {
      lifespan: 15,
      group: ["mammal"],
      food: ["eucalyptus leaves"],
      description:
        "Koalas are arboreal marsupials native to Australia, known for their thick, woolly fur and large, spoon-shaped noses. They primarily inhabit eucalyptus forests and are highly specialized feeders, relying almost exclusively on eucalyptus leaves for their diet. Despite their cuddly appearance, koalas are solitary animals and spend most of their time resting to conserve energy, as their diet is low in nutrients. They are often called 'koala bears,' but they are not bears at all. Koalas face threats from habitat destruction, disease, and climate change.",
      length: 80,
      weight: 12000,
      found: ["Eastern Australia", "Southeastern Australia"],
    },
    wombat: {
      lifespan: 15,
      group: ["mammal"],
      food: ["grasses", "roots", "bark"],
      description:
        "Wombats are stout, burrowing marsupials with powerful claws and a unique backward-facing pouch that protects their young while they dig. These nocturnal herbivores have a distinctive cube-shaped poop, which helps mark their territory. Wombats are built like tanks and can use their tough rear ends to block predators from entering their burrows. They are found in forested, mountainous, and heathland areas of southeastern Australia.",
      length: 100,
      weight: 33000,
      found: ["Southeastern Australia", "Tasmania"],
    },
    bilby: {
      lifespan: 7,
      group: ["mammal"],
      food: ["insects", "seeds", "fruits", "fungi"],
      description:
        "The Bilby, sometimes called the 'Easter Bilby,' is a nocturnal marsupial with large ears and a long, pointed snout. Its ears help with thermoregulation in its hot desert habitat. Bilbies are excellent diggers and create spiral burrows for shelter. They play a vital ecological role as they turn over soil while foraging, which improves soil health. Bilbies are under threat from habitat destruction and introduced predators like foxes and cats.",
      length: 45,
      weight: 2500,
      found: ["Central Australia"],
    },
  },
  reptiles: {
    frillNeckedLizard: {
      lifespan: 20,
      group: ["reptile"],
      food: ["small insects", "spiders"],
      description:
        "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
      length: 90,
      weight: 1000,
      found: ["Northern Australia"],
    },
    hawksbillTurtle: {
      lifespan: 50,
      group: ["reptile"],
      food: ["sponges", "jellyfish", "sea plants"],
      description:
        "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird's beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
      length: 80,
      weight: 50000,
      found: [
        "Tropical coasts of Queensland",
        "Northern Territory",
        "Western Australia",
      ],
    },
    perentie: {
      lifespan: 20,
      group: ["reptile"],
      food: ["kangaroos", "rabbits", "lizards", "birds"],
      description:
        "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
      length: 250,
      weight: 20000,
      found: ["Deserts"],
    },
    inlandTaipan: {
      lifespan: 15,
      group: ["reptile"],
      food: ["small mammals", "birds"],
      description:
        "The Inland Taipan, also known as the 'fierce snake,' is regarded as the most venomous snake in the world. Despite its potency, it is reclusive and rarely encountered by humans, preferring to inhabit the remote semi-arid regions of central Australia. Its venom is highly specialized for subduing warm-blooded prey like rodents and contains potent neurotoxins and blood coagulants. The snake's body is olive-brown in color, which changes seasonally, becoming darker in winter to absorb more heat. While dangerous, it is non-aggressive and will avoid confrontation if possible.",
      length: 250,
      weight: 300,
      found: ["Central Australia", "Eastern Australia"],
    },
    thornyDevil: {
      lifespan: 17,
      group: ["reptile"],
      food: ["ants"],
      description:
        "The Thorny Devil, also known as Moloch horridus, is a small, spiny lizard endemic to the arid regions of Australia. Covered in sharp spines, it has a unique and intimidating appearance, which helps deter predators. It also has a false head on the back of its neck to confuse attackers. Thorny devils primarily feed on ants and can consume thousands in one day. They have a fascinating ability to collect water through grooves in their skin, channeling moisture from rain or dew to their mouths.",
      length: 20,
      weight: 95,
      found: ["Central Australia", "Western Australia"],
    },
    saltwaterCrocodile: {
      lifespan: 70,
      group: ["reptile"],
      food: ["fish", "birds", "mammals", "other reptiles"],
      description:
        "The Saltwater Crocodile is the largest living reptile in the world, reaching lengths of up to 7 meters and weighing over 1,000 kg. Found in brackish and freshwater regions, this apex predator has a powerful bite and an ambush-style hunting method. It preys on a wide variety of animals, including fish, birds, and mammals. While potentially dangerous to humans, they are a key part of their ecosystems. They have armored scales and are known for their incredible strength and longevity.",
      length: 600,
      weight: 850000,
      found: ["Northern Australia", "coastal rivers", "estuaries"],
    },
  },
  birds: {
    cassowary: {
      lifespan: 20,
      group: ["bird"],
      food: [
        "plant matter like fruit",
        "insects",
        "small animals like mice and lizards",
      ],
      description:
        "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
      length: 170,
      weight: 44000,
      found: ["Queensland"],
    },
    kookaburra: {
      lifespan: 20,
      group: ["bird"],
      food: ["insects", "small animals including snakes, frogs, and lizards"],
      description:
        "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
      length: 43,
      weight: 300,
      found: ["Australia wide"],
    },
    yellowTailedBlackCockatoo: {
      lifespan: 41,
      group: ["bird"],
      food: ["fruit", "seeds", "plant material"],
      description:
        "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula. Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
      length: 65,
      weight: 900,
      found: ["Southeastern Australia"],
    },
    superbLyrebird: {
      lifespan: 15,
      group: ["bird"],
      food: ["insects", "spiders", "worms"],
      description:
        "The Superb Lyrebird is one of Australia’s most iconic birds, known for its extraordinary ability to mimic natural and artificial sounds, including other bird calls, camera shutters, and chainsaws. Males are famous for their spectacular courtship displays, where they fan out their lyre-shaped tail feathers and perform complex songs. Found in dense forests, these ground-dwelling birds are shy and prefer to forage among leaf litter for invertebrates. Their incredible vocal abilities make them one of the most fascinating birds in the world.",
      length: 90,
      weight: 1000,
      found: ["Southeastern Australia"],
    },
    emu: {
      lifespan: 15,
      group: ["bird"],
      food: ["seeds", "fruits", "flowers", "insects"],
      description:
        "The Emu is Australia's largest bird and the second-largest bird in the world, standing up to 1.9 meters tall. Though flightless, it has powerful legs that allow it to run at speeds of up to 50 km/h. Emus are highly adaptive and found in various habitats across Australia. They are curious birds and have a diet that varies widely, including plants, seeds, and insects. Emus are also known for their unique breeding behavior, where males incubate the eggs and care for the chicks.",
      length: 170,
      weight: 55000,
      found: ["Mainland Australia"],
    },
    gouldianFinch: {
      lifespan: 7,
      group: ["bird"],
      food: ["grass seeds", "insects"],
      description:
        "The Gouldian Finch is a brightly colored and striking bird, often called the 'rainbow finch' due to its vibrant plumage in shades of red, yellow, green, blue, and black. Native to the savannahs of northern Australia, these finches are highly social and live in flocks. They primarily feed on grass seeds but will also consume insects during the breeding season. Unfortunately, habitat loss and other factors have made them a threatened species, and conservation efforts are underway to protect their populations.",
      length: 14,
      weight: 15,
      found: ["Northern Australia"],
    },
  },
};

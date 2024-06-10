/* jshint esversion: 6 */
$(document).ready(function () {

    
    //array
    const games = [{
            id: 1,
            name: "Hades",
            price: "$35.99",
            header: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
            description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre. <br><br>  BATTLE OUT OF HELL. <br><br>  As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt.<br> <br> UNLEASH THE FURY OF OLYMPUS. <br><br>  The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go.",
            genre: "Roguelike",
            platform: "PC, Playstation, Switch, Xbox",
            image1: "../imgs/hades-game-1.webp",
            image2: "../imgs/hades-game-2.webp",
        },
        {
            id: 2,
            name: "The Binding of Isaac",
            price: "$61.46",
            header: "When Isaac's mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.",
            description: "Gameplay. <br><br> The Binding of Isaac is a randomly generated action RPG shooter with heavy Rogue-like elements.<br><br> Following Isaac on his journey players will find bizarre treasures that change Isaac's form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety. <br><br>About the Binding Of Isaac: Rebirth. <br><br>The Binding of Isaac: Rebirth is the ultimate of remakes with an all-new highly efficient game engine (expect 60fps on most PCs), all-new hand-drawn pixel style artwork, highly polished visual effects, all-new soundtrack and audio by the the sexy Ridiculon duo Matthias Bossi + Jon Evans. <br><br>Oh yeah, and hundreds upon hundreds of designs, redesigns and re-tuned enhancements by series creator, Edmund McMillen.<br><br> Did we mention the poop?",
            genre: "Roguelike",
            platform: "PC, Playstation, Switch, Xbox",
            image1: "../imgs/tboi1.jpg",
            image2: "../imgs/tboi2.jpg",
        },
        {
            id: 3,
            name: "Warframe",
            price: "$0.00",
            header: "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game",
            description: "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds in this thrilling, genre-defining third-person combat experience. <br><br>BECOME A POWERFUL WARRIOR.<br><br> Enter your Warframe: a bio-metal suit of untold power. Unleash its Abilities and wield a vast array of devastating weaponry to effortlessly annihilate hordes of enemies on sight. And when the slaughter is over, you can earn or instantly unlock 40+ different Warframes - each with a unique suite of powers - to re-experience the mayhem any way you want.",
            genre: "Action, MMO",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/warframe1.png",
            image2: "../imgs/warframe2.png",
        },
        {
            id: 4,
            name: "Dragon Age Inquisition",
            price: "$49.95",
            header: "When the sky opens up and rains down chaos, the world needs heroes. Become the savior of Thedas in Dragon Age: Inquisition - Game of the Year Edition. You are the Inquisitor, tasked with saving the world from itself.",
            description: "Enthralling, choice-driven narrative — You're not just deciding who to send into which battle in Inquisition; you're making important decisions that shape the future of Thedas. Each choice carries weight, and your actions can lead to a variety of outcomes. <br><br>Inquisition is a highly personalized journey, where one wrong move could set in motion a series of events that alters the physical aspects of the world itself, making your Thedas — and your heroes — feel truly unique. <br><br>A massive world to discover — The world of Thedas has never been bigger or more detailed; it's wide open and ripe for exploration.<br><br> Discover enemy keeps ripe for the taking. Unearth hidden caves filled with lurking creatures. Thedas is vast and dangerous, but uncovering its secrets can spell the difference between victory and defeat. <br><br>Intense, strategic combat — There's no wrong way to play Dragon Age: Inquisition...except for the way that gets you killed. Fortunately, the optional strategic view gives you a god's-eye vantage on battle. Time stops while you plan in this view, but if that's not your style, you can just barrel ahead, crossbows blazing.",
            genre: "RPG, Adventure",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/dai1.jpg",
            image2: "../imgs/dai2.jpg",
        },
        {
            id: 5,
            name: "Deadcells",
            price: "$29.99",
            header: "Dead Cells is a roguelite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you're able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",
            description: "Dead Cells is a roguelite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you're able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.<br><br> Dead Cells puts you in control of a failed alchemic experiment trying to figure out what's happening on a sprawling, ever-changing and seemingly cursed Island. Immortal but crippled, your last resort is to take over bodies in order to move, explore… and fight. While you may well be immortal, the corpses you possess are not.<br><br> Each time your host is destroyed, you will be sent back to the dungeon to find yourself a new one and start again... <br><br>Experience a Roguevania, mixing an interconnected world, branching paths and unlockable skills with the constant adrenaline-pumping threat of permadeath. <br><br>No checkpoints.<br><br> You either vanquish the final boss in one go or you try again. However, you keep some of your progress for successive runs new paths you've unlocked, access to new levels, mutations, abilities and weapons.",
            genre: "Roguelike",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/deadcells1.jpg",
            image2: "../imgs/deadcells2.jpg",
        },
        {
            id: 6,
            name: "Age of Empires II",
            price: "$29.40",
            header: "Age of Empires II: Definitive Edition features “The Last Khans” with 3 new campaigns and 4 new Civilizations. Frequent updates include events, additional content, new game modes, and enhanced features with the recent addition of Co-Op mode!",
            description: "Age of Empires II: Definitive Edition celebrates the 20th anniversary of one of the most popular strategy games ever, now with stunning 4K Ultra HD graphics, and a fully remastered soundtrack. <br><br>Age of Empires II: DE features “The Last Khans” with 3 new campaigns and 4 new Civilizations. Frequent updates include events, additional content, new game modes, and enhanced features with the recent addition of Co-Op mode! <br><br>Explore all the original Campaigns and the best-selling expansions like never before. With over 200 hours of gameplay and 1,000 years of human history, improved experiences await. Head online to challenge other players in your quest for world domination with 35 different Civilizations. <br><br>You can also experience new Civilizations and Campaigns with the Lords of the West DLC! <br><br>Recent updates include a Battle Royale game mode, ongoing support for the Scenario Editor, Quick Play for easy social games, enhancements to the game UI, and more! Choose your path to greatness with an eye-catching and engaging remaster to one of the most beloved strategy games of all time.",
            genre: "Strategy",
            platform: "PC, Xbox",
            image1: "../imgs/aoe1.jpg",
            image2: "../imgs/aoe2.webp",
        },
        {
            id: 7,
            name: "Stardew Valley",
            price: "$17.99",
            header: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
            description: "Turn your overgrown field into a lively farm! Raise animals, grow crops, start an orchard, craft useful machines, and more! <br><br>You'll have plenty of space to create the farm of your dreams. <br><br>8 Player Farming! Invite 1-7 players to join you in the valley online! <br><br>Players can work together to build a thriving farm, share resources, and improve the local community. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience. Improve your skills over time. <br><br> As you make your way from a struggling greenhorn to a master farmer, you'll level up in 5 different areas: farming, mining, combat, fishing, and foraging. As you progress, you'll learn new cooking and crafting recipes, unlock new areas to explore, and customize your skills by choosing from a variety of professions.<br><br> Become part of the local community. With over 30 unique characters living in Stardew Valley, you won't have a problem finding new friends! Each person has their own daily schedule, birthday, unique mini-cutscenes, and new things to say throughout the week and year. As you make friends with them, they will open up to you, ask you for help with their personal troubles, or tell you their secrets! Take part in seasonal festivals such as the luau, haunted maze, and feast of the winter star. <br><br>Explore a vast, mysterious cave. As you travel deeper underground, you'll encounter new and dangerous monsters, powerful weapons, new environments, valuable gemstones, raw materials for crafting and upgrading tools, and mysteries to be uncovered. Breathe new life into the valley. <br><br>Since JojaMart opened, the old way of life in Stardew Valley has changed. Much of the town's infrastructure has fallen into disrepair. Help restore Stardew Valley to it's former glory by repairing the old community center, or take the alternate route and join forces with Joja Corporation. <br><br>Court and marry a partner to share your life on the farm with.",
            genre: "Simulation",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/stardew1.jpg",
            image2: "../imgs/stardew2.webp",
        },
        {
            id: 8,
            name: "Kingdom Two Crowns",
            price: "$28.99",
            header: "In Kingdom Two Crowns, players must work in the brand-new solo or co-op campaign mode to build their kingdom and secure it from the threat of the Greed. Experience new technology, units, enemies, mounts, and secrets in the next evolution of the award-winning micro strategy franchise!",
            description: "Kingdom Two Crowns is a side-scrolling micro strategy game with a minimalist feel wrapped in a beautiful, modern pixel art aesthetic. <br><br>Play the role of a monarch atop their steed and recruit loyal subjects, build your kingdom and protect it from the greedy creatures looking to steal your coins and crown. <br><br>In the brand-new campaign mode, monarchs must now work to build a kingdom that stands over time until finding a way to defeat the Greed for good. Explore the environments to discover new mounts and secrets hidden in the deep. But you don't have to rule alone!<br><br> Introducing a cooperative play experience that is totally unique to Kingdom Two Crowns, monarchs can now choose between a classic solo experience or seek the assistance of a friend, working together locally or online, dropping in or out at will.",
            genre: "Simulation, Survival",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/twocrowns1.webp",
            image2: "../imgs/twocrowns2.webp",
        },
        {
            id: 9,
            name: "Graveyard Keeper",
            price: "$28.99",
            header: "Build and manage a medieval graveyard while facing ethical dilemmas and making questionable decisions. Welcome to Graveyard Keeper, the most inaccurate medieval cemetery sim of the year.",
            description: "Graveyard Keeper is the most inaccurate medieval cemetery management sim of all time. <br><br>Build and manage your own graveyard, and expand into other ventures, while finding shortcuts to cut costs. Use all the resources you can find. After all, this is a game about the spirit of capitalism, and doing whatever it takes to build a thriving business.<br><br> And it's also a love story.<br><br> Face ethical dilemmas. Do you really want to spend money on that proper burger meat for the witch-burning festival, when you have so many resources lying around? Gather valuable materials and craft new items.<br><br> Expand your Graveyard into a thriving business. Help yourself -- gather the valuable resources scattered across the surrounding areas, and explore what this land has to offer. Quests and corpses. These dead bodies don't need all those organs, do they? Why not grind them up and sell them to the local butcher? Or you can go on proper quests, you roleplayer.<br><br> Explore mysterious dungeons. No medieval game would be complete without those! Take a trip into the unknown, and find discover new alchemy ingredients -- which may or may not poison a whole bunch of nearby villagers.",
            genre: "Simulation",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/graveyard1.jpg",
            image2: "../imgs/graveyard2.jpg",
        },
        {
            id: 10,
            name: "Until Dawn",
            price: "$34.95",
            header: "Until Dawn invites you to relive the nightmare, and immerse yourself in a gripping slasher horror where every decision can make the difference between life and death.",
            description: "When eight friends return to the isolated lodge where two of their group vanished a year prior, fear tightens its icy grip, and their mountain retreat descends into a nightmare with no escape. Face your fears and determine who survives Until Dawn in this seminal horror classic. <br><br>Immerse yourself in a gripping slasher horror rebuilt from the ground up with stunning visuals in Unreal Engine 5. Enhanced by movie-like cinematography, refined gameplay mechanics and more, venture into a thrilling exploration of an isolated mountain where nothing is as it seems. <br><br>Create your own gripping tale as you control a group of unique characters portrayed by an all-star cast, including Hayden Panettiere, Brett Dalton, and more, and decide their fate through your choices. Through dynamic animations and nuanced facial-capture performances, learn what makes each character tick, and who among the group has what it takes to survive.",
            genre: "Horror, Adventure",
            platform: "Playstation",
            image1: "../imgs/untildawn1.jpg",
            image2: "../imgs/untildawn2.jpg",
        },
        {
            id: 11,
            name: "Celeste",
            price: "$28.99",
            header: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain.",
            description: "A narrative-driven, single-player adventure like mom used to make, with a charming cast of characters and a touching story of self-discovery. A massive mountain teeming with 700+ screens of hardcore platforming challenges and devious secrets.<br><br> Brutal B-side chapters to unlock, built for only the bravest mountaineers. <br><br>IGF “Excellence in Audio” finalist, with over 2 hours of original music led by dazzling live piano and catchy synth beats.<br><br> Pie.<br><br> The controls are simple and accessible - simply jump, air-dash, and climb - but with layers of expressive depth to master, where every death is a lesson. Lightning-fast respawns keep you climbing as you uncover the mysteries of the mountain and brave its many perils. <br><br>This is it, Madeline. Just breathe. You can do this.",
            genre: "Platformer",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/celeste1.jpg",
            image2: "../imgs/celeste2.webp",
        },
        {
            id: 12,
            name: "The Witness",
            price: "$47.99",
            header: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you.",
            description: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you. You don't remember who you are, and you don't remember how you got here, but there's one thing you can do: explore the island in hope of discovering clues, regaining your memory, and somehow finding your way home. <br><br> The Witness is a single-player game in an open world with dozens of locations to explore and over 500 puzzles. This game respects you as an intelligent player and it treats your time as precious. <br><br>There's no filler; each of those puzzles brings its own new idea into the mix. So, this is a game full of ideas.",
            genre: "Adventure, Puzzle",
            platform: "PC, Playstation, Xbox",
            image1: "../imgs/witness1.jpg",
            image2: "../imgs/witness2.jpg",
        },
        {
            id: 13,
            name: "Breath of the Wild",
            price: "$69.99",
            header: "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
            description: "Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations, then set your own path to get there and plunge into the wilderness. <br><br> Along the way, you'll battle towering enemies, hunt wild beasts and gather ingredients for the food and elixirs you'll need to sustain you on your journey. More than 100 Shrines of Trials to discover and explore - Shrines dot the landscape, waiting to be discovered in any order you want. Search for them in various ways, and solve a variety of puzzles inside. Work your way through the traps and devices inside to earn special items and other rewards that will help you on your adventure. <br><br>Be prepared and properly equipped - With an entire world waiting to be explored, you'll need a variety of outfits and gear to reach every corner. <br><br> You may need to bundle up with warmer clothes or change into something better suited to the desert heat. Some clothing even has special effects that, for example, can make you faster and stealthier.",
            genre: "Action, Adventure, RPG",
            platform: "Switch",
            image1: "../imgs/botw1.jpg",
            image2: "../imgs/botw2.jpg",
        },
        {
            id: 14,
            name: "Hue",
            price: "$17.99",
            header: "Hue is a vibrant, award-winning puzzle-adventure, where you alter the world by changing its background colour.",
            description: "You explore a dangerous grey land, unearthing coloured fragments on a journey to find your missing mother. As obstacles match the background, they disappear, creating new and exciting puzzles - full of peril, mystery… and colours unseen. <br><br> Unique colour-matching mechanic, offering a new twist on the classic adventure game. <br><br>A heartfelt story that touches on themes of love, loss, existence and remorse. <br><br> A world full of lively characters to talk to, each with their own personality and story. <br><br>Stark silhouetted art style with bright, bold colours",
            genre: "Puzzle, Platformer",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/hue1.jpg",
            image2: "../imgs/hue2.webp",
        },
        {
            id: 15,
            name: "Final Fantasy Type-0",
            price: "$34.95",
            header: "FINAL FANTASY TYPE-0 HD brings an immersive world, memorable characters and the production value known of the series, together with high quality gameplay and storytelling truly worthy of the FINAL FANTASY name.",
            description: "Step into the fray as Class Zero, a group of students from an elite military academy whose country is attacked by an aggressive neighbouring Empire. In the brutal and harrowing struggle that follows, defeat the Empire and uncover the secrets behind the war using a range of powerful magical and combat abilities and an exciting new battle system.",
            genre: "RPG, Action, Adventure",
            platform: "PC, Playstation, Xbox",
            image1: "../imgs/fftype01.jpg",
            image2: "../imgs/fftype02.webp",
        },
        {
            id: 16,
            name: "God of War: Ragnarök",
            price: "$139.95",
            header: "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives",
            description: "The sequel to the critically acclaimed God of War (2018), God of War Ragnarök picks up with Fimbulwinter well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Odin's forces in Asgard prepare for a prophesied battle that will end the world. <br> Along the way, they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters. As the threat of Ragnarök grows ever closer, Kratos and Atreus must choose between the safety of their family and the safety of the realms.",
            genre: "Action, Adventure",
            platform: "Playstation",
            image1: "../imgs/gowr1.webp",
            image2: "../imgs/gowr2.jpg",
        },
        {
            id: 17,
            name: "The Witcher III: Wild Hunt",
            price: "$69.99",
            header: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
            description: "Behold the dark fantasy world of the Continent like never before! <br><br>This edition of The Witcher 3: Wild Hunt has been enhanced with numerous visual and technical improvements, including vastly improved level of detail, a range of community created and newly developed mods for the game, real-time ray tracing, and more — all implemented with the power of modern PCs in mind. <br><br> Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes, witchers are a counterbalance to the monster-infested world in which they live. Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable weapons, mutating potions, and combat magic. Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes to cunning supernatural predators lurking in the shadowy back alleys of densely populated cities. <br><br>Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse races, card games, fist fighting, and other pleasures life brings.",
            genre: "Action, Adventure, RPG",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/witcher1.webp",
            image2: "../imgs/witcher2.jpg",
        },
        {
            id: 18,
            name: "South Park: Stick of Truth",
            price: "$49.99",
            header: "From the perilous battlefields of the fourth-grade playground, a young hero will rise, destined to be South Park's savior. From the creators of South Park, Trey Parker and Matt Stone, comes an epic quest to become… cool.",
            description: "For a thousand years, the battle has been waged. The sole reason humans and elves are locked in a neverending war: The Stick of Truth. <br><br>But the tides of war are soon to change as word of a new kid spreads throughout the land, his coming fortold by the stars. As the moving vans of prophecy drive away, your adventure begins. Arm yourself with weapons of legend to defeat underpants gnomes, hippies and other forces of evil.<br><br> Discover the lost Stick of Truth and earn your place at the side of Stan, Kyle, Cartman and Kenny as their new friend. Succeed, and you shall be South Park's savior, cementing your social status in South Park Elementary. Fail, and you will forever be known… as a loser.",
            genre: "RPG, Adventure",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/southpark1.jpg",
            image2: "../imgs/southpark2.jpg",
        },
        {
            id: 19,
            name: "Mass Effect",
            price: "$99.95",
            header: "The Mass Effect Legendary Edition includes single-player base content and over 40 DLC from the highly acclaimed Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors, and packs — remastered and optimized for 4K Ultra HD.",
            description: "Are you prepared to lose everything to save the galaxy? You'll need to be, Commander Shepard. It's time to bring together your greatest allies and recruit the galaxy's fighting elite to continue the resistance against the invading Reapers. <br><br> So steel yourself, because this is an astronomical mission where sacrifices must be made. You'll face tougher choices and new, deadlier enemies. Arm yourself and prepare for an unforgettable intergalactic adventure. Divisive crew members are just the tip of the iceberg, Commander, because you'll also be tasked with issues of intergalactic diplomacy. <br><br> And time's a wastin', so don't be afraid to use new prompt-based actions that let you interrupt conversations, even if they could alter the fate of your crew...and the galaxy.",
            genre: "Action, Adventure, RPG",
            platform: "PC, Playstation, Xbox",
            image1: "../imgs/masseffect1.jpg",
            image2: "../imgs/masseffect2.jpg",
        },
        {
            id: 20,
            name: "Baldur's Gate III",
            price: "$99.99",
            header: "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
            description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain.<br><br>Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil. <br><br>From the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons & Dragons. Choose from 12 classes and 11 races from the D&D Player's Handbook and create your own identity, or play as an Origin hero with a hand-crafted background. Or tangle with your inner corruption as the Dark Urge, a fully customisable Origin hero with its own unique mechanics and story. <br><br>Whoever you choose to be, adventure, loot, battle and romance your way across the Forgotten Realms and beyond. Gather your party. Take the adventure online as a party of up to four.",
            genre: "RPG, Adventure, ",
            platform: "PC, Playstation, Xbox, Switch",
            image1: "../imgs/bg31.jpeg",
            image2: "../imgs/bg32.jpg",
        }
    ];

    // FULLPAGE Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // Open Source Free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: false,
    });

    fullpage_api.setAllowScrolling(true);

    // Set Up a Variable to track the User
    let user;

    //remove error animation
        $("#username").change(function (){
            $("#username").removeClass("error");
        });
        $("#email").change(function (){
            $("#email").removeClass("error");
        });
        $("#password").change(function (){
            $("#password").removeClass("error");
        });

    // Click on the submit Button:
    $('#submitButton').click(function (event) {
        event.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Get input values:
        const username = $("#username").val();
        const email = $("#email").val();
        const password = $("#password").val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $("#formMessage").html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
            $("#username").addClass("error");
        } else if (!emailRegex.test(email)) {
            $("#formMessage").html(`<p>'Invalid Email. Please enter a valid email to continue'</p>`);
            $("#email").addClass("error");
        } else if (!passwordRegex.test(password)) {
            $("#formMessage").html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
            $("#password").addClass("error");
        } else {
            // if passed all regex tests:
            $("#formMessage").html("");
            // set user equal to the username:
            user = username; //
            console.log(user);
            // Set the logged in user span to the user value"
            checkForLoggedInUser();
            // Move to slide 2 of section 1
            fullpage_api.moveTo(1, 1); // slide 2
        }
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        } else {
            console.log(user);

            $("nav").html(`<h2>Player Id: <span id="loggedInUser">${user}</span></h2>`);
        }
    }

    checkForLoggedInUser(); // because no value is assigned to user it treats it as false

    //on change for filters
    $("#platform").change(function () {
        filterAndPopulateResults();
    });

    $("#genre").change(function () {
        filterAndPopulateResults();
    });
    //end on change for filters


    //on clicks for the buttons
    $("#sortAlphabetically").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesAlphabetically(filteredGames);
        populateResults(sortedGames);
        console.log("alphabet working");
    });

    $("#sortHighToLow").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesHighToLow(filteredGames);
        populateResults(sortedGames);
        console.log("high working");
    });

    $("#sortLowToHigh").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesLowToHigh(filteredGames);
        populateResults(sortedGames);
        console.log("low working");
    });
    //end on clicks for buttons

// filter the games function
function filterGames () {
    const filteredGames = games.filter(game => {
        //game genre
        const gameGenre = game.genre.toLowerCase();
        const gameGenreFilter = $("#genre").val().toLowerCase();
            if (gameGenreFilter && !gameGenre.includes(gameGenreFilter)) {
                return false;
            }
        //game platform
        const gamePlatform = game.platform.toLowerCase();
        const gamePlatformFilter = $("#platform").val().toLowerCase();
            if (gamePlatformFilter && !gamePlatform.includes(gamePlatformFilter)) {
                return false;
            }
        return true;
    });

    return filteredGames;
}
//end filtering

//sort functions
    //sort books by price high to low
    function sortGamesHighToLow(games) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceB - priceA;
        });
    }
    //sort books by price low to high
    function sortGamesLowToHigh(games) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceA - priceB;
        });
    }
    //sort alphabetically
    function sortGamesAlphabetically(games) {
        return games.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }


    function filterAndPopulateResults() {
        const filteredGames = filterGames();
        populateResults(filteredGames);
    }

    filterAndPopulateResults();

    //populate cards function
    function populateResults(filteredResults) {
        $("#results").html("");
        if (filteredResults.length === 0) {
            $("#results").append(`<p class="no-results">No Results Found</p>`);
        } else {
            // if filtered results is not empty
            filteredResults.forEach(game => {
                //create a card for that property
                const card = `
                <div class="game">
                    <div class="gradient">
                        <div class="swiper">
                            <!-- Additional required wrapper -->
                            <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="${game.image1}" alt="${game.name} image 1" class="game-image" value=${game.id}></div>
                            <div class="swiper-slide"><img src="${game.image2}" alt="${game.name} image 2" class="game-image" value=${game.id}></div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                    <div class="game-details">
                        <h2>${game.name}</h2>
                        <p>${game.header}</p>
                    </div>
                    <div class="more-details">
                        <div class="game-extras">
                            <p class="genre">${game.genre}</p>
                            <p class="platform">${game.platform}</p>
                        </div>
                        <h6 class="price">${game.price}</h6>
                </div>
            `;
                $("#results").append(card);
                detailsPage();
                
                //initialize swiper js
                const swiper = new Swiper('.swiper', {
                    // Optional parameters
                    direction: 'vertical',
                    loop: true,
            
                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            });
        }
    }

    function detailsPage() {
        $(".game-image").click(function() {
            fullpage_api.moveTo(1, 2);
            populateDetails($(this).attr("value"));
        });
    }
    
    function populateDetails(imageId) {
        $(".details-page").empty(); // Clear existing content
        $(".details-page").append(`
        <div class="top-img">
            <img src="${games[imageId - 1].image1}" alt="${games[imageId - 1].name}">
        </div>
        <h1 class="details-title">${games[imageId - 1].name}</h1>
        <p class="details-header">${games[imageId - 1].header}</p>
        <div class="details-extras">
            <h3 class="details-price">${games[imageId - 1].price}</h3>
            <div class="extras-box">
                <p class="details-genre">${games[imageId - 1].genre}</p>
                <p class="details-platform">${games[imageId - 1].platform}</p>
            </div>
        </div>
        <p class="details-description">${games[imageId - 1].description}</p>
        <div class="bottom-img">
            <img src="${games[imageId - 1].image2}" alt="${games[imageId - 1].name}">
        </div>
        `);
    }
//back arrow takes ya back to the main page
    $("#backArrow").click(function (){
        fullpage_api.moveTo(1, 1);   
    });
    //initialize swiper js
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
 
//end 
});
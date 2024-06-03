/* jshint esversion: 6 */
$(document).ready(function () {

    //array
    const games = [{
            id: 1,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 2,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 3,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 4,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 5,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 6,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 7,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 8,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 9,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 10,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 11,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 12,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 13,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 14,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 15,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 16,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 17,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 18,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 19,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        },
        {
            id: 20,
            name: "Game",
            price: "$69.99",
            header: "Header",
            description: "Description",
            genre: "Action",
            platform: "PC Playstation Xbox Switch",
            image1: "./img/",
            image2: "./img/",
            image3: "./img/",
        }
    ];

    // FULLPAGE Initialization
    new fullpage('#fullpage', {
        // license
        licenseKey: 'gplv3-license', // Open Source Free license
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // turn on navigation arrows:
        // navigation: true, // comment out or remove to remove nav arrows
        controlArrows: false,
    });

    fullpage_api.setAllowScrolling(true); // prevent scroll of sections and slides

    // Move to slide # - first number is section, second is slide - zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    $('#goToSlide3').click(function () {
        fullpage_api.moveTo(1, 2);
    });

    // Set Up a Variable to track the User
    let user;

    // Click on the submit Button:
    $('#submitButton').click(function (event) {
        event.preventDefault();
        console.log('working');

        // // Setup Regex for form validation:
        // const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // // Get input values:
        // const username = $('#username').val();
        // const email = $('#email').val();
        // const password = $('#password').val();

        // console.log(username + password + email);

        // // Test against regex for form validation:
        // if (!usernameRegex.test(username)) {
        //     $('#formMessage').html(`<p>'Invalid username. Must be 3-15 characters long and contain only letters, numbers, and underscores.'</p>`);
        // } else if (!emailRegex.test(email)) {
        //     $('#formMessage').html(`<p>'Invalid email format.'</p>`);
        // } else if (!passwordRegex.test(password)) {
        //     $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        // } else {
        //     // if passed all regex tests:
        //     $('#formMessage').html('');
        //     // set user equal to the username:
        //     user = username; //
        //     console.log(user);
        //     // Set the logged in user span to the user value:
        //     checkForLoggedInUser();
        //     // Move to slide 2 of section 1
        //     fullpage_api.moveTo(1, 1); // slide 2
        // }

        fullpage_api.moveTo(1, 1);   
    });

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        } else {
            console.log(user);

            $('nav').html(`<h2>Welcome Back, <span id="loggedInUser">${user}</span>!</h2>`);
        }
    }

    checkForLoggedInUser(); // because no value is assigned to user it treats it as false


    populateResults(games);
    //populate cards function
    function populateResults(filteredResults) {
        $("results").html("");
        if (filteredResults.length === 0) {
            $("#results").append(`<p class="no-results">No Results Found</p>`);
        } else {
            // if filtered results is not empty
            filteredResults.forEach(game => {
                //create a card for that property
                const card = `
                <div class="game">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="${game.image1}" alt="${game.name} image 1" class="game-image" value=${game.id}></div>
                        <div class="swiper-slide"><img src="${game.image2}" alt="${game.name} image 2" class="game-image" value=${game.id}></div>
                        <div class="swiper-slide"><img src="${game.image3}" alt="${game.name} image 3" class="game-image" value=${game.id}></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="game-details">
                        <h2>${game.name}</h2>
                        <p>${game.header}</p>
                    </div>
                    <div class="more-details">
                        <div class="game-extras">
                            <p>${game.genre}</p>
                            <p>${game.platform}</p>
                        </div>
                        <h6 class="price">${game.price}</h6>
                    </div>
                </div>
            `;
                $("#results").append(card);

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
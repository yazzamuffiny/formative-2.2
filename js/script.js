/* jshint esversion: 6 */
$(document).ready(function() {



        //-----DATE PICKER -----

    //initialize datepicker on the inputs:
    $("#startDate").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function(){
            // run the calculate function
            const diffDays = calculateDays();
            populateResults(diffDays);
        }

    });

    $("#endDate").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function(){
            // run the calculate function
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
        
    });





    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';


    //initialize the map
    const map = new mapboxgl.Map({
        container: 'map', //where to put the map
        style: 'mapbox://styles/mapbox/streets-v11', // style URL - set up in dashboard (street version)
        center: [174.80607878446475, -41.252153264804065], // starting position [lng, lat], get cords from google, remember they give the cords reversed to what we want
        zoom:  10,// starting zoom
    });
    
    
     //initialize swiper js
     const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});







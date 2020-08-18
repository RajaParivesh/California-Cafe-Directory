async function fetchCafesAPI() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
        const cafes = await response.json();
        return cafes;
    } catch (error) {
        console.error(error);
    }
}

async function fetchPlacesAPI() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");
        const places = await response.json();
        return places;
    } catch (error) {
        console.error(error);
    }
}

async function constructTable() {
    
    const cafesObj = await fetchCafesAPI();
    const placesObj = await fetchPlacesAPI();
    
    const cafes = cafesObj.cafes;
    const places = placesObj.places; 
  
    var keyPressed = document.getElementById("search-bar").value;
    document.getElementById("tBody").innerHTML = "";

    const resultArray = [];

    // find total matching cafes
    const cafes_matching = cafes.filter(x => (x.name.toLowerCase().search(keyPressed.toLowerCase()) !== -1))


    for (let i = 0; i < cafes_matching.length; i++) {

        for (let j = 0; j < places.length; j++) {

            if (places[j].id === cafes_matching[i].location_id) {

                const finalCafeObject = Object.assign({}, cafes_matching.name)

                finalCafeObject.name = cafes_matching[i].name;
                finalCafeObject.street_no = places[j].street_no;
                finalCafeObject.locality = places[j].locality;
                finalCafeObject.postal_code = places[j].postal_code;
                finalCafeObject.lat = places[j].lat;
                finalCafeObject.long = places[j].long;

                resultArray.push(finalCafeObject);
                break;
            }
        }
    }

    var tbody = document.getElementById('tBody');

    var tr = "<tr>";
    for (var i = 0; i < resultArray.length; i++) {

        tr += "<td class='column1'>" + (i + 1) + "</td>" +
            "<td class='column2'>" + resultArray[i].name + "</td>" +
            "<td class='column3'>" + resultArray[i].street_no +", " + resultArray[i].locality+ "</td>" +
            "<td class='column4'>" + resultArray[i].postal_code + "</td>" +
            "<td class='column5'>" + resultArray[i].lat + "</td>" +
            "<td class='column6'>" + resultArray[i].long + "</td>" +
            "</tr>";
    }
    tr += "</table>"
    tbody.innerHTML += tr;
}
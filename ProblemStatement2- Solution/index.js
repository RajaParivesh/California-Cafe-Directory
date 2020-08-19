// const request1 = new XMLHttpRequest();
// const request2 = new XMLHttpRequest();
// request1.open("GET", "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
// request2.open("GET", "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");
// request1.send();
// request2.send();

// var cafes;
// var places;

// request1.onload = () => {
//     if (request1.status == 200 || request2.status == 200) {
//         cafes = request1.response;
//         places = request2.response;
//     } else {
//         console.log(`error ${request1.status}`);
//         console.log(`error ${request2.status}`);
//     }

// }

// console.log(this.cafes);
// console.log(JSON.parse(request1.response));
// console.log(JSON.parse(request2.response));

     
// // Method 2
// var x = fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json")
//   .then(response => {
//     return (response.json());
//   }).then(json => {
//     console.log(json)
//   })

// console.log(x);

// var obj;

// fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json")
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(

//     )

// console.log("sdf: " + this.obj)

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
async function renderAPIs() {
    const cafes = await fetchCafesAPI();
    const places = await fetchPlacesAPI();
    console.log(cafes);
    console.log(places);
}
renderAPIs()
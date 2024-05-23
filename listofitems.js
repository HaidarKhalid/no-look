let tripsArray = [
    {
        "name": "رحلة بغداد السياحية",
        "days": 5,
        "hotelName": "بابيلون",
        "hotelStars": 5,
        "originalPrice": 123,
        "kidWithoutBedPrice": 100,
        "infantPrice": 70,
        "priceCurrency": "IQD",
        "description": "رحلة بغداد السياحية التي تتضمن طوق كسرى ونصب الشهيد",
        "image": "media/pictures/cities/dubai.png",
        "video": "baghdadVideo.mp4",
        "category": "دبي",
        "offer": false,
        "active": true,
        "_id": 1
    }, {
        "name": "رحلة اربيل ودهوك السياحية ",
        "days": 9,
        "hotelName": "كريستال",
        "hotelStars": 4,
        "originalPrice": 100,
        "kidWithoutBedPrice": 70,
        "infantPrice": 50,
        "priceCurrency": "USD",
        "description": "رحلة اربيل السياحية التي تتضمن شلال كلي عل بيك ووووو",
        "image": "media/pictures/cities/erbil.png",
        "video": "erbilVideo.mp4",
        "category": "اربيل",
        "offer": true,
        "active": true,
        "_id": 2
    }, {
        "name": "رحلة اربيل ودهوك السياحية ",
        "days": 8,
        "hotelName": "كريستال",
        "hotelStars": 4,
        "originalPrice": 110,
        "kidWithoutBedPrice": 70,
        "infantPrice": 50,
        "priceCurrency": "USD",
        "description": "رحلة اربيل السياحية التي تتضمن شلال كلي عل بيك ووووو",
        "image": "media/pictures/cities/erbil.png",
        "video": "erbilVideo.mp4",
        "category": "اربيل",
        "offer": true,
        "active": true,
        "_id": 3
    }, {
        "name": "رحلة اربيل ودهوك السياحية ",
        "days": 10,
        "hotelName": "كريستال",
        "hotelStars": 4,
        "originalPrice": 120,
        "kidWithoutBedPrice": 70,
        "infantPrice": 50,
        "priceCurrency": "USD",
        "description": "رحلة اربيل السياحية التي تتضمن شلال كلي عل بيك ووووو",
        "image": "media/pictures/cities/erbil.png",
        "video": "erbilVideo.mp4",
        "category": "اربيل",
        "offer": false,
        "active": true,
        "_id": 4
    }
]
let destinationsArray = [
    {"img":'media/pictures/cities/erbil.png', "name":"اربيل"},
    {"img":'media/pictures/cities/dubai.png', "name":"دبي"},
    {"img":'media/pictures/cities/duhok.png', "name":"دهوك"},
    {"img":'media/pictures/cities/greece.png', "name":"اليونان"},
    {"img":'media/pictures/cities/image.png', "name":"تجربة"},
    {"img":'media/pictures/cities/sulaymania.png', "name":"سليمانية"},
    {"img":'media/pictures/cities/turkey.png', "name":"تركيا"}
]

let categorySelected = localStorage.getItem('category')
let cardsDiv = document.querySelector('.cards')
let dropdownList = document.querySelector('.dropdown-list')
let categoryHeader = document.querySelector('.categoryHeader')
let categoryImage = document.querySelector('.categoryImage')

for (let i in destinationsArray) {
    if (destinationsArray[i]['name'] == categorySelected) categoryImage.src = destinationsArray[i]['img']
}
categoryHeader.textContent = categorySelected

// sort items in array
function getTripsInCategory() {
    return tripsArray.filter(trip=> {
        return trip['category'] == categorySelected
    }) }

let sorttedArray = getTripsInCategory();
document.querySelector('.trips-count').innerText = `عدد الرحلات: ${sorttedArray.length}`


function addCards() {
    for (let i in sorttedArray) {
        cardsDiv.innerHTML += `
        <div onclick="goToCard(${sorttedArray[i]['_id']})" class="${sorttedArray[i]['offer'] == true ? "card card-offer" : "card"}"> <!-- + card-offer -->
                <img class="card-image" src="${sorttedArray[i]['image']}" alt="${sorttedArray[i]['category']}">
                <div class="offers-shadow-div">
                <p class="card-info">
                    <span class="${sorttedArray[i]['offer'] == true ? "card-info-name card-info-name-offer" : "card-info-name"}">${sorttedArray[i]['name']}</span> <!-- + card-info-name-offer -->
                    <span class="card-info-location">${sorttedArray[i]['category']} <img src="media/pictures/icons/location-1.svg"></span>
                    <span class="card-info-price">${sorttedArray[i]['originalPrice']}${sorttedArray[i]['priceCurrency'] == "USD" ? "$": " الف د.ع"}<img src="media/pictures/icons/money.svg"></span>
                    <span class="card-info-days">عدد الايام: ${sorttedArray[i]['days']}  <img src="media/pictures/icons/time.svg"></span>
                </p>
                </div>
            </div>
        `
    }
}

// dropdown list
let sortByText = document.querySelector('.sort-by-text');
let sorttedAs;

dropdownList.addEventListener('mouseover',()=> {
    sorttedAs != 'days' ? document.querySelector('.sort-by-days').style = "display: block;" : console.log('next')
    sorttedAs != 'price' ? document.querySelector('.sort-by-price').style = "display: block;" : console.log('next')
    sorttedAs != 'date' ? document.querySelector('.sort-by-date').style = "display: block;" : console.log('next')

})
dropdownList.addEventListener('mouseout',()=> {
    document.querySelector('.sort-by-days').style = "display: none;"
    document.querySelector('.sort-by-price').style = "display: none;"
    document.querySelector('.sort-by-date').style = "display: none;"
})




function sortBy(sortByVar) {
    sorttedArray = getTripsInCategory() // reset var
    if (sortByVar == 'days') {
        sorttedAs = 'days'
        sortByText.innerHTML = `<img src="media/pictures/icons/arrowdown.svg">حسب عدد الايام `
        sorttedArray.sort((a,b)=>{
            if (a.days > b.days) return -1;
            if (a.days < b.days) return 1;
            else return 0;
        })
    }

    else if (sortByVar == 'price') {
        sorttedAs = 'price'
        sortByText.innerHTML = `<img src="media/pictures/icons/arrowdown.svg">حسب السعر `
        sorttedArray.sort((a,b)=>{
            if (a.originalPrice > b.originalPrice) return -1;
            if (a.originalPrice < b.originalPrice) return 1;
            else return 0;
        })
    }

    else if (sortByVar == 'date') {
        sorttedAs = 'date'
        sortByText.innerHTML = `<img src="media/pictures/icons/arrowdown.svg">حسب تاريخ الاضافة`
        sorttedArray = getTripsInCategory()
    }
    document.querySelector('.sort-by-days').style = "display: none;"
    document.querySelector('.sort-by-price').style = "display: none;"
    document.querySelector('.sort-by-date').style = "display: none;"

    // sort items in html again
    cardsDiv.innerHTML = ``
    addCards()
}
// put items for first time
addCards()


///////////// go to card

function goToCard(id) {
    console.log("hello")

    localStorage.setItem('cardId', id)
    window.location.href = "insidecard.html";

}
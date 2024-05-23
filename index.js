if (localStorage.getItem('category')) localStorage.removeItem('category')
if (localStorage.getItem('cardId')) localStorage.removeItem('cardId')





/************* navbar disappear/appear && landing page animation  ******************/
// navbar
let lastScrollValue = 0 // just entering website
let delta = 5
let mainNavbar = document.querySelector('.mainnavbar')
// landing page 
let paragraph1 = document.querySelector('.landing-page-bottom-items p:nth-child(1)')
let paragraph2 = document.querySelector('.landing-page-bottom-items p:nth-child(2)')
let scrollImg = document.querySelector('.landing-page-scroll img')
window.addEventListener('scroll', function(){ 
    let currentScrollValue = window.scrollY || window.pageYOffset
    // navbar
    if (Math.abs(lastScrollValue - currentScrollValue) <= delta) return;

    
    if (currentScrollValue > lastScrollValue) {
        mainNavbar.style.top = `-${mainNavbar.offsetHeight}px`
    } else {
        mainNavbar.style.top = `0px`

    }

    ///////// landing page
    // scrolling down
    if (lastScrollValue <= 5 && currentScrollValue > 0) {
        paragraph1.style = `animation:goleft 0.5s forwards;`
        paragraph2.style = `animation:goright 0.5s forwards;`
        setTimeout(()=>{ 
            paragraph1.style = `animation:none; right: 400px;`
            paragraph2.style = `animation:none; left: 400px;`
        }, 500)
        scrollImg.style = "opacity: 0;"
    } /* scrolling up */ else if (currentScrollValue <= 5 && lastScrollValue > 0) {
        paragraph1.style = `animation:backleft 0.5s forwards;`
        paragraph2.style = `animation:backright 0.5s forwards;`
        setTimeout(()=>{
            paragraph1.style = `animation:none; right: 0;`
            paragraph2.style = `animation:none; left: 0;`
        }, 500)
        scrollImg.style = "opacity: 1;"
    }

    lastScrollValue = currentScrollValue
})

/************* Put destionations & offers in html  ******************/


/* destinations */
let destionationsDiv = document.querySelector('.destinations-cards')
destionationsDiv.innerHTML = ''
let destinationsArray = [
    {"img":'media/pictures/cities/erbil.png', "name":"اربيل"},
    {"img":'media/pictures/cities/dubai.png', "name":"دبي"},
    {"img":'media/pictures/cities/duhok.png', "name":"دهوك"},
    {"img":'media/pictures/cities/greece.png', "name":"اليونان"},
    {"img":'media/pictures/cities/image.png', "name":"تجربة"},
    {"img":'media/pictures/cities/sulaymania.png', "name":"سليمانية"},
    {"img":'media/pictures/cities/turkey.png', "name":"تركيا"}
]

for (let i in destinationsArray) {
    destionationsDiv.innerHTML += `
    <div onclick="goToCategory('${destinationsArray[i]['name']}')" class="card">
        <img class="card-image" src="${destinationsArray[i]['img']}" alt="${destinationsArray[i]['name']}">
        <div class="destinations-shadow-div">
          <p>${destinationsArray[i]['name']}</p>
        </div>
    </div>
    `
}

function goToCategory(name) {
    console.log("hello")

    localStorage.setItem('category', name)
    window.location.href = "listofitems.html";

}

/* offers */
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
        "category": "بغداد",
        "offer": false,
        "active": true
    }, {
        "name": "رحلة اربيل ودهوك السياحية ",
        "days": 13,
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
        "active": true
    }
]

let offersDiv = document.querySelector('.offers-cards')

let offersArray = tripsArray.filter(trip=> {
    return trip['offer'] == true
})

for (let i in offersArray) {
    offersDiv.innerHTML += `
    <div class="card card-offer"> <!-- + card-offer -->
            <img class="card-image" src="${offersArray[i]['image']}" alt="${offersArray[i]['category']}">
            <div class="offers-shadow-div">
              <p class="card-info">
                <span class="card-info-name card-info-name-offer">${offersArray[i]['name']}</span> <!-- + card-info-name-offer -->
                <span class="card-info-location">${offersArray[i]['category']} <img src="media/pictures/icons/location-1.svg"></span>
                <span class="card-info-price">${offersArray[i]['originalPrice']}${offersArray[i]['priceCurrency'] == "USD" ? "$": " الف د.ع"}<img src="media/pictures/icons/money.svg"></span>
                <span class="card-info-days">عدد الايام: ${offersArray[i]['days']}  <img src="media/pictures/icons/time.svg"></span>
              </p>
            </div>
          </div>
    `
}
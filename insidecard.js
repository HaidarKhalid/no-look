if (!localStorage.getItem('cardId')) localStorage.setItem('cardId', 1)
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
        "video": "media/videos/monkeytype.mp4",
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
let cardClicked = tripsArray.find(trip => {
    return trip['_id'] == localStorage.getItem('cardId')    
})
console.log(cardClicked)

function getInfo(htmlAtt) {
    let htmlAttVar = ''

    if (htmlAtt == 'priceInfo') {
        if (tripsArray[0]['kidWithoutBedPrice'] || tripsArray[0]['infantPrice']) {
            htmlAttVar+= `<li dir="rtl"><img src="media/pictures/icons/money-black.svg"/><p>السعر للبالغين: ${tripsArray[0]['originalPrice']}$</p></li>`
            if (tripsArray[0]['kidWithoutBedPrice']) htmlAttVar+= `<li dir="rtl"><p>السعر للاطفال بدون سرير: ${tripsArray[0]['kidWithoutBedPrice']}$</p></li>`
            if (tripsArray[0]['infantPrice']) htmlAttVar+= `<li dir="rtl"><p>السعر للرضع: ${tripsArray[0]['infantPrice']}$</p></li>`
        }
        else {htmlAttVar+= `<li dir="rtl"><p>السعر: ${tripsArray[0]['originalPrice']}$</p></li>`}
    }
    else if (htmlAtt == 'video' && tripsArray[0]['video']) {
            htmlAttVar = `<video class="trip-video" src="${cardClicked['video']}" controls></video>`
    }
    return htmlAttVar
}






if (tripsArray[0]['offer'] == true) document.querySelector('.offer').innerText = "عرض محدود"
document.querySelector('.cardImage').src = tripsArray[0]['image']
document.querySelector('.cardHeader').innerText = tripsArray[0]["name"]

let tripBox = document.querySelector('.tripInfo')
function fixSizes() {

    // Create a new link element
    var link = document.createElement('link');
    
    // Set the attributes for the link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    
    
    if (window.innerWidth <= 745) {
        link.href = 'insideCardSmallWindows.css'; 
        tripBox.innerHTML = `
        
        <div class="rightSideInfo">

            <ul class="tripInfoFlexBox">
                <h2 style="font-weight: bolder;">التفاصيل</h2>
                <hr class="infoHr">
                <br>
                <li dir="rtl"><img src="media/pictures/icons/time-black.svg"/><p>عدد الايام: ${tripsArray[0]['days']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/location-1-black.svg"/><p>الوجهة:  ${tripsArray[0]['category']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/hotel.svg"/><p>اسم الفندق:  ${tripsArray[0]['hotelName']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/hotel-stars.svg"/><p>عدد نجوم الفندق:  ${tripsArray[0]['hotelStars']}</p></li>
                ${getInfo("priceInfo")}
            </ul>
            
            <div class="leftSideInfo" >
                <p class="trip-description">الوصف: ${cardClicked['description']}</p>
                <div class="leftSideMedia">
                    ${getInfo('video')}
                    <img class="trip-image" src="${cardClicked['image']}" alt="erbil picture">
                </div>
            </div>
            
        </div>
        <div class="bookNow">
            <div onclick="function run(){window.open('https://wa.me/+9647711926403', '_blank');} run()" class="bookNow-whatsapp">
                <img src="media/pictures/icons/whatsapp.svg">
                <p>حجز عبر واتساب</p>
            </div>
            <form class="emailForm" action="https://formsubmit.co/travelComp160@gmail.com" method="POST" id="emailForm">
                <h2 style="text-align: center;">أو <br> إرسال ايميل</h2>
                <input placeholder="الاسم" type="text" name="name" required>
                <input placeholder="الايميل" type="email" name="email" required>
                <input placeholder="رقم الهاتف" type="tel" name="phoneNumber" required>
                <textarea class="emailForm-description" placeholder="وصف الرسالة" name="description" form="emailForm" required></textarea>
                <button class="emailForm-submit" type="submit">Send</button>
           </form>               
        </div>
        `
    } else {
        link.href = 'insideCardBigWindows.css'; 

        tripBox.innerHTML = `
        <div class="rightSideInfo">

            <ul class="tripInfoFlexBox">
                <h2 style="font-weight: bolder;">التفاصيل</h2>
                <hr style="background-color: black; height: 3px; width: 140px; position: relative; left: 20px;">
                <br> 
                <li dir="rtl"><img src="media/pictures/icons/time-black.svg"/><p>عدد الايام: ${tripsArray[0]['days']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/location-1-black.svg"/><p>الوجهة:  ${tripsArray[0]['category']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/hotel.svg"/><p>اسم الفندق:  ${tripsArray[0]['hotelName']}</p></li>
                <li dir="rtl"><img src="media/pictures/icons/hotel-stars.svg"/><p>عدد نجوم الفندق:  ${tripsArray[0]['hotelStars']}</p></li>
                ${getInfo("priceInfo")}
            </ul>
            <div class="bookNow">
                <div onclick="function run(){window.open('https://wa.me/+9647711926403', '_blank');} run()" class="bookNow-whatsapp">
                    <img src="media/pictures/icons/whatsapp.svg">
                    <p>حجز عبر واتساب</p>
                </div>
                <form class="emailForm" action="https://formsubmit.co/travelComp160@gmail.com" method="POST" id="emailForm">
                    <h2 style="text-align: center;">أو <br> إرسال ايميل</h2>
                    <input placeholder="الاسم" type="text" name="name" required>
                    <input placeholder="الايميل" type="email" name="email" required>
                    <input placeholder="رقم الهاتف" type="tel" name="phoneNumber" required>
                    <textarea class="emailForm-description" placeholder="وصف الرسالة" name="description" form="emailForm" required></textarea>
                    <button class="emailForm-submit" type="submit">Send</button>
               </form>               
            </div>
        </div>
        <div class="leftSideInfo" >
            <p class="trip-description">الوصف: ${cardClicked['description']}</p>
            <div class="leftSideMedia">
                ${getInfo('video')}
                <img class="trip-image" src="${cardClicked['image']}" alt="erbil picture">
            </div>
        </div>
        `
    }
    // Append the link element to the head section
    document.head.appendChild(link);

}
window.addEventListener('resize',()=>{console.log(window.outerWidth); fixSizes()})
fixSizes()
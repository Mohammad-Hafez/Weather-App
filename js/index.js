let country = document.querySelector("#country")
let find = document.querySelector("#findBtn")
let homeBtn = document.querySelector("#homeBtn")
let contactBtn = document.querySelector("#contactBtn")
let months = {
    "01": "Fanuary",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "Septemper",
    "10": "Octoper",
    "11": "November",
    "12": "December",
}
let days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wendesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}
//firstDay Function
async function firstDay(userCountryValue ) {
    let countryApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=69ce24753be144c099d03638230103&q=${userCountryValue}&days=3&aqi=no&alerts=no`)
    let countryApiResult = await countryApi.json()
    // firstDay Varriables
    const firstDayTemp = document.querySelector("#firstDayTemp")
    const userCountryResult = document.querySelector("#userCountryResult")
    const firstDayName = document.querySelector("#firstDayName")
    const firstDaySkyImg = document.querySelector("#firstDaySkyImg")
    const firstDaySkystatus = document.querySelector("#firstSunstatus")
    const firstDayDate = document.querySelector("#firstDayDate");
    const windDirection = document.querySelector("#windDirection")
    const widnSpeed = document.querySelector("#widnSpeed")
    const humidityPercentage = document.querySelector("#humidityPercentage")
    //API Varriables
    const locTime = countryApiResult.location.localtime;
    const monthNum = locTime.toString().substring(5, 7);
    let dayNum;
    if (dayNum = locTime.toString().substring(8, 9) == 0) {
        dayNum = locTime.toString().substring(9, 10)
    } else {
        dayNum = locTime.toString().substring(8, 10)
    }
    let day = new Date(countryApiResult.current.last_updated)
    userCountryResult.innerHTML  = countryApiResult.location.name;
    firstDayTemp.innerHTML       = countryApiResult.current.temp_c + `<span>℃</span>`;
    firstDaySkyImg.src           = countryApiResult.current.condition.icon;
    firstDaySkystatus.innerHTML  = countryApiResult.current.condition.text;
    firstDayName.innerHTML       = days[day.getDay()]
    firstDayDate.innerHTML       = dayNum + months[monthNum]
    windDirection.innerHTML      = countryApiResult.current.wind_dir
    widnSpeed.innerHTML          = countryApiResult.current.gust_kph + ` Km/h`
    humidityPercentage.innerHTML = countryApiResult.current.humidity + `%`;
}
async function secondDay(userCountryValue ) {
    const countryApiDay2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=69ce24753be144c099d03638230103&q=${userCountryValue}&days=3&aqi=no&alerts=no`)
    const countryApiResultDay2 = await countryApiDay2.json()
    //secondDay Vars
    const secondDayName = document.querySelector("#secondDayName")
    const secondDayImg = document.querySelector("#secondDayImg")
    const secondDayMaxTemp = document.querySelector("#secondDayMaxTemp")
    const secondDayMinTemp = document.querySelector("#secondDayMinTemp")
    const secondSunstatus = document.querySelector("#secondSunstatus")
    //SecDay
    const secondDay            = new Date(countryApiResultDay2.forecast.forecastday[1].date)
    secondDayImg.src           = countryApiResultDay2.forecast.forecastday[1].day.condition.icon;
    secondDayName.innerHTML    = days[secondDay.getDay()]
    secondDayMaxTemp.innerHTML = countryApiResultDay2.forecast.forecastday[1].day.maxtemp_c + `<span>℃</span>`;
    secondDayMinTemp.innerHTML = countryApiResultDay2.forecast.forecastday[1].day.mintemp_c + `<span>℃</span>`;
    secondSunstatus.innerHTML  = countryApiResultDay2.forecast.forecastday[1].day.condition.text;
}
async function thirdDay(userCountryValue) {
    const countryApiDay3 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=69ce24753be144c099d03638230103&q=${userCountryValue}&days=3&aqi=no&alerts=no`)
    const countryApiResultDay3 = await countryApiDay3.json()
    //thirdDay Vars
    const thirdDayName = document.querySelector("#thirdDayName")
    const thirdDayImg = document.querySelector("#thirdDayImg")
    const thirdDayMaxTemp = document.querySelector("#thirdDayMaxTemp")
    const thirdDayMinTemp = document.querySelector("#thirdDayMinTemp")
    const thirdSunstatus = document.querySelector ("#thirdSunstatus")
    //thirdDay
    const thirdDay            = new Date(countryApiResultDay3.forecast.forecastday[2].date);
    thirdDayImg.src  = countryApiResultDay3.forecast.forecastday[2].day.condition.icon;
    thirdDayName.innerHTML    = days[thirdDay.getDay()]
    thirdDayMaxTemp.innerHTML = countryApiResultDay3.forecast.forecastday[2].day.maxtemp_c + `<span>℃</span>`;
    thirdDayMinTemp.innerHTML = countryApiResultDay3.forecast.forecastday[2].day.mintemp_c + `<span>℃</span>`;
    thirdSunstatus.innerHTML  = countryApiResultDay3.forecast.forecastday[2].day.condition.text;
}
async function getUserCountry (c) {
   await firstDay(c);
    await secondDay(c);
    await thirdDay(c);
}
getUserCountry(`cairo`)
country.addEventListener("input", function () {
    getUserCountry(country.value)
})
find.addEventListener("click", function () {
    getUserCountry(country.value)
})


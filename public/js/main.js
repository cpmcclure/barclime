// const zip = '04101'
// const key1 = '1d10748192304a12b061612de96f6e48'
// const key2 = 'ba1b4ca1617f4a2ea88192125220707&'

// async function getWeather(){
//     const res1 = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${key1}`)
//     const location = await res1.json()
//     const q = `${location.latitude},${location.longitude}`
//     const res2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key2}q=${q}&days=1&aqi=no&alerts=no`)
//     const weather = await res2.json()
//     console.log(weather)
// }
// getWeather()

const button = document.querySelector('#submitButton')
button.addEventListener('click', getWeather)

const press = document.querySelector('#pressure')
const temp = document.querySelector('#temperature')
const humid = document.querySelector('#humidity')
const dateIn = document.querySelector('#currentTime')
const tempIn = document.querySelector('#tempIn')
const pressIn = document.querySelector('#pressIn')
const humidIn = document.querySelector('#humidIn')

const grind = document.querySelector('#grind')
const dose = document.querySelector('#dose')
const weight = document.querySelector('#weight')
const time = document.querySelector('#time')

const grindOut = document.querySelector('#grindOut')
const doseOut = document.querySelector('#doseOut')
const weightOut = document.querySelector('#weightOut')
const timeOut = document.querySelector('#timeOut')

const zip = '04101'
const key = 'ba1b4ca1617f4a2ea88192125220707&'

async function getWeather(){
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}q=${zip}&days=1&aqi=no&alerts=no`)
    const weather = await res.json()
    // Get select weather data in both imperial and metric
    const celsius= weather.current.temp_c
    const fahrenheit = weather.current.temp_f
    const millibars = weather.current.pressure_mb
    const inches = weather.current.pressure_in
    const humidity = weather.current.humidity

    // Set display values
    press.textContent = inches.toFixed(1) + 'in'
    temp.textContent = fahrenheit + 'º'
    humid.textContent = humidity + '%'

    // Set form values
    let now = new Date().toISOString().split(':').slice(0, 2).join(':')
    console.log(now)
    dateIn.value = now
    tempIn.value = fahrenheit
    pressIn.value = inches
    humidIn.value = humidity
}

function setSliderDisplay(){
    grindOut.textContent = grind.value
    doseOut.textContent = dose.value
    weightOut.textContent = weight.value
    timeOut.textContent = time.value
}

window.onload = setSliderDisplay()
window.onload = getWeather()

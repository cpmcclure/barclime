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


const press = document.querySelector('#pressure')
const temp = document.querySelector('#temperature')
const humid = document.querySelector('#humidity')

const zip = '04101'
const key = 'ba1b4ca1617f4a2ea88192125220707&'

async function getWeather(){
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}q=${zip}&days=1&aqi=no&alerts=no`)
    const weather = await res.json()
    const celsius= weather.current.temp_c
    const fahrenheit = weather.current.temp_f
    const millibars = weather.current.pressure_mb
    const inches = weather.current.pressure_in
    const humidity = weather.current.humidity
    console.log(weather)
    press.textContent = inches + 'in'
    temp.textContent = fahrenheit + 'º'
    humid.textContent = humidity + '%'
    console.log(celsius, fahrenheit, millibars, inches, humidity)
}
getWeather()

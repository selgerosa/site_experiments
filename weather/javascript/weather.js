'use strict'

// ============================================================
// API Key
// ------------------------------------------------------------
// Don't have a key? Check README.md for instructions
// on how to get one.
// ============================================================

const APIKEY = 'efacd416eaa1a83ee35311fdc021d301'

// ============================================================
// Select DOM Elements
// ============================================================

// Search
let area = document.querySelector('#area').value || 'Boston'
const locationSearch = document.querySelector('#location-search')

// Location
const locationName = document.querySelector('#location-name')
const country = document.querySelector('#country')

// Temperature
const temp = document.querySelector('#temp')
const tempMin = document.querySelector('#temp-min')
const tempMax = document.querySelector('#temp-max')

// Weather
const condition = document.querySelector('#condition')
const conditionDescription = document.querySelector('#condition-description')

// Wind
const windSpeed = document.querySelector('#wind-speed')

// Error
const errorBox = document.querySelector('#error')

var clear_cold = ['url(img/clear_cold/1.gif)', 'url(img/clear_cold/2.gif)', 'url(img/clear_cold/3.gif)', 'url(img/clear_cold/4.gif)', 'url(img/clear_cold/5.gif)', 'url(img/clear_cold/6.gif)', 'url(img/clear_cold/7.gif)', 'url(img/clear_cold/8.gif)', 'url(img/clear_cold/9.gif)', 'url(img/clear_cold/10.gif)']
var clear_warm = ['url(img/clear_warm/1.gif)', 'url(img/clear_warm/2.gif)', 'url(img/clear_warm/3.gif)', 'url(img/clear_warm/4.gif)', 'url(img/clear_warm/5.gif)', 'url(img/clear_warm/6.gif)', 'url(img/clear_warm/7.gif)', 'url(img/clear_warm/8.gif)', 'url(img/clear_warm/9.gif)', 'url(img/clear_warm/10.gif)']
var clear_hot = ['url(img/clear_hot/1.gif)', 'url(img/clear_hot/2.gif)', 'url(img/clear_hot/3.gif)', 'url(img/clear_hot/4.gif)', 'url(img/clear_hot/5.gif)', 'url(img/clear_hot/6.gif)', 'url(img/clear_hot/7.gif)', 'url(img/clear_hot/8.gif)', 'url(img/clear_hot/9.gif)', 'url(img/clear_hot/10.gif)']

var clouds_cold = ['url(img/clouds_cold/1.gif)', 'url(img/clouds_cold/2.gif)', 'url(img/clouds_cold/3.gif)', 'url(img/clouds_cold/4.gif)', 'url(img/clouds_cold/5.gif)', 'url(img/clouds_cold/6.gif)', 'url(img/clouds_cold/7.gif)', 'url(img/clouds_cold/8.gif)', 'url(img/clouds_cold/9.gif)', 'url(img/clouds_cold/10.gif)']
var clouds_warm = ['url(img/clouds_warm/1.gif)', 'url(img/clouds_warm/2.gif)', 'url(img/clouds_warm/3.gif)', 'url(img/clouds_warm/4.gif)', 'url(img/clouds_warm/5.gif)', 'url(img/clouds_warm/6.gif)', 'url(img/clouds_warm/7.gif)', 'url(img/clouds_warm/8.gif)', 'url(img/clouds_warm/9.gif)', 'url(img/clouds_warm/10.gif)']
var clouds_hot = ['url(img/clouds_hot/1.gif)', 'url(img/clouds_hot/2.gif)', 'url(img/clouds_hot/3.gif)', 'url(img/clouds_hot/4.gif)', 'url(img/clouds_hot/5.gif)', 'url(img/clouds_hot/6.gif)', 'url(img/clouds_hot/7.gif)', 'url(img/clouds_hot/8.gif)', 'url(img/clouds_hot/9.gif)', 'url(img/clouds_hot/10.gif)']

var drizzle_cold = ['url(img/drizzle_cold/1.gif)', 'url(img/drizzle_cold/2.gif)', 'url(img/drizzle_cold/3.gif)', 'url(img/drizzle_cold/4.gif)', 'url(img/drizzle_cold/5.gif)', 'url(img/drizzle_cold/6.gif)', 'url(img/drizzle_cold/7.gif)', 'url(img/drizzle_cold/8.gif)', 'url(img/drizzle_cold/9.gif)', 'url(img/drizzle_cold/10.gif)']
var drizzle_warm = ['url(img/drizzle_warm/1.gif)', 'url(img/drizzle_warm/2.gif)', 'url(img/drizzle_warm/3.gif)', 'url(img/drizzle_warm/4.gif)', 'url(img/drizzle_warm/5.gif)', 'url(img/drizzle_warm/6.gif)', 'url(img/drizzle_warm/7.gif)', 'url(img/drizzle_warm/8.gif)', 'url(img/drizzle_warm/9.gif)', 'url(img/drizzle_warm/10.gif)']
var drizzle_hot = ['url(img/drizzle_hot/1.gif)', 'url(img/drizzle_hot/2.gif)', 'url(img/drizzle_hot/3.gif)', 'url(img/drizzle_hot/4.gif)', 'url(img/drizzle_hot/5.gif)', 'url(img/drizzle_hot/6.gif)', 'url(img/drizzle_hot/7.gif)', 'url(img/drizzle_hot/8.gif)', 'url(img/drizzle_hot/9.gif)', 'url(img/drizzle_hot/10.gif)']

var rain_cold = ['url(img/rain_cold/1.gif)', 'url(img/rain_cold/2.gif)', 'url(img/rain_cold/3.gif)', 'url(img/rain_cold/4.gif)', 'url(img/rain_cold/5.gif)', 'url(img/rain_cold/6.gif)', 'url(img/rain_cold/7.gif)', 'url(img/rain_cold/8.gif)', 'url(img/rain_cold/9.gif)', 'url(img/rain_cold/10.gif)']
var rain_warm = ['url(img/rain_warm/1.gif)', 'url(img/rain_warm/2.gif)', 'url(img/rain_warm/3.gif)', 'url(img/rain_warm/4.gif)', 'url(img/rain_warm/5.gif)', 'url(img/rain_warm/6.gif)', 'url(img/rain_warm/7.gif)', 'url(img/rain_warm/8.gif)', 'url(img/rain_warm/9.gif)', 'url(img/rain_warm/10.gif)']
var rain_hot = ['url(img/rain_hot/1.gif)', 'url(img/rain_hot/2.gif)', 'url(img/rain_hot/3.gif)', 'url(img/rain_hot/4.gif)', 'url(img/rain_hot/5.gif)', 'url(img/rain_hot/6.gif)', 'url(img/rain_hot/7.gif)', 'url(img/rain_hot/8.gif)', 'url(img/rain_hot/9.gif)', 'url(img/rain_hot/10.gif)']

var snow_cold = ['url(img/snow_cold/1.gif)', 'url(img/snow_cold/2.gif)', 'url(img/snow_cold/3.gif)', 'url(img/snow_cold/4.gif)', 'url(img/snow_cold/5.gif)', 'url(img/snow_cold/6.gif)', 'url(img/snow_cold/7.gif)', 'url(img/snow_cold/8.gif)', 'url(img/snow_cold/9.gif)', 'url(img/snow_cold/10.gif)']
var snow_warm = ['url(img/snow_warm/1.gif)', 'url(img/snow_warm/2.gif)', 'url(img/snow_warm/3.gif)', 'url(img/snow_warm/4.gif)', 'url(img/snow_warm/5.gif)', 'url(img/snow_warm/6.gif)', 'url(img/snow_warm/7.gif)', 'url(img/snow_warm/8.gif)', 'url(img/snow_warm/9.gif)', 'url(img/snow_warm/10.gif)']
var snow_hot = ['url(img/snow_hot/1.gif)', 'url(img/snow_hot/2.gif)', 'url(img/snow_hot/3.gif)', 'url(img/snow_hot/4.gif)', 'url(img/snow_hot/5.gif)', 'url(img/snow_hot/6.gif)', 'url(img/snow_hot/7.gif)', 'url(img/snow_hot/8.gif)', 'url(img/snow_hot/9.gif)', 'url(img/snow_hot/10.gif)']

var thunderstorm_cold = ['url(img/thunderstorm_cold/1.gif)', 'url(img/thunderstorm_cold/2.gif)', 'url(img/thunderstorm_cold/3.gif)', 'url(img/thunderstorm_cold/4.gif)', 'url(img/thunderstorm_cold/5.gif)', 'url(img/thunderstorm_cold/6.gif)', 'url(img/thunderstorm_cold/7.gif)', 'url(img/thunderstorm_cold/8.gif)', 'url(img/thunderstorm_cold/9.gif)', 'url(img/thunderstorm_cold/10.gif)']
var thunderstorm_warm = ['url(img/thunderstorm_warm/1.gif)', 'url(img/thunderstorm_warm/2.gif)', 'url(img/thunderstorm_warm/3.gif)', 'url(img/thunderstorm_warm/4.gif)', 'url(img/thunderstorm_warm/5.gif)', 'url(img/thunderstorm_warm/6.gif)', 'url(img/thunderstorm_warm/7.gif)', 'url(img/thunderstorm_warm/8.gif)', 'url(img/thunderstorm_warm/9.gif)', 'url(img/thunderstorm_warm/10.gif)']
var thunderstorm_hot = ['url(img/thunderstorm_hot/1.gif)', 'url(img/thunderstorm_hot/2.gif)', 'url(img/thunderstorm_hot/3.gif)', 'url(img/thunderstorm_hot/4.gif)', 'url(img/thunderstorm_hot/5.gif)', 'url(img/thunderstorm_hot/6.gif)', 'url(img/thunderstorm_hot/7.gif)', 'url(img/thunderstorm_hot/8.gif)', 'url(img/thunderstorm_hot/9.gif)', 'url(img/thunderstorm_hot/10.gif)']

var error = ['url(img/error/1.gif)', 'url(img/error/2.gif)', 'url(img/error/3.gif)', 'url(img/error/4.gif)', 'url(img/error/5.gif)', 'url(img/error/6.gif)', 'url(img/error/7.gif)', 'url(img/error/8.gif)', 'url(img/error/9.gif)', 'url(img/error/10.gif)']

function gen (lst) {
  var rand = Math.floor((Math.random() * 10))
  document.getElementById('bg').style.backgroundImage = lst[rand]
}
// ============================================================
// Get Weather Function
// ============================================================

async function getWeather (city, key, units = 'imperial') {
  try {
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${key}`)
    const data = await r.json()

    // Reset body class
    document.body.classList = ''

    // Clear Error
    errorBox.classList.add('dn')

    // Set Location Data
    locationName.innerText = data.name || ''
    country.innerText = data.sys.country

    // Set Temperature Data
    temp.innerText = Math.round(data.main.temp)
    tempMin.innerText = Math.round(data.main.temp_min)
    tempMax.innerText = Math.round(data.main.temp_max)

    // Set Temperature Body Class
    if (data.main.temp < 45) {
      document.body.classList.add('cold')
    } else if (data.main.temp >= 45 && data.main.temp <= 75) {
      document.body.classList.add('warm')
    } else {
      document.body.classList.add('hot')
    }

    // Set Weather Data
    condition.innerText = data.weather[0].main
    conditionDescription.innerText = data.weather[0].description
    windSpeed.innerText = Math.round(data.wind.speed)

    // Set Weather Body Class
    document.body.classList.add(data.weather[0].main.toLowerCase())

    // Set Wind Body Class
    if (data.wind.speed > 10 && data.wind.speed < 20) {
      document.body.classList.add('breezy')
    } else if (data.wind.speed >= 20) {
      document.body.classList.add('windy')
    } else {
      document.body.classList.add('calm')
    }

    if (document.body.classList.contains('clouds')) {
      if (data.main.temp < 45) {
        gen(clouds_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(clouds_warm)
      } else {
        gen(clouds_hot)
      }
    } else if (document.body.classList.contains('clear')) {
      if (data.main.temp < 45) {
        gen(clear_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(clear_warm)
      } else {
        gen(clear_hot)
      }
    } else if (document.body.classList.contains('drizzle')) {
      if (data.main.temp < 45) {
        gen(drizzle_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(drizzle_warm)
      } else {
        gen(drizzle_hot)
      }
    } else if (document.body.classList.contains('rain')) {
      if (data.main.temp < 45) {
        gen(rain_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(rain_warm)
      } else {
        gen(rain_hot)
      }
    } else if (document.body.classList.contains('snow')) {
      if (data.main.temp < 45) {
        gen(snow_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(snow_warm)
      } else {
        gen(snow_hot)
      }
    } else {
      if (data.main.temp < 45) {
        gen(thunderstorm_cold)
      } else if (data.main.temp >= 45 && data.main.temp <= 75) {
        gen(thunderstorm_warm)
      } else {
        gen(thunderstorm_hot)
      }
    }

    // Log data from the API to the console
    console.log(data)
  } catch (e) {
    console.error(e)
    errorBox.classList.remove('dn')
  }
}

// ============================================================
// Listen for form submission
// ============================================================

locationSearch.addEventListener('submit', function (e) {
  area = document.querySelector('#area').value || 'Boston'

  // Run the getWeather function
  getWeather(area, APIKEY)

  // Prevent the default behavior of the form
  e.preventDefault()
})

// ============================================================
// Get weather on page load
// ============================================================

getWeather(area, APIKEY)

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

convertBtn.addEventListener('click', function convertNumber() {
    const number = inputEl.value
    const feet = (number * 3.281).toFixed(2)
    const meter = (number / 3.281).toFixed(2)
    const gallon = (number * 0.264).toFixed(2)
    const liters = (number / 0.264).toFixed(2)
    const pound = (number * 2.204).toFixed(2)
    const kilo = (number / 0.264).toFixed(2)

    const lengthConversion = `${number} meters = ${feet} feet | ${number} feet = ${meter} meters`
    const volumeConversion = `${number} liters = ${gallon} gallons | ${number} gallons = ${liters} liters`
    const massConversion = `${number} kilos = ${pound} pounds | ${number} pounds = ${kilo} kilos`

    lengthEl.innerHTML = lengthConversion
    volumeEl.innerHTML = volumeConversion
    massEl.innerHTML = massConversion
})
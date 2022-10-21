const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const meterToFeet =  3.281 // 1 meter = 3.281 feet
const literToGallon =  0.264 // 1 liter = 0.264 gallon
const kiloToPound =  2.204 // 1 kilogram = 2.204 pound

convertBtn.addEventListener('click', function convertNumber() {
    const baseValue = inputEl.value
    const feet = (baseValue * meterToFeet).toFixed(2) // if the variable was a string, I needed to convert it to a number variable using the Number() method
    const meter = (baseValue / meterToFeet).toFixed(2)
    const gallon = (baseValue * literToGallon).toFixed(2)
    const liters = (baseValue / literToGallon).toFixed(2)
    const pound = (baseValue * kiloToPound).toFixed(2)
    const kilo = (baseValue / kiloToPound).toFixed(2)

    const lengthConversion = `${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meter} meters`
    const volumeConversion = `${baseValue} liters = ${gallon} gallons | ${baseValue} gallons = ${liters} liters`
    const massConversion = `${baseValue} kilos = ${pound} pounds | ${baseValue} pounds = ${kilo} kilos`

    lengthEl.innerHTML = lengthConversion
    volumeEl.innerHTML = volumeConversion
    massEl.innerHTML = massConversion
})
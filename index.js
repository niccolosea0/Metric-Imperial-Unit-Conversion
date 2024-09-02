let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value // Whatever we type in input will be our base value

    //Convert first Section (length)
    lengthEl.textContent = 
    `
    ${baseValue} meters = ${ Number(baseValue * 3.281).toFixed(3) } feet | 
    ${baseValue} feet =   ${ Number(baseValue / 3.281).toFixed(3) } meters
    `
    //Convert second section (Volume)
    volumeEl.textContent = 
    `
    ${baseValue} liters =  ${Number(baseValue * 0.264).toFixed(3)} gallons | 
    ${baseValue} gallons = ${Number(baseValue / 0.264).toFixed(3)} liters
    `
    //Convert third section (Mass)
    massEl.textContent = 
    `
    ${baseValue} kilos  =  ${Number(baseValue * 2.204).toFixed(3)} pounds | 
    ${baseValue} pounds = ${Number(baseValue / 2.204).toFixed(3)} kilos 
    `
})
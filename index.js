const convertBtn = document.getElementById("convert-btn")
const numInput = document.getElementById("num-input")
const textLength = document.getElementById("text-length")
const textVolume = document.getElementById("text-volume")
const textMass = document.getElementById("text-mass")

convertBtn.addEventListener("click", function(){
    convertLength()
    convertVolume()
    convertMass()
})
function convertLength() {
    let oneMeter = 3.281 
    let feetInMeter = numInput.value * oneMeter
    let metersInFeet = numInput.value / oneMeter
    textLength.textContent = `${numInput.value} meters = ${feetInMeter.toFixed(3)} feet 
                        | ${numInput.value} feet = ${metersInFeet.toFixed(3)} meters`
}
function convertVolume() {
    let oneliter = 0.264 
    let literInGalon = numInput.value * oneliter
    let galonInLiter = numInput.value / oneliter
    textVolume.textContent = `${numInput.value} liters = ${literInGalon.toFixed(3)} gallons
                        | ${numInput.value} gallons = ${galonInLiter.toFixed(3)} liters`

}
function convertMass() {
    let onekilogram = 2.204 
    let kilogramInPound = numInput.value * onekilogram
    let poundInKilogram = numInput.value / onekilogram
    textMass.textContent = `${numInput.value} kilos = ${kilogramInPound.toFixed(3)} pounds
                        | ${numInput.value} pounds = ${poundInKilogram.toFixed(3)} kilos`

}
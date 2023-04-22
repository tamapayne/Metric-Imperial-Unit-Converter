/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



let btn = document.getElementById('inputbtn')
const meterAns = document.getElementById('meter-outpt') 
const volumeAns = document.getElementById('volume-outpt')
const massAns = document.getElementById('mass-outpt')

btn.addEventListener('click', function () {
    let num = document.getElementById("number").value 
    meterAns.innerHTML = `${num} meters = ${(num * 3.281).toFixed(2)} feet | ${num} feet = ${(num / 3.281).toFixed(2)} meters`
    volumeAns.innerHTML = `${num} litres = ${(num / 0.264).toFixed(2)} gallons | ${num} gallons = ${(num / 3.785).toFixed(2)} litres`
    massAns.innerHTML = `${num} kilos = ${(num * 2.204).toFixed(2)} pounds | ${num} pounds = ${(num / 2.204).toFixed(2)} kilos`
})



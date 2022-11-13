import data from './data.json'
import './style.css'
const containerBars = document.querySelector('.container-bars')

// const totalAmounts = amounts => {
//   let total = 0
//   amounts.forEach(amount => {
//     total = total + amount
//   })
//   return total
// }

// const totalAmount = totalAmounts(data.map(day => day.amount))
data.forEach(function (day) {
  let porcent = day.amount * 2

  let bar = `
  <div class="container-bar">
    <div class="div-bar">
      <span>${day.day}</span>
      <div style="height:${porcent}%" amount="$${day.amount}" class="bar"></div>
    </div> 
  </div>`

  containerBars.innerHTML += bar
})

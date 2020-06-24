// Month array
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// Get current months
const month = new Date().getMonth()

const monthTitle = document.querySelector(".budget__title--month")

monthTitle.innerHTML = months[month]


// Setting Available amount
const incomeValue = document.querySelector(".budget__income--value")
const expenseValue = document.querySelector(".budget__expenses--value")
const budgetValue = document.querySelector(".budget__value")

budgetValue.innerHTML = (parseFloat(((incomeValue.innerText).match(/[\d\.]+/))[0]) - parseFloat(((expenseValue.innerText).match(/[\d\.]+/))[0])).toFixed(2)

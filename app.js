import { addItem } from "./income_item.js";

// Month array
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

// Get current months
const month = new Date();

const monthTitle = document.querySelector(".budget__title--month");

monthTitle.innerHTML = months[month.getMonth()] + " " + month.getFullYear();

// Setting Available amount
// const incomeValue = document.querySelector(".budget__income--value"); // Total Value
// const expenseValue = document.querySelector(".budget__expenses--value"); // Expense value
// const budgetValue = document.querySelector(".budget__value"); // Income Value
// budgetValue.innerHTML = (
// 	parseFloat(incomeValue.innerText.match(/[\d\.]+/)[0]) -
// 	parseFloat(expenseValue.innerText.match(/[\d\.]+/)[0])
// ).toFixed(2);

// adding income item to list of income.
document.querySelector(".add__btn").addEventListener("click", addItem);

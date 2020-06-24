let addItem = function () {
	const option = document.querySelector(".add__type");
	const description = document.querySelector(".add__description");
	const amt = document.querySelector(".add__value");

	const expenseValue = document.querySelector(".budget__expenses--value"); // Expense value
	const incomeValue = document.querySelector(".budget__income--value"); // Income Value
	const budgetValue = document.querySelector(".budget__value"); // Income Value

	if (option.value == "inc") {
		if (description.value != "" && amt.value != "") {
			incomeValue.innerHTML =
				"+ " +
				(
					parseFloat(incomeValue.innerText.match(/[\d\.]+/)[0]) +
					parseFloat(amt.value)
				)
					.toFixed(2)
					.toString();
			const income_list = document.querySelector(".income__list"); // income list

			// Income item is created
			const incomeItem = document.createElement("div");
			incomeItem.className = "item clearfix";

			// Description tag is created
			const income_description = document.createElement("div");
			income_description.className = "item__description";
			income_description.textContent = description.value;

			// amount tag is created
			const incomeAmount = document.createElement("div");
			incomeAmount.className = "right clearfix";

			const amount = document.createElement("div");

			amount.className = "item__value";
			amount.textContent = "+ " + parseFloat(amt.value).toFixed(2);

			const del_btn = document.createElement("div");
			del_btn.className = "item__delete";

			const btn = document.createElement("button");
			btn.className = "item__delete--btn";
			btn.setAttribute("onclick", "deleteIncomeItem(this)");
			let iEl = document.createElement("i");
			iEl.className = "ion-ios-close-outline";
			btn.appendChild(iEl);
			del_btn.appendChild(btn);

			incomeAmount.appendChild(amount);
			incomeAmount.appendChild(del_btn);

			incomeItem.appendChild(income_description);
			incomeItem.appendChild(incomeAmount);

			income_list.appendChild(incomeItem);
		}
	} else {
		if (description.value != "" && amt.value != "") {
			expenseValue.innerHTML =
				"- " +
				(
					parseFloat(expenseValue.innerText.match(/[\d\.]+/)[0]) +
					parseFloat(amt.value)
				)
					.toFixed(2)
					.toString();

			const expenses_list = document.querySelector(".expenses__list"); // Expenses list

			// Income item is created
			const incomeItem = document.createElement("div");
			incomeItem.className = "item clearfix";

			// Description tag is created
			const income_description = document.createElement("div");
			income_description.className = "item__description";
			income_description.textContent = description.value;

			// amount tag is created
			const incomeAmount = document.createElement("div");
			incomeAmount.className = "right clearfix";

			const amount = document.createElement("div");

			amount.className = "item__value";
			amount.textContent = "- " + parseFloat(amt.value).toFixed(2);

			const percentage = document.createElement("div");
			percentage.className = "item__percentage";
			percentage.textContent =
				Math.round(
					parseFloat(amt.value) /
						(parseFloat(incomeValue.innerText.match(/[\d\.]+/)[0]) / 100)
				).toString() + "%";

			const del_btn = document.createElement("div");
			del_btn.className = "item__delete";

			const btn = document.createElement("button");
			btn.className = "item__delete--btn";
			btn.setAttribute("onclick", "deleteExpensesItem(this)");
			let iEl = document.createElement("i");
			iEl.className = "ion-ios-close-outline";
			btn.appendChild(iEl);
			del_btn.appendChild(btn);

			incomeAmount.appendChild(amount);
			incomeAmount.appendChild(percentage);
			incomeAmount.appendChild(del_btn);

			incomeItem.appendChild(income_description);
			incomeItem.appendChild(incomeAmount);

			expenses_list.appendChild(incomeItem);
		}
	}
	budgetValue.innerHTML = (
		parseFloat(incomeValue.innerText.match(/[\d\.]+/)[0]) -
		parseFloat(expenseValue.innerText.match(/[\d\.]+/)[0])
	).toFixed(2);

	description.value = "";
	amt.value = "";
};

export { addItem };

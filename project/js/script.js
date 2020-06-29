'use strict'

let start_btn = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudget_value = document.getElementsByClassName('daybudget-value')[0];
let level_value = document.getElementsByClassName('level-value')[0];
let expenses_value = document.getElementsByClassName('expenses-value')[0];
let optionalexpenses_value = document.getElementsByClassName('optionalexpenses-value')[0];
let income_value = document.getElementsByClassName('income-value')[0];
let monthsavings_value = document.getElementsByClassName('monthsavings-value')[0];
let yearsavings_value = document.getElementsByClassName('yearsavings-value')[0];

let expenses_item = document.getElementsByClassName('expenses-item');

let btn1 = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[1];
let btn3 = document.getElementsByTagName('button')[2];
 
let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let choose_income = document.querySelector('.choose-income');
let checksavings = document.querySelector("#savings");
let sumValue = document.querySelector("#sum");
let percentValue = document.querySelector("#percent");
let year_value = document.querySelector('.year-value');
let month_value = document.querySelector('.month-value');
let day_value = document.querySelector('.day-value');


let money, time;


start_btn.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", " ");
	money = +prompt("Ваш бюджет на месяц?", " "); 

	while ( isNaN(money) || money == null || money == '') {
		money = +prompt('Введите бюджет на месяц', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year_value.value = new Date(Date.parse(time)).getFullYear();
	month_value.value = new Date(Date.parse(time)).getMonth() + 1;
	day_value.value = new Date(Date.parse(time)).getDate();
});

btn1.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expenses_item.length; i++) {
		let a = expenses_item[i].value,
			b = expenses_item[++i].value;

		if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b; 
			sum += +b;
		} else {
			  i = i - 1;
		}
	}
	expenses_value.textContent = sum;
});

btn2.addEventListener('click', function() {
	for (let i = 0; i < optionalexpenses_item.length; i++) {
		let questionOptExpenses = optionalexpenses_item[i].value;
		appData.optionalExpenses[i] = questionOptExpenses;
		optionalexpenses_value.textContent += appData.optionalExpenses[i] + ' '; 
	}
});

btn3.addEventListener('click', function() {

	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		daybudget_value.textContent = appData.moneyPerDay;
	
		if (appData.moneyPerDay < 100) {
			level_value.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
			level_value.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			level_value.textContent = 'Высокий уровент достатка';
		} else {
			level_value.textContent = 'Произошла ошибка';
		}

	} else {
		daybudget_value.textContent = 'Произошла ошибка';
	}
});

choose_income.addEventListener('input', function() {
	let items = choose_income.value;
	appData.income = items.split(', ');
	income_value.textContent = appData.income;
});

checksavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthsavings_value.textContent = appData.monthIncome.toFixed(1);
		yearsavings_value.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthsavings_value.textContent = appData.monthIncome.toFixed(1);
		yearsavings_value.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};		
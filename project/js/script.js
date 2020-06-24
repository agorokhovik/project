'use strict'

let start_btn = document.getElementById('start');

let budget_value = document.getElementsByClassName('budget-value');
let daybudget_value = document.getElementsByClassName('daybudget-value');
let level_value = document.getElementsByClassName('level-value');
let expenses_value = document.getElementsByClassName('expenses-value');
let optionalexpenses_value = document.getElementsByClassName('optionalexpenses-value');
let income_value = document.getElementsByClassName('income-value');
let monthsavings_value = document.getElementsByClassName('monthsavings-value');
let yearsavings_value = document.getElementsByClassName('yearsavings-value');

let expenses_item = document.getElementsByClassName('expenses-item');

let btn1 = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[1];
let btn3 = document.getElementsByTagName('button')[2];
 
let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let choose_income = document.querySelector('.choose-income');
let checksavings = document.querySelector("#savings");
let sumValue = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let year_value = document.querySelector('.year-value');
let month_value = document.querySelector('.month-value');
let day_value = document.querySelector('.day-value');


let money, time

function start() {
	money = +prompt("Ваш бюджет на месяц?", " "); 
	time = prompt("Введите дату в формате YYYY-MM-DD", " ");

	while ( isNaN(money) || money == null || money == '') {
		money = +prompt('Введите бюджет на месяц', '');
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
				b = prompt('Во сколько обойдется?', '');
	
			if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
			  	console.log('done');
			 	appData.expenses[a] = b; 
			} else {
			  	i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);
		alert('Ежедневный бюджет: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
			console.log('Средний уровень достатка');
			} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровент достатка');
			} else {
			console.log('Произошла ошибка');
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');
	
			appData.monthIncome = save / 100 / 12 * percent;
			alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
		}
	},
	ChooseOptExpenses: function() {
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = prompt('Cтатья необязательных расходов?', '');
			
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		while (typeof(items) == 'Number' || typeof(items) == null || items == '') {
			items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();

		appData.income.forEach(function(item, i) {
			alert('Cпособы доп. заработка: ' + (i+1) + ' - ' + item);
		});	
	}
};

for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
};
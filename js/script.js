'use strict'

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
	savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

/*for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
  		b = prompt('Во сколько обойдется?', '');
  	if (i == 2) {
		break
  	}

  	if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
  		console.log('done');
 		appData.expenses[a] = b; 
  	} else {
  		i--;
  	}
};*/

/*for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
  		b = prompt('Во сколько обойдется?', '');
  	if (i == 1) {
		continue
  	}

  	if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
  		console.log('done');
 		appData.expenses[a] = b; 
  	} else {
  		i--;
  	}
};*/

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровент достатка');
	} else {
	console.log('Произошла ошибка');
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = save / 100 / 12 * percent;
		alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
	}
}

checkSavings();

function ChooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
		let questionOptExpenses = prompt('Cтатья необязательных расходов?', '');
		
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}
ChooseOptExpenses();
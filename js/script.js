'use strict'

let money = +prompt("Ваш бюджет на месяц?", " "); 
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");


while ( isNaN(money) || money == null || money == '') {
	money = +prompt('Введите Ваш бюджет на месяц', '');
}

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
  		b = prompt('Во сколько обойдется?', '');

  	if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
  		console.log('done');
 		appData.expenses[a] = b; 
  	} else {
  		i--;
  	}
};

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

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровент достатка');
} else {
	console.log('Произошла ошибка');
}

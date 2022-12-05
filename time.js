function checkResult1() {
let options = {
	width:  400,
	height: 500,
};	
let {width, height} = options;
let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}
console.log(width, height, color);
}

function checkResult2() { 
let options = {
    width: 400,
	height: 500,
	color: 'red'
};
let {width:w, height:h, color:c} = options;
let с;
if (options.с !== undefined) {
	с = options.color;
} else {
    с = 'black';
}
           
console.log(w, h, c);
}

function checkResult3() {
function func([name,surname, department, position,salary]) {
	console.log(name);
	console.log(surname);
	console.log(salary);
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );
}

function checkResult4() {
function func([name,surname, department, ...info]) {
	console.log(name);
	console.log(surname);
	console.log(info);
}
func( ['John', 'Smit', 'development', 'programmer', 2000] );
}

function checkResult5() {
function func([name, surname, department='джуниор']) {
      
    console.log(name);
	console.log(department);
    }
               
func( ['John', 'Smit'] );
}
function checkResult6() {

function func(department, [name, surname], [year, month, day]) {
	console.log(name);
	console.log(year);
    }
            
func( 'development', ['John', 'Smit'], [2018, 12, 31] );
}

function checkResult7() {
	function func({ color, width, height }) {
		console.log(color);
		console.log(width);
	}
func( {color: 'red', width: 400, height: 500} );
}

function checkResult8() {
	function func({color='black', width, height}) {
	console.log(color);
  	console.log(height);
  }
func( {color: 'red', width: 400, height: 500} );
}

function checkResult9() {
new Date();
let date = new Date();
console.log(date.getFullYear()); // год
console.log(date.getMonth()+1);    // месяц
console.log(date.getDate());     // день
}
function checkResult10() {
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
	}
	
	let date = new Date();
		console.log(date.getHours()+':'+ date.getMinutes()+':'+ date.getSeconds()+' '+ addZero(date.getDate()) + '.' + 
	addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear()));    
	
}
	
function checkResult11() {
	let str = '2025-12-31';
	let res = str.split('-').reverse().join('.');
	console.log(res); // получим строку '31.12.2025'
}

function checkResult12() {

let date = new Date();
	console.log(date.getDay());
	let today = date.getDay;
	if (today == 0 || today == 6)
		console.log('сегодня выходной');
	else console.log('сегодня будний день');

	let ammount = 6 - today;
	console.log('До выходного осталось' + ammount + 'дней');

}
function checkResult13() {
 	let months = [
                'янв', 'фев', 'мар', 'апр', 'май', 'июн',
                'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
	];
	let date = new Date();
	let month = date.getMonth();
	console.log(months[month]);
}
function checkResult14() {
let date = new Date(1980, 7, 31); 
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);
}

function checkResult15() {
let date = new Date(2025, 0, 1);
console.log(date.getTime());
}

function checkResult16() {
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff/(1000*60*60*24)+' дня');

}
function checkResult17() {
	


	
}

function checkResult18() {
	function monthDiff(dateFrom, dateTo) {
 	return dateTo.getMonth() - dateFrom.getMonth() + 
   	(12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
	console.log(monthDiff(new Date(2012, 01), new Date(2022, 02)))
}

function checkResult19() {
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff/(1000*60*60*24)+' дня');
}

function checkResult20() {
	let date1 = new Date();
	let date2 = new Date(2021, 5, 12);
	let year1 = date1.getFullYear();
	let year2 = date2.getFullYear();
	let diff = year1 - year2;
	console.log(diff);
}

function checkResult21() {
	function getLastmonthDay(month, year) {
	let date = new Date(year, month, 0);
   	let LastDay = date.getDate();
		return LastDay;
	}
	let LastDay1 = getLastmonthDay(12,2022)
	console.log(LastDay1);
}
function checkResult22() {
let date = new Date(2025, 5, 0);
	function getWeekDay(date1) {
  	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	return days[date1.getDay()];
}
console.log( getWeekDay(date) ); // ПТ
}
function checkResult23() {
	function isLeap(year) {
	let date = new Date(year, 2, 0);
	if (date.getDate() == 29) {
	console.log('високосный');
	} else {
	console.log('обычный');
	}
	}
	isLeap(2024);
}
	
function checkResult24() {
	function checkDate(year, month, day) {
		let date = new Date(year, month, day);
	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
	console.log('корректна');
} else {
	console.log('некорректна');
}
	}
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false
}

function checkResult25() {
	let now  = new Date(); // получаем текущий момент
	let date = new Date(now.getFullYear(),11, 31); // получаем нашу дату
	console.log(date.getDay());
	let a = date.getDay();
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	console.log(days[a]);
}
function checkResult26() {
	let now  = new Date();
	let date = new Date(now.getFullYear(), now.getMonth(), 1);
	let a = date.getDay();
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	console.log(days[a]);
}

function checkResult27() {

let now  = new Date();
	let date = new Date(now.getFullYear()+1, 11, 31);
	let a = date.getDay();
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	console.log(days[a]);
}

function checkResult28() {
	let now  = new Date();
	let date = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
	let a = date.getDay();
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	console.log(days[a]);
}
function checkResult29() {
	let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth()+1, 10);

	console.log((date1 - date2)/(1000*60*60*24)); // разность 
}
function checkResult30() {
let now  = new Date();
	let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
	let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
	console.log((date2 - date1)/(1000*60*60));
}

function checkResult31() {
let now  = new Date();
	let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
	console.log((date2 - date1)/(1000*60*60));
}
function checkResult32() {
let now  = new Date();
	let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
	let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
console.log((date1 - date2)/(1000*60*60));
}

function checkResult33() {
let now  = new Date();
let year = now.getFullYear();
let count = 0;
for (let year1 = 2000; year1 <= year; year1++) {
	let date = new Date(year1, 0, 1);
	if ((date.getDay() == 0)||(date.getDay() == 6)) {
	count = count + 1;
	}
		}
	console.log(count);
}

function checkResult34() {
	let now  = new Date();
	let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
	console.log((date2 - date1))/1000;
}

function checkResult35() {
	let now = new Date();
	let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0 );
	let diff = (date - now) / 1000;
	console.log(diff);
}

function checkResult36() {
	let now = new Date();
	let NewYear = new Date(now.getFullYear()+1, 0, 1);
	let diff = (NewYear - now) / (1000 * 60 * 60 * 24);
	console.log(Math.round(diff));
}

function checkResult37() {
let now  = new Date();
	let year = now.getFullYear();
	let count = 0;
	for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 13);
	if ((date.getDay() == 5)) {
	count = count + 1;
	}
		}
	console.log(count);
}

function checkResult38() {
	let now = new Date();
	let date = new Date(now.getFullYear(), now.getMonth() - 3);
	console.log(date.getFullYear());
}

function checkResult39() {
	let now = new Date();
	let date = new Date(now.getFullYear(), now.getMonth()+1, 0);
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	let a = date.getDay();
	console.log(days[a]);
}
	
function checkResult40() {
	let now = new Date();
	
for (year = now.getFullYear(); year >= now.getFullYear() - 4; year--) {
  let date = new Date(year, 2, 0);
  if (date.getDate() === 29) {
    console.log(year + ' предыдущий високосный год');
    break;
}};
}

function checkResult41() {

let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2 === true) {
  console.log(date1 + ' больше' + date2);
} else {
  console.log(date2 + ' больше'+ date1);
};
	
}

function checkResult42() {
	let now = new Date();
	let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
if (now > date1 === true) {
  console.log('полдень уже был');
} else {
  console.log('полдень будет');
};
}
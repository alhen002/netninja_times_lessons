// // dates & times
// // Date is a constructor function for dates
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // years, months, day, times

// console.log('getFullYear', now.getFullYear());
// console.log('getMonth', now.getMonth()); // array based output as integer
// console.log('getDate', now.getDate());
// console.log('getDay', now.getDay()); // array based output as integer
// console.log('getHours', now.getHours());
// console.log('getMinutes', now.getMinutes());
// console.log('getSeconds', now.getSeconds());

// // date strings

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());


// // Time Stamps

// // timestamp - number of ms since 01. jan 1970

// // erstellt ein neues date object mit entsprechendem input
// const before = new Date('January 1 2023 7:30:59');

// //console.log('timestamp:', now.getTime(), before.getTime());
// // errechnet den unterschied zwischen dem alten datum und jetzt
// const diff = now.getTime() - before.getTime();
// console.log(diff);
// // umrechnen in minutes
// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);
// console.log('Minutes: ' + mins);
// console.log('Hours: ' + hours);
// console.log('days: ' + days);

// // Converting timestamp into dates-object

// const timestamp = 1675938474990;
// console.log(new Date(timestamp));


// date fns die neuen versionen gehen nur noch über import also unbedingt anschauen wie das geht
const now = new Date();
// console.log(dateFns.isToday(now));

// formating options

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'))


// comparing dates
const before = new Date('January 3 2023 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))



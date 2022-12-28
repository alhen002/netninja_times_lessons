// dates & times
// Date is a constructor function for dates
const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, day, times

console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());


// timestamp - number of ms since 01. jan 1970

console.log('timestamp', now.getTime()); 

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
const url = require('url');

const myUrl = new URL('https://icesplendnet:8000/home?id=100&name=allen');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (w/o port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized queries
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('age', '19');
console.log(myUrl.href);
console.log(myUrl.searchParams);

// Loop-1
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

// Loop-2
const mS = myUrl.searchParams;
for (let [key, value] of mS) {
	console.log(`${key}: ${value}`);
}

myUrl.searchParams.forEach((key, value) => console.log(`${key}: ${value}`));
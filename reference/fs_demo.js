const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
// 	if(err) throw err;

// 	console.log('Dir created');
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'text'), 'written from node', err => {
// 	if (err) throw err;
// 	console.log('File created');

	// fs.appendFile(path.join(__dirname, 'test', 'text'), 'append', err => {
	// 	if (err) throw err;
	// 	console.log('successfully append File');
	// })
// })

// Read file
fs.readFile(path.join(__dirname, 'test', 'text'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
})

// Rename file
fs.rename(path.join(__dirname, 'test', 'text'), path.join(__dirname, 'test', 'Rename'), err => {
	if(err) throw err;
	console.log('successfully rename');
})
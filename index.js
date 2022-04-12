const http = require("http");
const path = require("path");
const fs = require("fs");
const { resolveSoa } = require("dns");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if (req.url === '/') {
    // 	fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    // 		if (err) throw err;

    // 		// Create Content-Type
    // 		res.writeHead(200, {'Content-Type': 'text/html'})
    // 		res.end(data)
    // 	})

    // } else if (req.url === '/about') {
    // 	fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
    // 		if (err) throw err;

    // 		// Create Content-Type
    // 		res.writeHead(200, {'Content-Type': 'text/html'})
    // 		res.end(data)
    // 	})

    // } else if (req.url === '/api/users') {
    // 	const users = [
    // 		{
    // 			name: 'Allen Wang',
    // 			age: 30
    // 		},
    // 		{
    // 			name: 'John Processor',
    // 			age: 40
    // 		}
    // 	];
    // 	res.writeHead(200, {'Content-Type': 'application/json'})
    // 	res.end(JSON.stringify(users));
    // }

    // Build filePath
    const filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );
    console.log(filePath);

    // Extension
    let extname = path.extname(filePath);

    // Initial contentType
    let contentType = "text/html";

    switch (extname) {
        case ".js":
            contentType = "text/js";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".jpg":
            contentType = "img/jpg";
            break;
        case ".png":
            contentType = "img/png";
            break;
    }

    // Read file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Page not found
            if (err.code == "ENOENT") {
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, data) => {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.end(data, "utf-8");
                    }
                );
            } else {
                // Some Server Error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data, "utf-8");
        }
    });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running at port ${PORT}...`));


const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.sendFile(__dirname+ '/public/index.html'));


app.listen(PORT, function() {
	console.log("app listening on: http://localhost" + PORT);
});

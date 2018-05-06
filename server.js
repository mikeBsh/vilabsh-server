const express= require('express');
var getBrowserLanguage = require('get-browser-language');

const port = process.env.PORT || 3000;
var app= express();

var lang = getBrowserLanguage()

// app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{

	res.send(lang);
});

app.listen(port, () =>{
	console.log(`server running on port ${port}`);
});
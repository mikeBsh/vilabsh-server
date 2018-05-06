const express= require('express');
var locale = require('browser-locale')();

const port = process.env.PORT || 3000;
var app= express();



// app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{

	res.send(locale);
});

app.listen(port, () =>{
	console.log(`server running on port ${port}`);
});
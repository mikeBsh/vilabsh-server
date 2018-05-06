const express= require('express');
var envLang = require("env-lang");

const port = process.env.PORT || 3000;
var app= express();


// app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{

	if(envLang === 'el_GR'){
		res.send('<h1> Καλως ηρθατε /h1>');
	}else{
		res.send('<h1> welcome english speaking person</h1>');
	}
});

app.listen(port, () =>{
	console.log(`server running on port ${port}`);
});
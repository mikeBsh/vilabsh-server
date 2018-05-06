const express= require('express');
var envLang = require("env-lang");

const port = process.env.PORT || 3000;
var app= express();


if(envLang === 'el_GR'){
	res.send('<h1> haha</h1>');
	console.log('Καλως ηρθατε στην ελλαδα!!');
}else{
	console.log('Welcome in an english speaking language');
}

// app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{
	res.send('<h1> Home page</h1>');
});

app.listen(port, () =>{
	console.log(`server running on port ${port}`);
});
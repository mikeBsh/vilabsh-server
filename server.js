const express= require('express');


const port = process.env.PORT || 3000;
var app= express();




// app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res)=>{
	res.send('<h1> Home page</h1>');
});

app.listen(port, () =>{
	console.log(`server running on port ${port}`);
});
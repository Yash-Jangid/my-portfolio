const http = require( 'http' );
var url = require('url');
const express = require('express');
const app = express();
http.createServer( function ( req, res ) {
    res.writeHead(200 ,{'Content-type':'application/json'} );
    res.write(JSON.stringify({name:'yash',email:'yash@hmail.com'}))
}).listen( 3000 );

const SECRET_KEY = 'Yash'; // Define your secret key

app.get('/demo', function(req, res) {
    const secretKeyHeader = req.headers['secret_key'];
    if (secretKeyHeader === SECRET_KEY) {
        res.set('Secret-Key', SECRET_KEY);
        res.status(200).json({ name: 'yash', email: 'yash@hmail.com', number: '8078641994' });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});




app.listen(3001)
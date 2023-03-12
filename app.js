/* require the two packages: express and body-parser */
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // app constant using express

app.use('view engine', 'ejs'); // tells the app to use EJS as the view engine.


/* GET route to SEND to the browser the word 'Hello' when the user 
access the home route file "/" */
app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

/* note: res.send only allows one line of message. Use res.write for multiple messages. */

    if (currentDay === 6 || currentDay === 0) {
        // res.write('<h1>Awesome is the weekend</h1>');
        // res.write('I am so happy!!') ;
        // res.write('whoohooo!!!');
        // res.end();
        res.sendFile(__dirname + '/index.html')
    }
    else {
        res.send('Boo! still week day');
    }
    
});


/* the app is listening to port 3000 or localhost:3000 */
app.listen(3000, function(){
    console.log('server started on port 3000');
});
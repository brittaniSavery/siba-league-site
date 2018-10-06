const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.listen(port, () => console.log('Listening on port ${port}'));

//create a GET route
app.get('/', (req, res) => {
    res.send({ express: 'BACK END IS UP! XD'})
});
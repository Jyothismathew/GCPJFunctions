const express = require('express')
const Router = require('express-promise-router');
const country = require('./app/controller/getCountry')
const bodyParser = require('body-parser')
const app = express();
const router = Router()
app.use(router)
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const PORT = 5555;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/countries', country.getCountries);

module.exports = {
    app
};
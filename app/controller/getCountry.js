const COUNTRY =[
    {
        "country": "Afghanistan",
        "calling_code": 93
    },
    {
        "country": "Albania",
        "calling_code": 355
    },
    {
        "country": "Algeria",
        "calling_code": 213
    },
    {
        "country": "American Samoa",
        "calling_code": 1684
    },
    {
        "country": "Andorra",
        "calling_code": 376
    },
    {
        "country": "Angola",
        "calling_code": 244
    },
    {
        "country": "Anguilla",
        "calling_code": 1264
    },
    {
        "country": "Antarctica",
        "calling_code": null
    },
    {
        "country": "Antigua and Barbuda",
        "calling_code": 1268
    }
];

const getCountries = (req,res) => {
    const {query}  = req 
    res.send(COUNTRY[query.page]);

}
module.exports = {
    getCountries
}
const keys = {
    MongoURI: "mongodb+srv://abdo123:abdo456@cluster0.lgvs4.mongodb.net/Projects-db?retryWrites=true&w=majority",
    // port: process.env.PORT ||5000,
    port: 5000,
    domainName : ["http://localhost",`${3000}/r`].join(':')
}
module.exports = keys;

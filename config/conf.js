const keys = {
    MongoURI: "mongodb+srv://abdo123:abdo456@cluster0.lgvs4.mongodb.net/Projects-db?retryWrites=true&w=majority",
    // port: process.env.PORT ||5000,
    port: 5000,
    domainName : ["http://loclhost",`${5000}`].join(':')
}
module.exports = keys;

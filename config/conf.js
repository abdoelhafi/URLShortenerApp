const keys = {
    MongoURI: "mongodb+srv://abdo123:abdo456@cluster0.lgvs4.mongodb.net/Projects-db?retryWrites=true&w=majority",
    // port: process.env.PORT ||5000,
    port: 5000,
    domainName : ["http://localhost",`${3000}/r`].join(':'),
    // google auth
    GOOGLE_CLIENT_ID:"934628940103-4g93p2vv22dbb6j5pcbkjj31c9i660qp.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "65aiijFrbYELlhB7Hw3MdxUA"
}
module.exports = keys;

const dotenv = require('dotenv')
dotenv.config();
process.env.NODE_ENV = (process.env.NODE_ENV && (process.env.NODE_ENV).trim().toLowerCase() === "production") ? "production" : "development";

const env = process.env;

if(env.NODE_ENV === "production") { 
    module.exports = require('./pro')
}else if(env.NODE_ENV === "development") {
    module.exports = require('./dev')
}
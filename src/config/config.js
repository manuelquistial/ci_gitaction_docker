const config = require("./config.json");


const envConfig = config["development"];
// Doesn't collect errors in development environment
Object.keys(envConfig).forEach(key => {
process.env[key] = envConfig[key];
});

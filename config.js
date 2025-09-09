const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JVxFwaYI#7IJN99YzhW1N73UvMIplDgBP-3zUwsGpX1NOr_JVXgg'
};

const {name} = require('./test');
const os = require('os')
console.log(os.platform(), os.homedir(), "??")
// console.log(BB, "BB")
module.exports = {
    name, os
}

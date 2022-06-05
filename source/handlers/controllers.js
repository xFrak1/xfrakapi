// Requerimiento de FS
const { readdirSync } = require("fs");

// Exportación del handler
module.exports = (application) => {
    readdirSync(`./source/controllers`).forEach((file) => {
        require(`../controllers/${file}`)(application);
    })
}
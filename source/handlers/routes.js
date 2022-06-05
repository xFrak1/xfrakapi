// Requerimiento de FS
const { readdirSync } = require("fs");

// Exportación del handler
module.exports = (application) => {
    readdirSync(`./source/routes/`).forEach((dir) => {
        readdirSync(`./source/routes/${dir}/`).forEach((file) => {
            require(`../routes/${dir}/${file}`)(application);
        })
    })
}
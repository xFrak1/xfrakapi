// Requerimiento de Express
const express = require("express");

// Uso de Express para la Aplicación
const application = express();

// Handler de los routes y controladores
["controllers", "routes"].forEach((handler) => {
    require(`./handlers/${handler}`)(application);
});

application.use(express.static(__dirname + '/webpage'))

// Exportación dela aplicación
module.exports = {
    application
};
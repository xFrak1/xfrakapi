// Requerimiento de Express
const express = require("express");

// Uso de Express para la Aplicación
const application = express();

application.use(express.static(__dirname + '/webpage'))

// Exportación de la aplicación
module.exports = {
    application
};

// Handler de los routes y controladores
["controllers", "routes"].forEach((handler) => {
    require(`./handlers/${handler}`)(application);
});
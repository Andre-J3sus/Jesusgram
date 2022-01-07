'use strict';

// Entry point to the server application.

module.exports = function (guest) {
    const data = require('./app-data');
    const services = require('./app-services.js')(data);
    const web_site = require('./app-web-site.js')(services, guest);

    const express = require('express');
    const app = express();

    app.set('view engine', 'hbs');

    app.use('/favicon.ico', express.static('static-files/logo.png'));
    app.use('/public', express.static('static-files'));

    app.use('/', web_site);

    return app;
};
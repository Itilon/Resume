const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config').configApp(app);

    return Promise.resolve(app);
};

module.exports = {
    init
};
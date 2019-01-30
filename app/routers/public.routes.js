const { Router } = require('express');

const attachTo = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
            res.json({msg: 'We are here'});
        })

    return router;
};

module.exports = {
    attachTo
};
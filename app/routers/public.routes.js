const { Router } = require('express');

const attachTo = (app, data) => {
    const router = new Router();

    const { items } = data;

    router
        .get('/all', async (req, res) => {
            const result = await items.getAll();

            res.json(result);
        });

    return router;
};

module.exports = {
    attachTo
};
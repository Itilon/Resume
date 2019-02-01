const init = (db) => {
    const items = require('./items.data').init(require('./models/item.model').init(db));

    return Promise.resolve({
        items
    });
};

module.exports = {
    init
};
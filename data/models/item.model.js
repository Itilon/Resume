const init = (db) => {
    const itemSchema = new db.Schema({
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        links: {
            type: Array
        }
    });

    const Item = db.model('Item', itemSchema);
    return Item;
};

module.exports = {
    init
};
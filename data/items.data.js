const init = (Item) => {
    const getAll = async () => {
        try {
            const result = await Item.find();
            return result;
        } catch(err) {
            console.error(err.message);
        }
    };

    return {
        getAll
    }
};

module.exports = {
    init
};
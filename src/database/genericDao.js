export default class GenericDao {

    constructor(model) {
        this.model = model;
    }

    findById(id, callback) {
        this.model.findById(id, callback);
    }

    /**
     * This callback is called to handle the response.
     * 
     * @callback handlerCallback
     * @param {object|null} err
     * @param {Object[]} documents - An array containing all documents of the collection.
     */

    /**
     * Finds all documents of a collection and executes the callback.
     * @param {handlerCallback} callback - The callback that handles the response.
     */
    find(callback) {
        this.model.find(callback);
    }

    save(item, callback) {
        item.save(callback);
    }

    update(item, callback) {
        this.model.findByIdAndUpdate(item._id, item, callback);
    }

    remove(id, callback) {
        this.model.findByIdAndRemove(id, callback);
    }

}
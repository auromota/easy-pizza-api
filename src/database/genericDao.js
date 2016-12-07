export default class GenericDao {

    constructor(model) {
        this.model = model;
    }

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
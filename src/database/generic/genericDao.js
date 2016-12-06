export default class GenericDao {

    save(item, callback) {
        item.save(callback);
    }

    update(model, item, callback) {
        model.findByIdAndUpdate(item._id, item, callback);
    }

    remove(model, id, callback) {
        model.findByIdAndRemove(id, callback);
    }

}
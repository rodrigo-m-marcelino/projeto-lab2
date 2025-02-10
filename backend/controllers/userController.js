const userModels = require("../models/userModels")
class userController {
    readAll () {
        return userModels.readAll();
    }

    readUnique(id) {
        return userModels.readUnique(id);
    }

    create () {
        return userModels.create();
    }

    update (id) {
        return userModels.update(id);
    }

    delUser (id) {
        return userModels.delUser(id);
    }
    
}

module.exports = new userController();
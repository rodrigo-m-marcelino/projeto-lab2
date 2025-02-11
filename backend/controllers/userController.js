const userModels = require("../models/userModels")
class userController {
    readAll () {
        return userModels.readAll();
    }

    readUnique(id) {
        return userModels.readUnique(id);
    }

    create (name, email) {
        return userModels.create(name , email);
    }

    update (name, email, id) {
        return userModels.update(name,email,id);
    }

    delUser (id) {
        return userModels.delUser(id);
    }
    
}

module.exports = new userController();
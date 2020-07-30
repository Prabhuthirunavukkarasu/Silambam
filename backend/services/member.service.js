var membersDao = require('../daos/memberDao');

module.exports = {

    getAll: function (callback) {
        membersDao.getAll(function (err, res) {
            if(err){
                callback(err,null);
            } else {
                callback(null,res);   
            }
        });
    },

    getById: function (id, callback) {
        membersDao.getById(id, function (err, res) {
            if(err){
                callback(err,null);
            } else {
                callback(null,res);   
            }
        });
    },

    create: function (member, callback) {
        membersDao.create(member, function (err, res) {
            if(err){
                callback(err,null);
            } else {
                callback(null,res);   
            }
        });
    },

    update: function (id, detailsToUpdate, callback) {
        membersDao.update(id, detailsToUpdate, function (err, res) {
            if(err){
                callback(err,null);
            } else {
                callback(null,res);   
            }
        })
    },

    remove: function (id, callback) {
        membersDao.remove(id, function (err, res) {
            if(err){
                callback(err,null);
            } else {
                callback(null,res);   
            }
        });
    }
}


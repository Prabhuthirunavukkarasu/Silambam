var express = require('express');
var router = express.Router();
var memberService = require("../services/member.service");

/*Get all members*/
router.get('/', function (req, res, next) {
  memberService.getAll(function (err, response) {
    if (err) {
      console.log("Failed to create member!");
      res.status(500).send({ name: err.name, message: err.message });
    } else {
      console.log("Successfully created member!");
      res.status(200).send(response);
    }
  });
});

/*Get member by id*/
router.get('/:id', function (req, res, next) {
  memberService.getById(req.params.id,function (err, response) {
    if (err) {
      console.log("Failed to create member!");
      res.status(500).send({ name: err.name, message: err.message });
    } else {
      console.log("Successfully created member!");
      res.status(200).send(response);
    }
  });
});

/*Create a member*/
router.post('/', function (req, res, next) {
  memberService.create(req.body, function (err, response) {
    if (!err) {
      console.log("Successfully created member!");
      res.send(response);
    } else {
      console.log("Failed to create member!");
      res.status(500).send({ name: err.name, message: err.message });
    }
  });
});

/*Update a member*/
router.put('/:id', function (req, res, next) {
  memberService.update(req.params.id, req.body, function (err, response) {
    if (!err) {
      console.log("Successfully created member!");
      res.send(response);
    } else {
      console.log("Failed to create member!");
      res.status(500).send({ name: err.name, message: err.message });
    }
  });
});

/*Create a member*/
router.delete('/:id', function (req, res, next) {
  memberService.remove(req.params.id, function (err, response) {
    if (!err) {
      console.log("Successfully created member!");
      res.send(response);
    } else {
      console.log("Failed to create member!");
      res.status(500).send({ name: err.name, message: err.message });
    }
  });
});

module.exports = router;

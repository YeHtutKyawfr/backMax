
module.exports = app => {
  const user = require("../controllers/users.controller.ts");

  var router = require("express").Router();

  // Create a new user
  router.post("/create", user.create);

  // Retrieve all users
  router.get("/findall", user.findAll);

  // Retrieve all published users
  router.get("/published", user.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", user.findOne);

  // Update a user with id
  router.put("/:id", user.update);

  // Delete a user with id
  router.delete("/:id", user.delete);

  // Delete all users
  router.delete("/", user.deleteAll);

  app.use('/api/tutorials', router);
};


/*
module.exports = app => {
    const users = require("../controllers/users.controller.ts");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.create);
  
    // Retrieve all Tutorials
    router.get("/", users.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", users.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", users.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", users.delete);
  
    // Delete all Tutorials
    router.delete("/", users.deleteAll);
  
    app.use('/api/tutorials', router);
  };

  */
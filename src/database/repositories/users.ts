const sql = require("../connection.ts");

// constructor
interface newUserData {
  title : String,
  description : String,
  published : Boolean

}

const User = function(this: any, newUser :newUserData ) {
    this.title = newUser.title ;
    this.description = newUser.description;
    this.published = newUser.published;
  };
  
  User.create = (newTutorial, result) => {
    sql.query("INSERT INTO users SET ?", newTutorial, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
      result(null, { id: res.insertId, ...newTutorial });
    });
  };
  
  User.findById = (id, result) => {
    sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutorial: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  User.getAll = (title, result) => {
    let query = "SELECT * FROM users";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };
  
  User.getAllPublished = result => {
    sql.query("SELECT * FROM users WHERE published=true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tutorials: ", res);
      result(null, res);
    });
  };
  
  User.updateById = (id, tutorial, result) => {
    sql.query(
      "UPDATE users SET title = ?, description = ?, published = ? WHERE id = ?",
      [tutorial.title, tutorial.description, tutorial.published, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated tutorial: ", { id: id, ...tutorial });
        result(null, { id: id, ...tutorial });
      }
    );
  };
  
  User.remove = (id, result) => {
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted tutorial with id: ", id);
      result(null, res);
    });
  };
  
  User.removeAll = result => {
    sql.query("DELETE FROM users", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} tutorials`);
      result(null, res);
    });
  };
  
  module.exports = User;


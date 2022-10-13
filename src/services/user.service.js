const User = require("../models/User.js");

const create = (body) => {
  return User.create(body);
};

const findAll = ()=>{
  return User.find();
};

const findByid = (id)=>{
  return User.findById(id)
}

const update = (id, name, username, email, password, avatar, background)=>{
  return User.findOneAndUpdate({_id: id}, {name, username, email, password, avatar, background})
}

module.exports = { create, findAll, findByid, update };

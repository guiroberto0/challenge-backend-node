const Articles = require("../models/Articles.js");

const create = (body) => {
  return Articles.create(body);
};

const findAll = () => {
  return Articles.find();
};

module.exports = { create, findAll };

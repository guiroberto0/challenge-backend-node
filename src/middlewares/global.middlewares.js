const mongoose = require('mongoose');
const userService = require('../services/user.service.js');

const validId = (req, res, next)=>{
  try{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).send({ error: `Invalid id`})
    }
    next();
  }catch(error){
    return res.status(500).send({ error: error.message })
  }
};

const validUser = async (req, res, next)=>{
  try {
    const id = req.params.id;
    const user = await userService.findByid(id)
    if(!user){
        return res.status(400).send({ error: `User id: ${id} not found`})
    }
    req.id = id;
    req.user = user;
    next();
  }catch(error){
    return res.status(500).send({ error: error.message })
  }
}

module.exports = { validId, validUser }
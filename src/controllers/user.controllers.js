const userService = require("../services/user.service.js");

const postUser = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      return res.status(400).send({ error: `Submit all fields for registration!` });
    }

    const user = await userService.create(req.body);
    if (!user) {
      return res.status(400).send({ error: `Error creating user` });
    }

    res.status(201).send({
      message: `Created user success!`,
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

const findAll = async (req, res) => {
  const users = await userService.findAll();
  if (users.length === 0) {
    return res.status(400).send({ error: `There no registred users!` });
  }
  return res.status(200).send(users);
};

const findByid = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).send({ message: user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const update = async (req, res)=>{
  try{
    const { name, username, email, password, avatar, background } = req.body;
    if (!name && !username && !email && !password && !avatar && !background) {
      return res.status(400).send({ error: `Submit at least one field for registration!` });
    }
    const {id, user} = req;
    await userService.update(id, name, username, email, password, avatar, background);
    return res.status(200).send({ message: `User id: ${id} successfully updated!`})
  }catch(error){
    return res.status(500).send({ error: error.message })
  }
}

module.exports = { postUser, findAll, findByid, update };

const mongoose = require("mongoose");

const connMongo = () => {
  console.log(`Conneting db MongoDB`),
    mongoose
      .connect(
        `mongodb+srv://guiroberto:${process.env.PASSWORD}@cluster0.wgpoac4.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log("Mongo atllas connection sucess!");
      })
      .catch((error) => {
        console.log(error);
      });
};

module.exports = connMongo;

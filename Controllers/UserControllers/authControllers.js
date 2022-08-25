const { Client } = require("../../src/models/index");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const athConfig = require("../../src/utils/config/auth");

const signIn = async (req, res, next) => {

  const { email, password } = req.body

  return await Client.findOne({
    where:{
      email:email
    }
  }).then( client =>{
    if(!client){
      res.status(404).json({ msg: " Usuario inexitente " })
    }else{
      if(bcrypt.compareSync(password,client.password)){

        let token = jwt.sign({ user: client }, athConfig.secret, {
          expiresIn: "1d",
        });

        res.status(200).json({
          user:client,
          token
        })

      }else{
        res.status(401).json({ msg: " Contraseña incorrecta " })
      }
    }
  })

};

const signUp = async (req, res, next) => {
  const passwordEncrypted = bcrypt.hashSync(req.body.password, +athConfig.rounds);
  return await Client.create({
    id: uuidv4(),
    name:req.body.name,
    email:req.body.email,
    password: passwordEncrypted,
    direcction:req.body.direcction,
    phone:req.body.phone
  })
    .then((client) => {

      let token = jwt.sign({ user: client }, athConfig.secret, {
        expiresIn: "1d",
      });

      res.status(200).json({
        user:client,
        token
      })
    })
    .catch((err) => {
        res.status(500).json(err)
    });
};

module.exports = {
  signIn,
  signUp,
};

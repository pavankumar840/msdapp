var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const User = require("../public/javascripts/users");

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send("u can see all users");
})

router.post('/addUser', async (req, res) => {
  const { name, dob, interests, username, password } = req.body;
  let user = {};
  user.name = name;
  user.dob = dob;
  user.interests = interests;
  user.username = username;
  user.password = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});
router.post('/checkforuser', (req, res) =>{
  User.find({username: req.body.username})
  .then(doc => {
    res.json(doc)
  })
  .catch(error =>{
    console.log(error);
  })
})

router.get('/getUsers', verifyToken, async (req, res) =>{
  User.find().then(doc =>{
    jwt.verify(req.token, 'secretkey', (err, usersdata) =>{
      if(err){
        res.sendStatus(403);
      }else{
        res.json({
          doc
        });
      }
    })
  });
});

router.post('/findLoger', async (req, res) =>{
  User.find({username : req.body.username, password: req.body.password})
  .then(doc =>{
      jwt.sign({doc}, 'secretkey', (error, token) =>{
        res.json({
          token,
          doc
        })
      })
  })
  .catch(error =>{
    console.log(error);
  })
});

router.post('/getuser', async(req, res) =>{
  User.find({username : req.body.username})
  .then(doc => {
    res.json(doc);
  })
  .catch(error => console.error);
});


function verifyToken(req, res, next){
  console.log(req.headers);
const bearereHeader = req.headers['authorization'];
if(typeof bearereHeader !== 'undefined'){
  const bearer = bearereHeader.split(' ');
  const bearereToken = bearer[1];
  req.token = bearereToken;
  next();
}else{
  res.sendStatus(403);
}

}

module.exports = router;

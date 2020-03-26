var express = require('express');
var router = express.Router();

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


// router.get('/getUsers', async (req, res) =>{
//   User.find().then(doc =>{
//     res.json(doc);
//   });
// });


// router.post('/findLoger', async (req, res) =>{
//   User.find({username : req.body.username, password: req.body.password})
//   .then(doc =>{
//       res.json(doc);
//   })
//   .catch(error =>{
//     console.log(error);
//   })
// });

// router.post('/getuser', async(req, res) =>{
//   User.find({username : req.body.username})
//   .then(doc => {
//     res.json(doc);
//   })
//   .catch(error => console.error);
// });


module.exports = router;

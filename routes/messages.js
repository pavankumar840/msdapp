var express = require('express');
var router = express.Router();

const Message = require('../public/javascripts/message');

/* GET home page. */
router.post('/sendMessage', async (req, res) =>{
    const { message, senderid, receiverid } = req.body;
    let user = {};
    user.message = message;
    user.senderid = senderid;
    user.receiverid = receiverid;
    let userModel = new Message(user);
    await userModel.save();
    res.json(userModel);
});

router.post('/getMessage', async (req, res) => {
    console.log(req.body);
    Message.find({ 
        $or:[{senderid: req.body.senderid,receiverid: req.body.receiverid},
         {senderid: req.body.receiverid,receiverid: req.body.senderid} ]})
         .sort({sentat: 1})
         .then(doc =>{
             res.json(doc);
            })
         .catch(error => {
        console.log(error);
    })
  });

module.exports = router;

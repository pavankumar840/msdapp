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

router.get('/getMessage', async (req, res) => {
    const {senderid, receiverid} = req.body;
    Message.find({
        senderid: senderid, receiverid: receiverid
    }).sort({sentat: 1}).then(doc =>{
        res.json(doc);
    }).catch(error => {
        console.log(error);
    })
  });

module.exports = router;
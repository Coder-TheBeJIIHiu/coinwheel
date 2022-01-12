const groupToken 	= 'f4dbeed4c1853febe4b05692d193bc0ddc2785875c5a1299e5af4f54e28560b2c9821af1bb909c56c90a1';
const groupID 	 	= 210085730;
const urlDB 	= 'mongodb+srv://coinwheel:oper4545@cluster0.hwz2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const nameDB = 'myFirstDatabase' 
var mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://coinwheel:oper4545@cluster0.hwz2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});
module.exports = {
  groupToken,
  groupID,

  urlDB,
  nameDB
};
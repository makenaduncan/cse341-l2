const { ReturnDocument } = require('mongodb');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContact = async (req, res, next) => { 
  // const result = await mongodb.getDb().db().collection('contacts').find();
  
  // result.toArray().then((data) => {
  //   data.forEach(contact => {
  //     if (contact._id == req.params.id) {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.status(200).json(contact);
  //       return;
  //     } else {
  //       res.status(404).json({errorMessage: "Contact Not Found"});
    
  //     }
  //     })
  // });
   const result = await mongodb.getDb().db().collection('contacts').find({_id: new ObjectId(req.params.id)});
   
   result.toArray().then(response => {
     res.status(200).json(response);
   })
};

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { getContact, getContacts };
const express = require('express');
const { body } = require('express-validator/check');

// const testController = require('../controllers/test');
// const isAuth = require('../middleware/is-auth');

const {addPet,uploadImage,getOne} = require('../controllers/pet')

const router = express.Router();

// router.get('/pet/:petId',getOne);
router.post('/pet',addPet)
router.post('/pet/:petId/uploadImage',uploadImage);

module.exports = router;

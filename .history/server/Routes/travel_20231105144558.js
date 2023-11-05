const express = require("express");
const router = express.Router;

const { list, create } = require("../Controllers/travel");


router.get('/travel', list );
router.post('/travel' create)
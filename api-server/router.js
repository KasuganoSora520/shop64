const express = require('express')
const c_index = require('./c_index')
const router = express.Router()


router
.get('/',c_index.getindex)
.get('/delete/:todoID',c_index.delbyid)



module.exports= router
const express = require('express')
const router = express.Router()
router.get('/', function(req, res, next) {
res.locals.pageData = {
title:'6640207509'
}
res.render('pages/index')
})
module.exports = router
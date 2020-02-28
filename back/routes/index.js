var express = require('express');
var router = express.Router();
var passport = require('passport');
const User = require('../models/User')

function isLoggedIn(req, res, next) {
    if (req.session.passport.user) next()
    else {
        res.redirect("/users/register")
    }
}


router.post('/users/register', function (req, res, next) {
    User.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(next)
})


router.post('/users/login', passport.authenticate('local'), function (req, res, next) {
    res.send(req.user)
})



router.get('/users/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router
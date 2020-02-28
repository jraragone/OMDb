const bodyParser = require('body-parser');
const db = require("./config/db")
var createError = require('http-errors');
var express = require('express');
var session = require('express-session')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User')
var CookieStrategy = require('passport-cookie')
const app = express();
const router = require('./routes')
// middelwares que usamos

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'tuhermana' }))
app.use(passport.initialize());
app.use(passport.session())


app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', router)


passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' },
    function (inputEmail, password, done) {
        User.findOne({ where: { username: inputEmail } })
            .then((data) => {
                if (!data) {
                    return done(null, false, { message: 'incorrect username' })
                }
                if (!data.validPassword(password)) {
                    return done(null, false, { message: 'incorrect password' })
                }
                return done(null, data)
            })
            .catch(done)
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
})

passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(user => done(null, user))
}
);




// app.use('/static', express.static(__dirname + '/public'));
// ruta que vamos a usar


app.use('/*', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler



app.use(function (err, req, res, next) {
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.sendStatus(err.status || 500);
});

db.sync({ force: false })
    .then(() => {
        console.log("Sincronizado")
        app.listen(3000, function () {
            console.log("server escuchando en 3000")
        })
    })
module.exports = app;













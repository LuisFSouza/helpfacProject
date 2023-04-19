
const JwStrategy = require('passport-jwt').Strategy
const passport = require('passport')
const options = {}
const User = require('../models/User')
const LoginController = require('../controllers/LoginController')
const dotenv = require("dotenv")
dotenv.config()
const tokenExtractor = require('../extractors/tokenExtractor')

options.jwtFromRequest = tokenExtractor.cookieExtractor
options.secretOrKey = process.env.SECRETKEY

passport.use(new JwStrategy(options, async function (jwt_payload, done) {
    const user = await User.selectUserByID(jwt_payload.id)
    if (user.tipo == "Erro") {
        return done(user.erro, false)
    }
    if (user.tipo == "Sucesso" && user.usuario != undefined) {
        return done(null, user)
    }
    else {
        return done(null, false)
    }
}))

LoginController.renderFormLogin;

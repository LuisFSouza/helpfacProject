const express = require('express')
const body_parser = require('body-parser')
const routes = require('./src/routes/routes')
const moment = require('moment')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.static('./public'))

moment.locale("pt-br")
app.locals.moment = moment

app.use(body_parser.urlencoded({extended : false}))
app.use(body_parser.json())

app.use(express.json())

app.use(passport.initialize())

app.use(routes)

app.listen(3333);

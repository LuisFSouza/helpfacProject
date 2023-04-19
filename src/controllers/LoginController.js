const User = require('../models/User')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const dotenv = require("dotenv")

dotenv.config()

module.exports = {

    async renderFormLogin(req, res) {
        res.render('login')
    },
    async renderFormRegister(req, res) {
        res.render('register')
    },

    async registerUser(req, res) {
        const email_user = req.body.email
        const name_user = req.body.nome
        const is_admin_user = 0;
        const salt = bcrypt.genSaltSync(10);
        const password_user = bcrypt.hashSync(req.body.password, salt)
        const user = await User.createUser({ email_user, password_user, name_user, is_admin_user })
        res.redirect('/login')
    },

    async logoutUser(req, res) {
        res.cookie('token', '', { maxAge: 1 })
        res.redirect('/login')
    },

    async loginUser(req, res) {
        const email = req.body.email
        const password = req.body.password
        const user = await User.selectUserByEmail(email)
        if (user == undefined) {
            return res.render("login", { err: "Usuário não encontrado" });
        }
        else {
            if (!bcrypt.compareSync(password, user.password_user)) {
                return res.render("login", { err: "Senha incorreta" });
            }

            const payload = {
                id: user.pk_id_user,
                email: user.email_user
            }

            const responsetoken = jsonwebtoken.sign(payload, process.env.SECRETKEY, { expiresIn: '1d' })

            res.cookie('token', responsetoken, {
                httpOnly: true,
                secure: true,
                maxAge: 86400000
            })

            res.redirect('/courses')
        }


    }
}
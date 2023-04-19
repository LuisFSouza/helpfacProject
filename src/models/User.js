const db = require('../database/index')


function selectUserByEmail(email) {
    return db.select('*').from('users').where('email_user', email).first()
        .then(user => { return user })
        .catch(erro => {
            return { tipo: "Erro", corpo: "erro" + erro }
        })
}

function selectUserByID(id) {
    return db.select('*').from('users').where('pk_id_user', id).first()
        .then(user => { return {tipo: "Sucesso", usuario: user }})
        .catch(err => { return { tipo: "Erro"}})
}

function createUser(user) {
    return db.insert(user).into('users').then(_=>{
        return{tipo: "Sucess", corpo: "Usuario cadastrado com sucesso"}
    })
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}



module.exports = {
    selectUserByEmail,
    selectUserByID,
    createUser
}
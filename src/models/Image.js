const db = require('../database/index')

function insertImage(image)
{
    return db.insert(image).into('images').then(_=>{
        return{tipo: "Success", corpo:"Imagem armazenada com sucesso"}
    })
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function selectImagesQuestion(id)
{
    return db.select('*').from('images').where('fk_id_question', id).where('fk_id_answer', null)
    .then(images => {return images})
    .catch(erro=>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function selectImagesAnswerByID(id)
{
    return db.select('*').from('images').where('fk_id_question', id).whereNot('fk_id_answer', null)
    .then(images => {return images})
    .catch(erro=>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function selectImagesAnswer()
{
    return db.select('*').from('images').whereNot('fk_id_answer', null)
    .then(images => {return images})
    .catch(erro=>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

module.exports = {
    insertImage,
    selectImagesQuestion,
    selectImagesAnswer,
    selectImagesAnswerByID
}
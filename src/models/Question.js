const db = require('../database/index')

function selectQuestionsByMatter(idMatter) {
    return db.select('*').from('questions').innerJoin('users', 'questions.fk_id_user', 'users.pk_id_user').where('questions.fk_id_matter', idMatter).orderBy('questions.dt_question', 'desc')
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Erro", corpo: "erro" + erro }
        })
}

function selectQuestions() {
    return db.select('*').from('questions').innerJoin('users', 'questions.fk_id_user', 'users.pk_id_user').innerJoin('matters', 'questions.fk_id_matter', 'matters.pk_id_matter').orderBy('questions.dt_question', 'desc')
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Erro", corpo: "erro" + erro }
        })
}

function selectQuestionsByLike(idMatter, searchValue) {
    return db.select('*').from('questions').where('title_question', 'like', '%' + searchValue + '%').innerJoin('users', 'questions.fk_id_user', 'users.pk_id_user').where('questions.fk_id_matter', idMatter).orderBy('questions.dt_question', 'desc')
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Erro", corpo: "erro" + erro }
        })
}

function storeQuestion(question) {
    return db.insert(question).into('questions').then(function (res) {
        return res[0]
    })
        .catch(erro => {
            return { tipo: "Error", corpo: "Erro" + erro }
        })
}

function selectQuestionByID(id) {
    return db.select('*').from('questions').innerJoin('users', 'questions.fk_id_user', 'users.pk_id_user').where('questions.pk_id_question', id).first()
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Error", corpo: "erro" + erro }
        })
}

function selectQuestionsByUser(id) {
    return db.select('*').from('questions').innerJoin('users', 'questions.fk_id_user', 'users.pk_id_user').innerJoin('matters', 'questions.fk_id_matter', 'matters.pk_id_matter').where('questions.fk_id_user', id).orderBy('questions.dt_question', 'desc')
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Error", corpo: "erro" + erro }
        })
}


function selectQuestion() {
    return db.select('*').from('questions').innerJoin('matters', 'questions.fk_id_matter', 'matters.pk_id_matter').orderBy('questions.dt_question', 'desc')
        .then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Error", corpo: "erro" + erro }
        })
}


function deleteQuestion(id) {
    return db.del().from('questions').where('pk_id_question', id)
}

function updateQuestion(question, id) {
    return db('questions').where('pk_id_question', id).update(question).then(questions => { return questions })
        .catch(erro => {
            return { tipo: "Error", corpo: "Erro" + erro }
        })
}


module.exports = {
    selectQuestionsByMatter,
    selectQuestionsByLike,
    storeQuestion,
    selectQuestionByID,
    updateQuestion,
    deleteQuestion,
    selectQuestion,
    selectQuestionsByUser,
    selectQuestions
}
const db = require('../database/index')

function selectAnswersByQuestion(id) {
    return db.select('*').from('answers').innerJoin('users', 'answers.fk_id_user', 'users.pk_id_user').innerJoin('questions', 'answers.fk_id_question', 'questions.pk_id_question').innerJoin('matters', 'questions.fk_id_matter', 'matters.pk_id_matter').where('answers.fk_id_question', id).orderBy('answers.dt_answer', 'desc')
    .then(answers => {return answers})
    .catch(erro=>{
        return{tipo: "Erro", corpo: "erro" + erro}
    })
}

function selectAnswersByID(id) {
    return db.select('*').from('answers').innerJoin('users', 'answers.fk_id_user', 'users.pk_id_user').innerJoin('questions', 'answers.fk_id_question', 'questions.pk_id_question').innerJoin('matters', 'questions.fk_id_matter', 'matters.pk_id_matter').where('answers.pk_id_answer', id).first()
    .then(answer => {return answer})
    .catch(erro=>{
        return{tipo: "Erro", corpo: "erro" + erro}
    })
}

function deleteAnswer(id) {
    return db.del().from('answers').where('pk_id_answer', id)
}


function updateAnswer(answer, id)
{
    return db('answers').where('pk_id_answer', id).update(answer).then(function (res){
        return res[0]
      })
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function storeAnswer(answer)
{
    return db.insert(answer).into('answers').then(function (res){
        return res[0]
      })
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}


module.exports = {
    selectAnswersByQuestion,
    storeAnswer,
    deleteAnswer,
    updateAnswer,
    selectAnswersByID
}

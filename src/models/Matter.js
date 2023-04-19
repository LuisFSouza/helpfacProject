const db = require('../database/index')

function selectMatters(idCourse) {
    return db.select('*').from('matters').where('fk_id_course', idCourse)
    .then(matters => {return matters})
    .catch(erro=>{
        return{tipo: "erro", corpo: "erro" + erro}
    })
}

function selectAllMatters(idCourse) {
    return db.select('*').from('matters').innerJoin('courses', 'matters.fk_id_course', 'courses.pk_id_course')
    .then(matters => {return matters})
    .catch(erro=>{
        return{tipo: "erro", corpo: "erro" + erro}
    })
}

function selectMatterByID(idCourse) {
    return db.select('*').from('matters').innerJoin('courses', 'matters.fk_id_course', 'courses.pk_id_course').where('matters.pk_id_matter', idCourse).first()
    .then(matter => {return matter})
    .catch(erro=>{
        return{tipo: "erro", corpo: "erro" + erro}
    })
}

function deleteMatter(id) {
    return db.del().from('matters').where('pk_id_matter', id)
}

function updateMatter(matter, id)
{
    return db('matters').where('pk_id_matter', id).update(matter).then(matters => {return matters})
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function storeMatter(matter)
{
    return db.insert(matter).into('matters').then(_ => { return{tipo: "Sucess", corpo: "Sucesso"}})
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}


module.exports = {
    selectMatters,
    updateMatter,
    deleteMatter,
    selectAllMatters,
    selectMatterByID,
    storeMatter
}
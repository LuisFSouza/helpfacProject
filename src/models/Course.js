const db = require('../database/index')

function selectCourses() {
    return db.select('*').from('courses')
    .then(courses => {return courses})
}

function selectCoursesByID(id) {
    return db.select('*').from('courses').where('pk_id_course', id).first()
    .then(course => {return course})
}

function deleteCourse(id) {
    return db.del().from('courses').where('pk_id_course', id)
}

function updateCourse(course, id)
{
    return db('courses').where('pk_id_course', id).update(course).then(courses => {return courses})
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

function storeCourse(course)
{
    return db.insert(course).into('courses').then(_ => { return{tipo: "Sucess", corpo: "Sucesso"}})
    .catch(erro =>{
        return{tipo: "Error", corpo: "Erro" + erro}
    })
}

module.exports = {
    selectCourses,
    deleteCourse,
    updateCourse,
    selectCoursesByID,
    storeCourse
}
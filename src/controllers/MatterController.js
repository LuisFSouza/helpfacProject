const Matter = require('../models/Matter')
const Course = require('../models/Course')

module.exports = {
    async renderScreenMatters(req, res) {
        const idCourse = Number(req.params.idCourse);
        const matters = await Matter.selectMatters(idCourse);
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('matters', { matters, isAdmin })
    },

    async deleteMatter(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            id = req.params.id
            const matters = await Matter.deleteMatter(id);
            res.redirect('/matters-admin')
        }
    },

    async renderScreenMattersAdmin(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            const matters = await Matter.selectAllMatters();
            res.render('matter-admin', { matters, isAdmin })
        }
    },

    async renderScreenEditMatterAdmin(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            id = req.params.id
            const matter = await Matter.selectMatterByID(id);
            const courses = await Course.selectCourses()
            res.render('matter-admin-edit', { matter, courses, isAdmin })
        }
    },

    async renderFormNewMatter(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            const courses = await Course.selectCourses()
            res.render('matter-admin-new', { courses, isAdmin })
        }
    },



    async editMatter(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            const id = req.params.id
            const fk_id_course = req.body.course
            const name_matter = req.body.name
            const situation = await Matter.updateMatter({ name_matter, fk_id_course }, id)
            res.redirect('/matters-admin')
        }

    },

    async newMatter(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else {
            const id = req.params.id
            const fk_id_course = req.body.course
            const name_matter = req.body.name
            const situation = await Matter.storeMatter({ name_matter, fk_id_course })
            res.redirect('/matters-admin')
        }
    },
}
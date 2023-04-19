const Course = require('../models/Course')

module.exports = {
    async renderScreenCourses(req, res) {
        const courses = await Course.selectCourses();
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('courses', { courses, isAdmin })
    },

    async renderScreenCoursesAdmin(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            const courses = await Course.selectCourses();
            res.render('course-admin', { courses, isAdmin })
        }
    },

    async renderFormNewCourse(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            res.render('course-admin-new', { isAdmin })
        }
    },

    async createCourse(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            const title_course = req.body.title
            const situation = await Course.storeCourse({ title_course })
            res.redirect('/courses-admin')
        }
    },


    async renderScreenEditCourseAdmin(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            id = req.params.id
            const course = await Course.selectCoursesByID(id);
            res.render('course-admin-edit', { course, isAdmin })
        }
    },

    async deleteCourse(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            id = req.params.id
            const courses = await Course.deleteCourse(id);
            res.redirect('/courses-admin')
        }
    },

    async editCourse(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        if (isAdmin != 1) {
            res.redirect('/courses');
        }
        else 
        {
            id = req.params.id
            title_course = req.body.title
            const situation = await Course.updateCourse({ title_course }, id);
            res.redirect('/courses-admin')
        }
    }
}
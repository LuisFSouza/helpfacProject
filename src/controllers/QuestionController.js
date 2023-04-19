const Question = require('../models/Question')
const Image = require("../models/Image")
const Answers = require("../models/Answer")
const Matter = require('../models/Matter')

module.exports = {
    async renderScreenQuestions(req, res) {
        const idMatter = Number(req.params.idMatter)
        const questions = await Question.selectQuestionsByMatter(idMatter)
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('questions', { questions, idMatter, isAdmin })
    },

    async selectQuestions(req, res) {
        const idMatter = Number(req.params.idMatter)
        const searchValue = req.query.search
        const questions = await Question.selectQuestionsByLike(idMatter, searchValue)
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('questions', { questions, idMatter, isAdmin })
    },

    async renderScreenQuestionsByUser(req, res) {
        const isAdmin = req.user.usuario['is_admin_user'];
        var questions;
        var idUser;
        if (isAdmin == 1) {
            questions = await Question.selectQuestions();
        }
        else {
            idUser = req.user.usuario['pk_id_user'];
            questions = await Question.selectQuestionsByUser(idUser)
        }
        res.render('question-admin', { questions, isAdmin })
    },

    async renderScreenEditQuestions(req, res) {
        id = req.params.id
        const question = await Question.selectQuestionByID(id);
        const matters = await Matter.selectAllMatters()
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('question-admin-edit', { question, matters, isAdmin })
    },

    async editQuestion(req, res) {
        const id = req.params.id
        const fk_id_matter = req.body.matter
        const title_question = req.body.title;
        const text_question = req.body.textQuest;
        const dt_question = new Date();
        const situation = await Question.updateQuestion({ title_question, text_question, dt_question, fk_id_matter }, id)
        res.redirect('/myquestions')
    },


    async renderFormQuestion(req, res) {
        const idMatter = Number(req.params.idMatter)
        const isAdmin = req.user.usuario['is_admin_user'];
        res.render('question-form', { idMatter, isAdmin });
    },

    async createQuestion(req, res) {
        const fk_id_matter = Number(req.params.idMatter)
        const title_question = req.body.title;
        const text_question = req.body.textQuest;
        const dt_question = new Date();
        const fk_id_user = req.user.usuario['pk_id_user'];
        const fk_id_question = await Question.storeQuestion({ title_question, text_question, dt_question, fk_id_matter, fk_id_user })
        const images = req.files;


        images.forEach(async image => {
            const bin_image = image.buffer.toString('base64')
            const extension_image = image.mimetype;
            fk_id_answer = null;
            const saveImageRes = await Image.insertImage({ bin_image, extension_image, fk_id_question, fk_id_answer })
        })
        res.redirect('/matters/' + fk_id_matter + '/questions')
    },

    async deleteQuestion(req, res) {
        id = req.params.id
        const questions = await Question.deleteQuestion(id);
        res.redirect('/myquestions')
    },

    async renderQuestionsAndAnswers(req, res) {
        const idMatter = Number(req.params.idMatter)
        const id = Number(req.params.idQuestion)
        const question = await Question.selectQuestionByID(id);
        const imagesQuestion = await Image.selectImagesQuestion(id);
        const imagesAnswer = await Image.selectImagesAnswerByID(id);
        const answers = await Answers.selectAnswersByQuestion(id)
        const userOn = req.user.usuario['pk_id_user']
        const isAdmin = req.user.usuario['is_admin_user']
        const qtddImagesQuestion = imagesQuestion.length;

        res.render("questions-details-resps", { question: question, answers: answers, imagesQuestion: imagesQuestion, imagesAnswer: imagesAnswer, idMatter: idMatter, id: id, userOn, isAdmin, qtddImagesQuestion })
    }
}
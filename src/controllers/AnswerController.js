const Answer = require("../models/Answer")
const Image = require("../models/Image")

module.exports = {
    async createAnswer(req, res) {
        const fk_id_question = Number(req.params.id)
        const text_answer = req.body.resp
        const dt_answer = new Date()
        const fk_id_user = req.user.usuario['pk_id_user'];
        const fk_id_answer = await Answer.storeAnswer({ text_answer, dt_answer,  fk_id_question, fk_id_user })
        const images = req.files
        const fk_id_matter = Number(req.params.idMatter)
        images.forEach(async image => {
            const bin_image = image.buffer.toString('base64')
            const extension_image = image.mimetype;
            const saveImageRes = await Image.insertImage({ fk_id_question,bin_image, extension_image, fk_id_question, fk_id_answer })
        })

        res.redirect('/matters/'+fk_id_matter+'/questions/'+fk_id_question);
    },

    async renderFormAnswer(req, res) {
        const idMatter = Number(req.params.idMatter)
        const id = Number(req.params.id)
        const isAdmin = req.user.usuario['is_admin_user']
        res.render('answer-form', {idMatter:idMatter, id:id, isAdmin})
    },

    async renderFormEditAnswer(req, res) {
        const id = Number(req.params.id)
        const answer = await Answer.selectAnswersByID(id)
        const isAdmin = req.user.usuario['is_admin_user']
        res.render('answer-edit', {answer, isAdmin})
    },

    async deleteAnswer(req, res) {
        id = req.params.id
        idMatter = req.params.idMatter
        idQuestion = req.params.idQuestion
        const deleteStatus = await Answer.deleteAnswer(id);
        res.redirect('/matters/'+idMatter+'/questions/'+idQuestion);
    },

    async editAnswer(req, res) {
        const id = req.params.id
        const fk_id_question = Number(req.params.idQuestion)
        const idMatter = Number(req.params.idMatter)
        const text_answer = req.body.resp
        const dt_answer = new Date()

        const situation = await Answer.updateAnswer({text_answer, dt_answer, fk_id_question}, id)
        res.redirect('/matters/'+idMatter+'/questions/'+fk_id_question)
    },

}
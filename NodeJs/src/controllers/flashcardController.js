import flashcardService from '../services/flashcardService'

let getVocabByC = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabByCategory(req.params.category)
    )
}

let getVocabByCD = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getVocabByCategoryAndDifficulty(req.params.category, req.params.difficulty)
    )
}

let getVocab = async (req, res) => {
    console.log(req.params.word)
    return res.status(200).json(
        await flashcardService.getVocabService(req.params.word)
    )
}

let getRandomVocab = async (req, res) => {
    return res.status(200).json(
        await flashcardService.getRandomVocabService()
    )
}

module.exports = {
    getVocabByC, getVocabByCD, getVocab, getRandomVocab
}
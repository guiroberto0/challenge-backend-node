exports.getQuery = async function (req, res, next){
    try {
        res.status(200).send({ msg: `Rota GetQuery criado com sucesso`})
    } catch (error) {
        res.status(500).send({ error: error })
    }
}
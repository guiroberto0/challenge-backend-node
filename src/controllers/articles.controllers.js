const https = require('../middlewares/https.middlewares.js');
const articlesService = require('../services/articles.service.js');

const getQuery = async (req, res, next) => {
    try {
        const { data } = await https.get('/articles');
        const response = data.map((row)=>{
            return{
                id: row.id,
                title: row.title,
                url: row.url,
                imageUrl: row.imageUrl,
                newsSite: row.newsSite,
                summary: row.summary,
                publishedAt: row.publishedAt,
                updatedAt: row.updatedAt,
                featured: row.featured,
                launches: row.launches,
                events: row.events
            }
        })
        return res.status(200).send( response )
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error })
    }
}

const postArticles = async (req, res, next)=>{
    try {
        const { data } = await https.get('/articles');
        //const validation = await articlesService.findAll();
        //console.log(validation)
        //if(data.)
        const response = data.map((row)=>{
            return{
                id: row.id,
                title: row.title,
                url: row.url,
                imageUrl: row.imageUrl,
                newsSite: row.newsSite,
                summary: row.summary,
                publishedAt: row.publishedAt,
                updatedAt: row.updatedAt,
                featured: row.featured,
                launches: row.launches,
                events: row.events
            }
        });
        if(!response){
            return res.status(400).send({ message: `Submit all fields for registration!`})
        };

        const articles = await articlesService.create(response);
        if(!articles){ return res.status(400).send({ message: `Error created articles!`})}

        return res.status(201).send( articles )
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error })
    }
}

module.exports = {getQuery, postArticles};

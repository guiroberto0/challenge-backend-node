const mongoose = require('mongoose');

const ArticlesSchema = new mongoose.Schema({
        id: {
            type: Number
        },
        featured: {
            type: String
        },
        title: {
            type: String
        },
        url: {
            type: String
        },
        imageUrl: {
            type: String
        },
        newsSite: {
            type: String
        },
        summary: {
            type: String
        },
        publishedAt: {
            type: String
        },
        launches: [
          {
            id: {
                type: String
            },
            provider: {
                type: String
            }
          }
        ],
        event: [
          {
            id: {
                type: String
            },
            provider: {
                type: String
            }
          }
        ]  
})

const Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles
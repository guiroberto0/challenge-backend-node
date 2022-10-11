const app = require('./app.js');

app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`Servidor rodando na porta: ${process.env.EXPRESS_PORT}`)
})


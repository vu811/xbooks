const express = require('express')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000
const app = express()
//const models = require('./models')
const bookRoutes = require('./routes/book.routes')

dotenv.config()

app.use(express.json())

app.get('/api/test', (req, res) => {
    res.json({'message': 'ok'})
})

// models.sequelize.sync().then(() => {
//     console.log('Db Nice!')
// }).catch((err) => {
//     console.log(err, 'Error Database!')
// })

bookRoutes(app);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({'message': err.message})
    return
})

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
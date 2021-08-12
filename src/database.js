const mongoose = require('mongoose')
const { MONGO_URL } = require('./Config')

;(async () => {
    const options = {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
    mongoose
        .connect(MONGO_URL, options)
        .then(() => {
            console.log('Database Ready')
        })
        .catch((error) => {
            console.error(error)
        })
})()

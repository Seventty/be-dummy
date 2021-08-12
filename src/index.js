const { server } = require('./startup.js')
const { PORT } = require('./Config')
require('./database.js')

const main = async () => {
    server.listen(PORT, () => {
        console.log(`On Server http://localhost:${PORT}`)
    })
}

main()

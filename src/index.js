import server from './startup.js'

const main = async () => {
    server.listen(3000, () => {
        console.log('On Server')
    })
}

await main()

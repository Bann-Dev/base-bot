const config = require('../config.json')

module.exports = (client, data) => {
    console.log(`\nJe suis en ligne !`)
    const statuses = [
        `${config.prefix}help | v${config.version}`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i], {
            type: 'WATCHING'
        })
        i = ++i % statuses.length
    }, 12000)
}

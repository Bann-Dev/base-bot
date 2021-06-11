const { Client, Collection } = require('discord.js')
const { readdir, readdirSync, statSync } = require('fs')
const client = new Client({ restTimeOffset: 0 })
const commandFile = getFiles('./commands')
const config = require('./config.json')

client.commands = new Collection()
client.login(config.token)

for (const command of commandFile) {
    const cmd = require(`${command}`)
    const command = cmd.split('.')[0]
    client.commands.set(command, cmd)
    console.log(`Commande ${command} chargée !`)
}
function getFiles(dir, files_) {
    files_ = files_ || []
    var files = readdirSync(dir)
    for (var i in files) {
        var name = dir + '/' + files[i]
        if (statSync(name).isDirectory()) {
            getFiles(name, files_)
        } else {
            files_.push(name)
        }
    }
    return files_
}

readdir('./events/', (error, f) => {
    if (error) console.log(error)
    f.forEach((f) => {
        const events = require(`./events/${f}`)
        const event = f.split('.')[0]
        console.log(`Event ${event} chargé !`)
        client.on(event, events.bind(null, client))
    })
})

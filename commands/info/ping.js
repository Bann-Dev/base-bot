module.exports = {
    run: message => {
        message.channel.send('Calcul en cours...').then((msg) => {
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.edit(`J\'ai un ping de ${ping}ms`)
        })
    },
    name: 'ping'
}

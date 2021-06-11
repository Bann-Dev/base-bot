const config = require('../config.json')

module.exports = async (client, message) =>

	if (message.channel.type === 'dm') return
	if (message.author.bot) return

	const args = message.content.trim().split(/ +/g)
	const commandName = args.shift().toLowerCase()
	const command = client.commands.get(commandName.slice(prefix.length))
  
	if (!commandName.startsWith(prefix)) return
	if (command) command.run(message, args, client, config)

}

import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
  console.log('Balanced bot is online')

  const guildId = '884268145660026900'
  const guild = client.guilds.cache.get(guildId)
  let commands 

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }
  
  commands?.create({
    name: 'help',
    description: 'Display, commands as well as guild pointers',
  })

  commands?.create({
    name: 'raid-info',
    description: 'Display raid infomation such as time and requirments',
  })
})

client.on('interactionCreate', async (interaction) =>{
  if (!interaction.isCommand()){
    return
  }

  const { commandName, options } = interaction

  if (commandName === 'help') {
    interaction.reply({
      content: 'Commands: \n \n/role - To get the Members role. You must follow name convention. "Discord Name (WoW in-game Name)" If Discord & WoW is the same, still follow this rule "WoW in-game Name (WoW in-game Name)" Check Officers for an example',
      ephemeral: false, //Makes it so only client can see it if true
    })
  }

  if (commandName === 'raid') {
    interaction.reply({
      content: 'We raid on Mondays and Thursdays at 18:00 Server Time.',
      ephemeral: false, //Makes it so only client can see it if true
    })
  }
})

const prefix = '-';

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift()?.toLowerCase();
  
  if (command === 'guild-info'){
    message.channel.send('┌─────────── •✧✧• ──────────┐\n   -Welcome to Balanced - Twisting Nether!-\n└─────────── •✧✧• ──────────┘\n\nWe are a new, socially-focused guild aiming to facilitate both casual and competitive content and establish an enjoyable community.\n\n**Roles**\nTo receive the **member role**, please be a member of the guild and ensure you have your **in-game** WoW name in Discord. For example - **"Discord Name (WoW in-game Name)"** or **"Wow in-game Name"** For example - **Lily ^.^ (Mirilia)** or **RabuRaru (Sabotage)** or just the WoW name **Sabotage**.\n\nTo rename yourself in the discord, just right-click yourself on the right handside and select **"Change Nickname"**\n\n**Discord Link**\nThe main Discord link can be found in-game. If you need a different one please ask an **@Officer** or **@Guild Master**\n\n**Rules**\nThe **primary rule** is to treat everybody with respect. Any unacceptable behaviour will be investigated by an officer. **All management decisions are final**.\n\n**Events**\nCasual Raiding - Monday & Thursday 20:00 ST (Normal)\n\n**Useful Guild Links**\nWow Armory - <https://worldofwarcraft.com/en-gb/guild/eu/twisting-nether/balanced>\nWowprogress - <https://www.wowprogress.com/guild/eu/twisting-nether/Balanced>\nRaiderIO - <https://raider.io/guilds/eu/twisting-nether/Balanced>\nWarcraft Logs - <https://www.warcraftlogs.com/guild/id/619635>');
  }

  if (command === 'name'){
    message.channel.send('┌───────────── •✧✧•─ ───────────┐\n   -Balanced Announcement - Naming Convention -\n└───────────── •✧✧• ────────────┘\n\nWelcome all the new members to **Balanced**. Just a small announcement about our **naming convention**.\n\nPlease ensure you have your **in-game** WoW name in Discord. **"Discord Name (WoW in-game Name)"** or **"Wow in-game Name"**\nFor example **Lily ^.^ (Mirilia)** or **RabuRaru (Sabotage)** or just the WoW name **Sabotage**\n\nTo **rename** yourself in the discord, just right-click yourself on the right handside and select **"Change Nickname"**\n\nThank you!');
  }

  if (command === 'roles'){
    message.channel.send('**Role Selection**\nPlease select any of the reactions to be given it\'s corresponding role.\n\n**Content**\n<:BalancedCircle:887416084163096667> - Social\n<:RaiderIO:834195704464539665> - Mythic+\n<:Warrior:834196758174760960> - PVP\n\n**Classes**\n<:Guardian:834196791129931806> - Tank\n<:Paladin:834197477627265055> - Heal\n<:Mage:834197759786614835> - DPS\n\n**Note** - Any other roles will be assigned to you manually.');
  }
  if (command === 'role-select'){
    message.channel.send('@everyone We have now setup a channel which will allow you to obtain a taggable role for the content or class you are. Please head to the <#887389092688572417> channel if you\'d like to select your roles.');
  }
});

client.login(process.env.TOKEN)

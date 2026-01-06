const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'konoha-hvfc.aternos.me',
  port: 56709,
  username: 'RandomBot'
})

bot.once('spawn', () => {
  console.log('Bot spawned')

  setInterval(() => {
    // stop previous actions
    bot.setControlState('forward', false)
    bot.setControlState('back', false)
    bot.setControlState('left', false)
    bot.setControlState('right', false)
    bot.setControlState('jump', false)

    // random movement
    const actions = ['forward', 'back', 'left', 'right', 'jump']
    const action = actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)

    // stop after random time
    setTimeout(() => {
      bot.setControlState(action, false)
    }, Math.random() * 2000 + 500)

  }, 3000)
})

bot.on('kicked', reason => console.log('Kicked:', reason))
bot.on('error', err => console.log('Error:', err))

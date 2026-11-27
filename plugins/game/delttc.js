module.exports = {
    command: ["delttc","delttt"],
    category: "game",
    async run({ hsin, m }) {
        {
        {
                    global.game = global.game ? global.game : {}
                    try {
                    if (global.game) {
                    delete global.game
                    hsin.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!global.game) {
                    m.reply(`Session TicTacToe🎮 tidak ada`)
                    } else throw '?'
                    } catch (e) {
                    m.reply('rusak')
                    }
                    }
        }
    }
}

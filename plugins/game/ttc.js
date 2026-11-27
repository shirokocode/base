module.exports = {
    command: ["ttc","ttt","tictactoe"],
    category: "game",
    async run({ command, hsin, m, parseMention, prefix, text }) {
        {
        {
                    let TicTacToe = require("../../lib/tictactoe")
                    global.game = global.game ? global.game : {}
                    if (Object.values(global.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
                    let room = Object.values(global.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                    if (room) {
                    m.reply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                    return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                    }[v]
                    })
                    let str = `Room ID: ${room.id}
        
        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}
        
        Menunggu @${room.game.currentTurn.split('@')[0]}
        
        Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await hsin.sendText(room.x, str, m, { mentions: parseMention(str) } )
                    await hsin.sendText(room.o, str, m, { mentions: parseMention(str) } )
                    } else {
                    room = {
                    id: 'tictactoe-' + (+new Date),
                    x: m.chat,
                    o: '',
                    game: new TicTacToe(m.sender, 'o'),
                    state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    global.game[room.id] = room
                    }
                    }
        }
    }
}

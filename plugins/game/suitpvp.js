module.exports = {
    command: ["suitpvp","suit"],
    category: "game",
    async run({ hsin, m, parseMention, prefix }) {
        {
        {
                    global.suit = global.suit ? global.suit : {}
                    let poin = 10
                    let poin_lose = 10
                    let timeout = 60000
                    if (Object.values(global.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
        	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                    if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                    if (Object.values(global.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                    let id = 'suit_' + new Date() * 1
                    let caption = `_*SUIT PvP*_
        
        @${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit
        
        Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                    global.suit[id] = {
                    chat: await hsin.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                    if (global.suit[id]) hsin.sendText(m.chat, `_Waktu suit habis_`, m)
                    delete global.suit[id]
                    }, 60000), poin, poin_lose, timeout
                    }
                    }
        }
    }
}

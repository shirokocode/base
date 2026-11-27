module.exports = {
    command: ["listcmd"],
    category: "database",
    async run({ hsin, m }) {
        {
        {
                        let teks = `
        *List Hash*
        Info: *bold* hash is Locked
        ${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
        `.trim()
                        hsin.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
                    }
        }
    }
}

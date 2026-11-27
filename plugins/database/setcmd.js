module.exports = {
    command: ["setcmd"],
    category: "database",
    async run({ m, text }) {
        {
        {
                        if (!m.quoted) throw 'Reply Pesan!'
                        if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                        if (!text) throw `Untuk Command Apa?`
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                        global.db.data.sticker[hash] = {
                            text,
                            mentionedJid: m.mentionedJid,
                            creator: m.sender,
                            at: + new Date,
                            locked: false,
                        }
                        m.reply(`Done!`)
                    }
        }
    }
}

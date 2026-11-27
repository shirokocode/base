module.exports = {
    command: ["lockcmd"],
    category: "database",
    async run({ command, isCreator, m }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!m.quoted) throw 'Reply Pesan!'
                        if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                        global.db.data.sticker[hash].locked = !/^un/i.test(command)
                        m.reply('Done!')
                    }
        }
    }
}

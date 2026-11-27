module.exports = {
    command: ["delcmd"],
    category: "database",
    async run({ m }) {
        {
        {
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (!hash) throw `Tidak ada hash`
                        if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                        delete global.db.data.sticker[hash]
                        m.reply(`Done!`)
                    }
        }
    }
}

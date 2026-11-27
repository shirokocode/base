module.exports = {
    command: ["afk"],
    category: "main",
    async run({ m, text }) {
        {
        {
                        let user = global.db.data.users[m.sender]
                        user.afkTime = + new Date
                        user.afkReason = text
                        m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
                    }
        }
    }
}

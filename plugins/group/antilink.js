module.exports = {
    command: ["antilink"],
    category: "group",
    async run({ args, hsin, isAdmins, isBotAdmins, m }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (args[0] === "on") {
                        if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                        db.data.chats[m.chat].antilink = true
                        m.reply(`Antilink Aktif !`)
                        } else if (args[0] === "off") {
                        if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                        db.data.chats[m.chat].antilink = false
                        m.reply(`Antilink Tidak Aktif !`)
                        } else {
                         let buttons = [
                                { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                                { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `Mode Antilink`, hsin.user.name, m)
                        }
                     }
        }
    }
}

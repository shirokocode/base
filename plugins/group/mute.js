module.exports = {
    command: ["mute"],
    category: "group",
    async run({ args, hsin, isAdmins, isBotAdmins, m }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (args[0] === "on") {
                        if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                        db.data.chats[m.chat].mute = true
                        m.reply(`${hsin.user.name} telah di mute di group ini !`)
                        } else if (args[0] === "off") {
                        if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                        db.data.chats[m.chat].mute = false
                        m.reply(`${hsin.user.name} telah di unmute di group ini !`)
                        } else {
                         let buttons = [
                                { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                                { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `Mute Bot`, hsin.user.name, m)
                        }
                     }
        }
    }
}

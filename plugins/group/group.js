module.exports = {
    command: ["group","grup"],
    category: "group",
    async run({ args, hsin, isAdmins, isBotAdmins, jsonformat, m }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (args[0] === 'close'){
                            await hsin.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'open'){
                            await hsin.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                        } else {
                        let buttons = [
                                { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                                { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `Mode Group`, hsin.user.name, m)
        
                     }
                    }
        }
    }
}

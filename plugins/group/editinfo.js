module.exports = {
    command: ["editinfo"],
    category: "group",
    async run({ args, hsin, isAdmins, isBotAdmins, jsonformat, m }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                     if (args[0] === 'open'){
                        await hsin.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                     } else if (args[0] === 'close'){
                        await hsin.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                     } else {
                     let buttons = [
                                { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                                { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `Mode Edit Info`, hsin.user.name, m)
        
                    }
                    }
        }
    }
}

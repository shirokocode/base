module.exports = {
    command: ["setmenu"],
    category: "owner",
    async run({ args, botNumber, hsin, isCreator, m }) {
        {
        {
                    if (!isCreator) throw mess.owner
                    let setbot = db.data.settings[botNumber]
                       if (args[0] === 'templateImage'){
                        setbot.templateImage = true
                        setbot.templateVideo = false
                        setbot.templateGif = false
                        setbot.templateMsg = false
                        m.reply(mess.success)
                        } else if (args[0] === 'templateVideo'){
                        setbot.templateImage = false
                        setbot.templateVideo = true
                        setbot.templateGif = false
                        setbot.templateMsg = false
                        m.reply(mess.success)
                        } else if (args[0] === 'templateGif'){
                        setbot.templateImage = false
                        setbot.templateVideo = false
                        setbot.templateGif = true
                        setbot.templateMsg = false
                        m.reply(mess.success)
                        } else if (args[0] === 'templateMessage'){
                        setbot.templateImage = false
                        setbot.templateVideo = false
                        setbot.templateGif = false
                        setbot.templateMsg = true
                        m.reply(mess.success)
                        } else {
                        let sections = [
                        {
                        title: "CHANGE MENU BOT",
                        rows: [
                        {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                        {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                        {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                        {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                        ]
                        },
                        ]
                        hsin.sendListMsg(m.chat, `Please select the menu you want to change!`, hsin.user.name, `Hello Owner !`, `Click Here`, sections, m)
                        }
                    }
        }
    }
}

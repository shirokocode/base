module.exports = {
    command: ["ephemeral"],
    category: "group",
    async run({ WA_DEFAULT_EPHEMERAL, args, hsin, isAdmins, isBotAdmins, jsonformat, m, text }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (!text) throw 'Masukkan value enable/disable'
                        if (args[0] === 'enable') {
                            await hsin.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'disable') {
                            await hsin.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        }
                    }
        }
    }
}

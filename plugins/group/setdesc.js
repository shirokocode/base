module.exports = {
    command: ["setdesc","setdesk"],
    category: "group",
    async run({ hsin, isAdmins, isBotAdmins, jsonformat, m, text }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (!text) throw 'Text ?'
                        await hsin.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                    }
        }
    }
}

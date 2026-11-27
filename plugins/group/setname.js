module.exports = {
    command: ["setname","setsubject"],
    category: "group",
    async run({ hsin, isAdmins, isBotAdmins, jsonformat, m, text }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                        if (!text) throw 'Text ?'
                        await hsin.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                    }
        }
    }
}

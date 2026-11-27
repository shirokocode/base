module.exports = {
    command: ["hidetag"],
    category: "group",
    async run({ hsin, isAdmins, isBotAdmins, m, participants, q }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
                    hsin.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                    }
        }
    }
}

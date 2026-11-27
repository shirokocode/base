module.exports = {
    command: ["delete","del"],
    category: "group",
    async run({ hsin, m }) {
        {
        {
                        if (!m.quoted) throw false
                        let { chat, fromMe, id, isBaileys } = m.quoted
                        if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                        hsin.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                    }
        }
    }
}

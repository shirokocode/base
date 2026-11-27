module.exports = {
    command: ["tagall"],
    category: "group",
    async run({ hsin, isAdmins, isBotAdmins, m, participants, q }) {
        {
        {
                        if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
        let teks = `══✪〘 *👥 Tag All* 〙✪══
         
         ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                        for (let mem of participants) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                        }
                        hsin.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                        }
        }
    }
}

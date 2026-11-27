module.exports = {
    command: ["infochat"],
    category: "owner",
    async run({ hsin, m, moment }) {
        {
        {
                        if (!m.quoted) m.reply('Reply Pesan')
                        let msg = await m.getQuotedObj()
                        if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                        let teks = ''
                        for (let i of msg.userReceipt) {
                            let read = i.readTimestamp
                            let unread = i.receiptTimestamp
                            let waktu = read ? read : unread
                            teks += `⭔ @${i.userJid.split('@')[0]}\n`
                            teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                        }
                        hsin.sendTextWithMentions(m.chat, teks, m)
                    }
        }
    }
}

module.exports = {
    command: ["listgc"],
    category: "owner",
    async run({ hsin, m, moment, store }) {
        {
        {
                         let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                         let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                         for (let i of anu) {
                             let metadata = await hsin.groupMetadata(i)
                             teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                         }
                         hsin.sendTextWithMentions(m.chat, teks, m)
                     }
        }
    }
}

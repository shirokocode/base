module.exports = {
    command: ["listpc"],
    category: "owner",
    async run({ hsin, m, store }) {
        {
        {
                         let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                         let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                         for (let i of anu) {
                             let nama = store.messages[i].array[0].pushName
                             teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                         }
                         hsin.sendTextWithMentions(m.chat, teks, m)
                     }
        }
    }
}

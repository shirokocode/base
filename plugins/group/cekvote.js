module.exports = {
    command: ["cekvote"],
    category: "group",
    async run({ hsin, m, prefix, vote }) {
        {
        if (!m.isGroup) throw mess.group
        if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
        teks_vote = `*「 VOTE 」*
        
        *Alasan:* ${vote[m.chat][0]}
        
        ┌〔 UPVOTE 〕
        │ 
        ├ Total: ${upvote.length}
        ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
        │ 
        └────
        
        ┌〔 DEVOTE 〕
        │ 
        ├ Total: ${devote.length}
        ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
        │ 
        └────
        
        *${prefix}hapusvote* - untuk menghapus vote
        
        
        ©${hsin.user.id}
        `
        hsin.sendTextWithMentions(m.chat, teks_vote, m)
        }
    }
}

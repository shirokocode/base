module.exports = {
    command: ["upvote"],
    category: "group",
    async run({ hsin, m, prefix, vote }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                    isVote = vote[m.chat][1].concat(vote[m.chat][2])
                    wasVote = isVote.includes(m.sender)
                    if (wasVote) throw 'Kamu Sudah Vote'
                    vote[m.chat][1].push(m.sender)
                    menvote = vote[m.chat][1].concat(vote[m.chat][2])
                    teks_vote = `*「 VOTE 」*
        
        *Alasan:* ${vote[m.chat][0]}
        
        ┌〔 UPVOTE 〕
        │ 
        ├ Total: ${vote[m.chat][1].length}
        ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
        │ 
        └────
        
        ┌〔 DEVOTE 〕
        │ 
        ├ Total: ${vote[m.chat][2].length}
        ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
        │ 
        └────
        
        *${prefix}hapusvote* - untuk menghapus vote`
                    let buttonsUpvote = [
                      {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
                      {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
                    ]
        
                    let buttonMessageUpvote = {
                        text: teks_vote,
                        footer: hsin.user.name,
                        buttons: buttonsUpvote,
                        headerType: 1,
                        mentions: menvote
                     }
                    hsin.sendMessage(m.chat, buttonMessageUpvote)
        	    }
        }
    }
}

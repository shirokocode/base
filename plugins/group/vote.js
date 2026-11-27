module.exports = {
    command: ["vote"],
    category: "group",
    async run({ command, hsin, m, prefix, q, sleep, text, vote }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                    if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
                    m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                    vote[m.chat] = [q, [], []]
                    await sleep(1000)
                    upvote = vote[m.chat][1]
                    devote = vote[m.chat][2]
                    teks_vote = `*「 VOTE 」*
        
        *Alasan:* ${vote[m.chat][0]}
        
        ┌〔 UPVOTE 〕
        │ 
        ├ Total: ${vote[m.chat][1].length}
        │
        │ 
        └────
        
        ┌〔 DEVOTE 〕
        │ 
        ├ Total: ${vote[m.chat][2].length}
        │
        │ 
        └────
        
        *${prefix}hapusvote* - untuk menghapus vote`
        let buttonsVote = [
          {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
          {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
        ]
        
                    let buttonMessageVote = {
                        text: teks_vote,
                        footer: hsin.user.name,
                        buttons: buttonsVote,
                        headerType: 1
                    }
                    hsin.sendMessage(m.chat, buttonMessageVote)
        	    }
        }
    }
}

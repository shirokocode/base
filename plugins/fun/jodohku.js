module.exports = {
    command: ["jodohku"],
    category: "fun",
    async run({ hsin, m, participants }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    let member = participants.map(u => u.id)
                    let me = m.sender
                    let jodoh = member[Math.floor(Math.random() * member.length)]
                    let jawab = `👫Jodoh mu adalah
        
        @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                    let ments = [me, jodoh]
                    let buttons = [
                                { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, jawab, hsin.user.name, m, {mentions: ments})
                    }
        }
    }
}

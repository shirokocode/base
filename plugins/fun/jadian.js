module.exports = {
    command: ["jadian"],
    category: "fun",
    async run({ hsin, m, participants }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    let member = participants.map(u => u.id)
                    let orang = member[Math.floor(Math.random() * member.length)]
                    let jodoh = member[Math.floor(Math.random() * member.length)]
                    let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
        
        @${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                    let menst = [orang, jodoh]
                    let buttons = [
                                { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, jawab, hsin.user.name, m, {mentions: menst})
                    }
        }
    }
}

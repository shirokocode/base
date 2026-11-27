module.exports = {
    command: ["anonymous"],
    category: "anonymous",
    async run({ hsin, m }) {
        {
        {
                        if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
        				global.anonymous = global.anonymous ? global.anonymous : {}
        				let buttons = [
                            { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                        ]
                        hsin.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hsin.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hsin.user.name, m)
                    }
        }
    }
}

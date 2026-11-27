module.exports = {
    command: ["coffe","kopi"],
    category: "random",
    async run({ hsin, m }) {
        {
        {
                    let buttons = [
                            {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: 'https://coffee.alexflipnote.dev/random' },
                            caption: `☕ Random Coffe`,
                            footer: hsin.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}

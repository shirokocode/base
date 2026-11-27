module.exports = {
    command: ["quotesanime","quoteanime"],
    category: "random",
    async run({ hsin, m }) {
        {
        {
        		let { quotesAnime } = require('../../lib/scraper')
                        let anu = await quotesAnime()
                        result = anu[Math.floor(Math.random() * anu.length)]
                        let buttons = [
                            {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                        ]
                        let buttonMessage = {
                            text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 2
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}

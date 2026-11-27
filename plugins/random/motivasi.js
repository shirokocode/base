module.exports = {
    command: ["motivasi","dilanquote","bucinquote","katasenja","puisi"],
    category: "random",
    async run({ command, fetchJson, hsin, m }) {
        {
        {
                        let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                        let buttons = [
                            {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                        ]
                        let buttonMessage = {
                            text: anu.result.message,
                            footer: 'Press The Button Below',
                            buttons: buttons,
                            headerType: 2
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}

module.exports = {
    command: ["google"],
    category: "search",
    async run({ command, m, prefix, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} fatih arridho`
                        let google = require('google-it')
                        google({'query': text}).then(res => {
                        let teks = `Google Search From : ${text}\n\n`
                        for (let g of res) {
                        teks += `⭔ *Title* : ${g.title}\n`
                        teks += `⭔ *Description* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                        } 
                        m.reply(teks)
                        })
                        }
        }
    }
}

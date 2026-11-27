module.exports = {
    command: ["couple"],
    category: "random",
    async run({ fetchJson, hsin, m }) {
        {
        {
                        m.reply(mess.wait)
                        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                        let random = anu[Math.floor(Math.random() * anu.length)]
                        hsin.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                        hsin.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                    }
        }
    }
}

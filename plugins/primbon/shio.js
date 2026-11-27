module.exports = {
    command: ["shio"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                        let anu = await primbon.shio(text)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
                    }
        }
    }
}

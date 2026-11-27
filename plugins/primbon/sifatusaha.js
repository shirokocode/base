module.exports = {
    command: ["sifatusaha"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
                    }
        }
    }
}

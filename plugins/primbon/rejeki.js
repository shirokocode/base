module.exports = {
    command: ["rejeki","rezeki"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                    }
        }
    }
}

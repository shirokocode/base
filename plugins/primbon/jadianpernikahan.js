module.exports = {
    command: ["jadianpernikahan","jadiannikah"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
                    }
        }
    }
}

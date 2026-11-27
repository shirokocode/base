module.exports = {
    command: ["haribaik"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                    }
        }
    }
}

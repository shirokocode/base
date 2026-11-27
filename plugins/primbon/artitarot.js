module.exports = {
    command: ["artitarot","tarot"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                    }
        }
    }
}

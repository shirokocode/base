module.exports = {
    command: ["ramalannasib","ramalnasib","nasib"],
    category: "primbon",
    async run({ hsin, m, primbon, text }) {
        {
        {
                        if (!text) throw `Example : 7, 7, 2005`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
                    }
        }
    }
}

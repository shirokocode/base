module.exports = {
    command: ["memancing"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                        let [tgl, bln, thn] = text.split`,`
                        let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
                    }
        }
    }
}

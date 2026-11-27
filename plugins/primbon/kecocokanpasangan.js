module.exports = {
    command: ["kecocokanpasangan","cocokpasangan","pasangan"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} Dika|Novia`
                        let [nama1, nama2] = text.split`|`
                        let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
                    }
        }
    }
}

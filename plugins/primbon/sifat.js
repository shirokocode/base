module.exports = {
    command: ["sifat","karakter"],
    category: "primbon",
    async run({ command, hsin, m, prefix, primbon, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                        let [nama, tgl, bln, thn] = text.split`,`
                        let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                        if (anu.status == false) return m.reply(anu.message)
                        hsin.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
                    }
        }
    }
}

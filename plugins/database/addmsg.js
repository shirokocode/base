module.exports = {
    command: ["addmsg"],
    category: "database",
    async run({ command, m, prefix, quoted, text }) {
        {
        {
                        if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                        if (!text) throw `Example : ${prefix + command} nama file`
                        let msgs = global.db.data.database
                        if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                        msgs[text.toLowerCase()] = quoted.fakeObj
        m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
            
        Akses dengan ${prefix}getmsg ${text}
        
        Lihat list Pesan Dengan ${prefix}listmsg`)
                    }
        }
    }
}

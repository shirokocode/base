module.exports = {
    command: ["getmsg"],
    category: "database",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                        let msgs = global.db.data.database
                        if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                        hsin.copyNForward(m.chat, msgs[text.toLowerCase()], true)
                    }
        }
    }
}

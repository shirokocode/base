module.exports = {
    command: ["delmsg","deletemsg"],
    category: "database",
    async run({ m, text }) {
        {
        {
        	        let msgs = global.db.data.database
        	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
        		delete msgs[text.toLowerCase()]
        		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
                    }
        }
    }
}

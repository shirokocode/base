module.exports = {
    command: ["listmsg"],
    category: "database",
    async run({ fs, getContentType, m }) {
        {
        {
                        let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
        	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
        		let teks = '「 LIST DATABASE 」\n\n'
        		for (let i of seplit) {
        		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
        	        }
        	        m.reply(teks)
        	    }
        }
    }
}

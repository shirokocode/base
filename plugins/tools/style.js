module.exports = {
    command: ["style","styletext"],
    category: "tools",
    async run({ isPremium, m, text }) {
        {
        {
        	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
        		db.data.users[m.sender].limit -= 1 // -1 limit
        		let { styletext } = require('../../lib/scraper')
        		if (!text) throw 'Masukkan Query text!'
                        let anu = await styletext(text)
                        let teks = `Srtle Text From ${text}\n\n`
                        for (let i of anu) {
                            teks += `⭔ *${i.name}* : ${i.result}\n\n`
                        }
                        m.reply(teks)
        	    }
        }
    }
}

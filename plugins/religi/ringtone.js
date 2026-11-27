module.exports = {
    command: ["ringtone"],
    category: "religi",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
        		if (!text) throw `Example : ${prefix + command} black rover`
                let { ringtone } = require('../../lib/scraper')
        		let anu = await ringtone(text)
        		let result = anu[Math.floor(Math.random() * anu.length)]
        		hsin.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
        	    }
        }
    }
}

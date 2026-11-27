module.exports = {
    command: ["emojimix"],
    category: "convert",
    async run({ command, fetchJson, fs, hsin, m, prefix, text }) {
        {
        {
        		let [emoji1, emoji2] = text.split`+`
        		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
        		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
        		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        		for (let res of anu.results) {
        		    let encmedia = await hsin.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
        		    await fs.unlinkSync(encmedia)
        		}
        	    }
        }
    }
}

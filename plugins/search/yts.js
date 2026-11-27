module.exports = {
    command: ["yts","ytsearch"],
    category: "search",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} story wa anime`
                        let yts = require("yt-search")
                        let search = await yts(text)
                        let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                        let no = 1
                        for (let i of search.all) {
                            teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                        }
                        hsin.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                    }
        }
    }
}

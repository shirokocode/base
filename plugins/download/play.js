module.exports = {
    command: ["play","ytplay"],
    category: "download",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} story wa anime`
                        let yts = require("yt-search")
                        let search = await yts(text)
                        let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                        let buttons = [
                            {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                            {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                        ]
                        let buttonMessage = {
                            image: { url: anu.thumbnail },
                            caption: `
        ⭔ Title : ${anu.title}
        ⭔ Ext : Search
        ⭔ ID : ${anu.videoId}
        ⭔ Duration : ${anu.timestamp}
        ⭔ Viewers : ${anu.views}
        ⭔ Upload At : ${anu.ago}
        ⭔ Author : ${anu.author.name}
        ⭔ Channel : ${anu.author.url}
        ⭔ Description : ${anu.description}
        ⭔ Url : ${anu.url}`,
                            footer: hsin.user.name,
                            buttons: buttons,
                            headerType: 4
                        }
                        hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
                    }
        }
    }
}

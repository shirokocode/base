module.exports = {
    command: ["umma","ummadl"],
    category: "download",
    async run({ command, hsin, isUrl, m, prefix, text }) {
        {
        {
        	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                        let { umma } = require('../../lib/scraper')
        		let anu = await umma(isUrl(text)[0])
        		if (anu.type == 'video') {
        		    let buttons = [
                                {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                                {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                            ]
        		    let buttonMessage = {
        		        image: { url: anu.author.profilePic },
        			caption: `
        ⭔ Title : ${anu.title}
        ⭔ Author : ${anu.author.name}
        ⭔ Like : ${anu.like}
        ⭔ Caption : ${anu.caption}
        ⭔ Url : ${anu.media[0]}
        Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
        `,
        			footer: hsin.user.name,
        			buttons,
        			headerType: 4
        		    }
        		    hsin.sendMessage(m.chat, buttonMessage, { quoted: m })
        		} else if (anu.type == 'image') {
        		    anu.media.map(async (url) => {
        		        hsin.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
        		    })
        		}
        	    }
        }
    }
}

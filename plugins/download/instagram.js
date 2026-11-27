module.exports = {
    command: ["instagram","ig","igdl"],
    category: "download",
    async run({ fetchJson, hsin, isUrl, m, text }) {
        {
        {
                        if (!text) throw 'No Query Url!'
                        m.reply(mess.wait)
                        if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                            let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                            for (let media of anu.data) hsin.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                        } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                            let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                            hsin.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                        }
                    }
        }
    }
}

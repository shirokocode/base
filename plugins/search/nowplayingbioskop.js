module.exports = {
    command: ["nowplayingbioskop"],
    category: "search",
    async run({ fetchJson, hsin, m }) {
        {
        {
                    let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
                    let capt = `Now Playing Bioskop\n\n`
                    for (let i of res.result){
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
                    }
                    hsin.sendImage(m.chat, res.result[0].img, capt, m)
                    }
        }
    }
}

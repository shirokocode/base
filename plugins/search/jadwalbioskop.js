module.exports = {
    command: ["jadwalbioskop"],
    category: "search",
    async run({ command, fetchJson, hsin, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example: ${prefix + command} jakarta`
                    let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
                    let capt = `Jadwal Bioskop From : ${text}\n\n`
                    for (let i of res.result){
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Thumbnail: ${i.thumb}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                    }
                    hsin.sendImage(m.chat, res.result[0].thumb, capt, m)
                    }
        }
    }
}

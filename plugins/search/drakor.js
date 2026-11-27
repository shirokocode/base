module.exports = {
    command: ["drakor"],
    category: "search",
    async run({ command, fetchJson, hsin, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} love`
                    let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
                    let capt = `Drakor Search From : ${text}\n\n`
                    for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Years: ${i.years}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
                    }
                    hsin.sendImage(m.chat, res.result[0].thumbnail, capt, m)
                    }
        }
    }
}

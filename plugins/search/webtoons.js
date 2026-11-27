module.exports = {
    command: ["webtoons"],
    category: "search",
    async run({ command, fetchJson, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} love`
                    let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
                    let capt = `Webtoons Search From : ${text}\n\n`
                    for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Like: ${i.like}\n`
                    capt += `⭔ Creator: ${i.creator}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                    }
                    m.reply(capt)
                    }
        }
    }
}

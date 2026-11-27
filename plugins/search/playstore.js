module.exports = {
    command: ["playstore"],
    category: "search",
    async run({ command, fetchJson, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} clash of clans`
                    let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
                    let teks = `⭔ Playstore Search From : ${text}\n\n`
                    for (let i of res.result) {
                    teks += `⭔ Name : ${i.name}\n`
                    teks += `⭔ Link : ${i.link}\n`
                    teks += `⭔ Developer : ${i.developer}\n`
                    teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
                    }
                    m.reply(teks)
                    }
        }
    }
}

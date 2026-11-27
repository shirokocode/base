module.exports = {
    command: ["aminio"],
    category: "search",
    async run({ command, fetchJson, hsin, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example: ${prefix + command} free fire`
                    let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
                    let capt = `Amino Search From : ${text}\n\n`
                    for (let i of res.result){
                    capt += `⭔ Community: ${i.community}\n`
                    capt += `⭔ Community Link: ${i.community_link}\n`
                    capt += `⭔ Thumbnail: ${i.community_thumb}\n`
                    capt += `⭔ Description: ${i.community_desc}\n`
                    capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
                    }
                    hsin.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
                    }
        }
    }
}

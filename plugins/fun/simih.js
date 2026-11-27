module.exports = {
    command: ["simih","simisimi"],
    category: "fun",
    async run({ command, fetchJson, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} text`
                    hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
                    m.reply(hm.result.message)
                    }
        }
    }
}

module.exports = {
    command: ["anime","waifu","husbu","neko","shinobu","megumin","waifus","nekos","trap","blowjob"],
    category: "random",
    async run({ command, hsin, m }) {
        {
        {
                        m.reply(mess.wait)
                        hsin.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
                    }
        }
    }
}

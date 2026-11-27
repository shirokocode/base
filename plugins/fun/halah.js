module.exports = {
    command: ["halah","hilih","huluh","heleh","holoh"],
    category: "fun",
    async run({ command, m, prefix, q, text }) {
        {
        if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                    ter = command[1].toLowerCase()
                    tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                    m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
        }
    }
}

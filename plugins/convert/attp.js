module.exports = {
    command: ["attp","ttp"],
    category: "convert",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                   if (!text) throw `Example : ${prefix + command} text`
                   await hsin.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hsin', 'asistent', m, {asSticker: true})
                 }
        }
    }
}

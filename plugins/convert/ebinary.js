module.exports = {
    command: ["ebinary"],
    category: "convert",
    async run({ command, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} text`
                    let { eBinary } = require('../../lib/binary')
                    let eb = await eBinary(text)
                    m.reply(eb)
                }
        }
    }
}

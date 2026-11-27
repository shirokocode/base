module.exports = {
    command: ["dbinary"],
    category: "convert",
    async run({ command, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} text`
                    let { dBinary } = require('../../lib/binary')
                    let db = await dBinary(text)
                    m.reply(db)
                }
        }
    }
}

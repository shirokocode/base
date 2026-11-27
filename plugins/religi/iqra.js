module.exports = {
    command: ["iqra"],
    category: "religi",
    async run({ command, getBuffer, hsin, m, prefix, text }) {
        {
        {
        		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
        		if (!text) throw oh
        		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
        		hsin.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
        		}
        }
    }
}

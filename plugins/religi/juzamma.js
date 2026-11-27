module.exports = {
    command: ["juzamma"],
    category: "religi",
    async run({ args, command, hsin, m, prefix }) {
        {
        {
        		if (args[0] === 'pdf') {
        		m.reply(mess.wait)
        		hsin.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
        		} else if (args[0] === 'docx') {
        		m.reply(mess.wait)
        		hsin.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
        		} else if (args[0] === 'pptx') {
        		m.reply(mess.wait)
        		hsin.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
        		} else if (args[0] === 'xlsx') {
        		m.reply(mess.wait)
        		hsin.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
        		} else {
        		m.reply(`Mau format apa ? Example : ${prefix + command} pdf
        
        Format yang tersedia : pdf, docx, pptx, xlsx`)
        		}
        		}
        }
    }
}

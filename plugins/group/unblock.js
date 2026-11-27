module.exports = {
    command: ["unblock"],
    category: "group",
    async run({ hsin, isCreator, jsonformat, m, text }) {
        {
        {
        		if (!isCreator) throw mess.owner
        		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        		await hsin.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	}
        }
    }
}

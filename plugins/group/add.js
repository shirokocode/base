module.exports = {
    command: ["add"],
    category: "group",
    async run({ hsin, isAdmins, isBotAdmins, jsonformat, m, text }) {
        {
        {
        		if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
        		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        		await hsin.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        	}
        }
    }
}

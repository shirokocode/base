module.exports = {
    command: ["q","quoted"],
    category: "tools",
    async run({ hsin, m }) {
        {
        {
        		if (!m.quoted) return m.reply('Reply Pesannya!!')
        		let wokwol = await hsin.serializeM(await m.getQuotedObj())
        		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
        		await wokwol.quoted.copyNForward(m.chat, true)
                    }
        }
    }
}

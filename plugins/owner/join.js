module.exports = {
    command: ["join"],
    category: "owner",
    async run({ args, hsin, isCreator, isUrl, jsonformat, m, text }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!text) throw 'Masukkan Link Group!'
                        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                        m.reply(mess.wait)
                        let result = args[0].split('https://chat.whatsapp.com/')[1]
                        await hsin.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                    }
        }
    }
}

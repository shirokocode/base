module.exports = {
    command: ["react"],
    category: "owner",
    async run({ args, hsin, isCreator, m, quoted }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        reactionMessage = {
                            react: {
                                text: args[0],
                                key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                            }
                        }
                        hsin.sendMessage(m.chat, reactionMessage)
                    }
        }
    }
}

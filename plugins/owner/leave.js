module.exports = {
    command: ["leave"],
    category: "owner",
    async run({ hsin, isCreator, jsonformat, m }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        await hsin.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                    }
        }
    }
}

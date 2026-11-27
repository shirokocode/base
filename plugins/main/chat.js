module.exports = {
    command: ["chat"],
    category: "main",
    async run({ args, hsin, isCreator, jsonformat, m, q }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                        if (args[0] === 'mute') {
                            hsin.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'unmute') {
                            hsin.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'archive') {
                            hsin.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'unarchive') {
                            hsin.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'read') {
                            hsin.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'unread') {
                            hsin.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        } else if (args[0] === 'delete') {
                            hsin.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                        }
                    }
        }
    }
}

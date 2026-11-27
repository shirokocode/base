module.exports = {
    command: ["listonline","liston"],
    category: "owner",
    async run({ args, botNumber, hsin, m, store }) {
        {
        {
                            let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                            let online = [...Object.keys(store.presences[id]), botNumber]
                            hsin.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                     }
        }
    }
}

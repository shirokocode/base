/**
 * Fallback in-memory store.
 * Dipakai hanya jika baileys yang terpasang tidak lagi menyediakan makeInMemoryStore.
 * Menyediakan API yang dipakai bot: contacts, chats.all(), messages[jid].array, presences, loadMessage(), bind().
 */
const makeFallbackStore = () => {
    const store = {
        contacts: {},
        presences: {},
        messages: {},
        chats: {
            _map: new Map(),
            all() { return [...this._map.values()] },
            get(id) { return this._map.get(id) }
        },
        bind(ev) {
            ev.on('contacts.upsert', (list) => {
                for (const c of list) store.contacts[c.id] = { ...(store.contacts[c.id] || {}), ...c }
            })
            ev.on('contacts.update', (list) => {
                for (const c of list) if (c.id) store.contacts[c.id] = { ...(store.contacts[c.id] || {}), ...c }
            })
            ev.on('chats.upsert', (list) => {
                for (const c of list) store.chats._map.set(c.id, { ...(store.chats._map.get(c.id) || {}), ...c })
            })
            ev.on('chats.update', (list) => {
                for (const c of list) if (c.id) store.chats._map.set(c.id, { ...(store.chats._map.get(c.id) || {}), ...c })
            })
            ev.on('presence.update', ({ id, presences }) => {
                store.presences[id] = { ...(store.presences[id] || {}), ...presences }
            })
            ev.on('messages.upsert', ({ messages }) => {
                for (const msg of messages) {
                    const jid = msg.key && msg.key.remoteJid
                    if (!jid) continue
                    if (!store.chats._map.has(jid)) store.chats._map.set(jid, { id: jid })
                    const list = store.messages[jid] || (store.messages[jid] = { array: [] })
                    list.array.push(msg)
                    if (list.array.length > 200) list.array.shift()
                }
            })
        },
        async loadMessage(jid, id) {
            const list = store.messages[jid]
            return list ? list.array.find(m => m.key.id === id) : undefined
        }
    }
    return store
}

module.exports = { makeFallbackStore }

module.exports = {
    command: ["next","lanjut"],
    category: "anonymous",
    async run({ hsin, m }) {
        {
                        if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                        global.anonymous = global.anonymous ? global.anonymous : {}
                        let romeo = Object.values(global.anonymous).find(room => room.check(m.sender))
                        if (!romeo) {
                            let buttons = [
                                { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                            throw false
                        }
                        let other = romeo.other(m.sender)
                        if (other) await hsin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                        delete global.anonymous[romeo.id]
                        let room = Object.values(global.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                        if (room) {
                            let buttons = [
                                { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                                { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                            ]
                            await hsin.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hsin.user.name, m)
                            room.b = m.sender
                            room.state = 'CHATTING'
                            await hsin.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hsin.user.name, m)
                        } else {
                            let id = + new Date
                            global.anonymous[id] = {
                                id,
                                a: m.sender,
                                b: '',
                                state: 'WAITING',
                                check: function (who = '') {
                                    return [this.a, this.b].includes(who)
                                },
                                other: function (who = '') {
                                    return who === this.a ? this.b : who === this.b ? this.a : ''
                                },
                            }
                            let buttons = [
                                { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hsin.user.name, m)
                        }
        }
    }
}

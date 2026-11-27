module.exports = {
    command: ["mulai","start"],
    category: "anonymous",
    async run({ hsin, m }) {
        {
                        if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                        global.anonymous = global.anonymous ? global.anonymous : {}
                        if (Object.values(global.anonymous).find(room => room.check(m.sender))) {
                            let buttons = [
                                { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hsin.user.name, m)
                            throw false
                        }
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

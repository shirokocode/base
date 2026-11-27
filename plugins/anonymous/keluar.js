module.exports = {
    command: ["keluar"],
    category: "anonymous",
    async run(ctx) {
        const { command, hsin, m } = ctx
        do {
                        if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                        global.anonymous = global.anonymous ? global.anonymous : {}
                        let room = Object.values(global.anonymous).find(room => room.check(m.sender))
                        if (!room) {
                            let buttons = [
                                { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                            ]
                            await hsin.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                            throw false
                        }
                        m.reply('Ok')
                        let other = room.other(m.sender)
                        if (other) await hsin.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                        delete global.anonymous[room.id]
                        if (command === 'leave') break
                    } while (false)
        // switch asli tidak punya break di sini, jadi lanjut menjalankan perintah 'mulai'
        return require('../../lib/plugin-loader').get("mulai").run(ctx)
    }
}

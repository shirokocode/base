module.exports = {
    command: ["family100"],
    category: "game",
    async run({ _family100, fetchJson, hsin, m }) {
        {
        {
                        if ('family100'+m.chat in _family100) {
                            m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                            throw false
                        }
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                        let random = anu[Math.floor(Math.random() * anu.length)]
                        let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                        _family100['family100'+m.chat] = {
                            id: 'family100'+m.chat,
                            pesan: await hsin.sendText(m.chat, hasil, m),
                            ...random,
                            terjawab: Array.from(random.jawaban, () => false),
                            hadiah: 6,
                        }
                    }
        }
    }
}

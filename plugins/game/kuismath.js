module.exports = {
    command: ["kuismath","math"],
    category: "game",
    async run({ hsin, kuismath, m, prefix, sleep, text }) {
        {
        {
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                        let { genMath, modes } = require('../../src/math')
                        if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                        let result = await genMath(text.toLowerCase())
                        hsin.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                            kuismath[m.sender.split('@')[0]] = result.jawaban
                        })
                        await sleep(result.waktu)
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                            delete kuismath[m.sender.split('@')[0]]
                        }
                    }
        }
    }
}

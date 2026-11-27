module.exports = {
    command: ["tebak"],
    category: "game",
    async run({ args, caklontong, caklontong_desk, command, fetchJson, hsin, m, prefix, sleep, tebakgambar, tebakkalimat, tebakkata, tebaklagu, tebaklirik, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                        if (args[0] === "lagu") {
                            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            let msg = await hsin.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                            hsin.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                            tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                            })
                            await sleep(60000)
                            if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete tebaklagu[m.sender.split('@')[0]]
                            }
                        } else if (args[0] === 'gambar') {
                            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            hsin.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                            tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                            })
                            await sleep(60000)
                            if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete tebakgambar[m.sender.split('@')[0]]
                            }
                        } else if (args[0] === 'kata') {
                            if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            hsin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                            tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                            })
                            await sleep(60000)
                            if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete tebakkata[m.sender.split('@')[0]]
                            }
                        } else if (args[0] === 'kalimat') {
                            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            hsin.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                            tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                            })
                            await sleep(60000)
                            if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete tebakkalimat[m.sender.split('@')[0]]
                            }
                        } else if (args[0] === 'lirik') {
                            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            hsin.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                            tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                            })
                            await sleep(60000)
                            if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete tebaklirik[m.sender.split('@')[0]]
                            }
                        } else if (args[0] === 'lontong') {
                            if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                            let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                            let result = anu[Math.floor(Math.random() * anu.length)]
                            hsin.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                            caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
        		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                            })
                            await sleep(60000)
                            if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("Jawaban: " + result.jawaban)
                            hsin.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hsin.user.name, m)
                            delete caklontong[m.sender.split('@')[0]]
        		    delete caklontong_desk[m.sender.split('@')[0]]
                            }
                        }
                    }
        }
    }
}

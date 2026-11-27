module.exports = {
    command: ["alquran"],
    category: "religi",
    async run({ args, command, fetchJson, hsin, m, prefix }) {
        {
        {
        		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
        		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
        		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
        		let txt = `*Arab* : ${res.result.data.text.arab}
        *English* : ${res.result.data.translation.en}
        *Indonesia* : ${res.result.data.translation.id}
        
        ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
        		m.reply(txt)
        		hsin.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
        		}
        }
    }
}

module.exports = {
    command: ["tafsirsurah"],
    category: "religi",
    async run({ args, command, fetchJson, m, prefix }) {
        {
        {
        		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
        		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
        		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
        		let txt = `「 *Tafsir Surah*  」
        
        *Pendek* : ${res.result.data.tafsir.id.short}
        
        *Panjang* : ${res.result.data.tafsir.id.long}
        
        ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
        		m.reply(txt)
        		}
        }
    }
}

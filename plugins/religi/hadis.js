module.exports = {
    command: ["hadis","hadist"],
    category: "religi",
    async run({ args, command, fetchJson, m, prefix }) {
        {
        {
        		if (!args[0]) throw `Contoh:
        ${prefix + command} bukhari 1
        ${prefix + command} abu-daud 1
        
        Pilihan tersedia:
        abu-daud
        1 - 4590
        ahmad
        1 - 26363
        bukhari
        1 - 7008
        darimi
        1 - 3367
        ibnu-majah
        1 - 4331
        nasai
        1 - 5662
        malik
        1 - 1594
        muslim
        1 - 5362`
        		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
        		try {
        		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
        		let { number, arab, id } = res.find(v => v.number == args[1])
        		m.reply(`No. ${number}
        
        ${arab}
        
        ${id}`)
        		} catch (e) {
        		m.reply(`Hadis tidak ditemukan !`)
        		}
        		}
        }
    }
}

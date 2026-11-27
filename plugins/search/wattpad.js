module.exports = {
    command: ["wattpad"],
    category: "search",
    async run({ command, fetchJson, hsin, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} love`
                    let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
                    let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
                    let capt = `Wattpad From ${text}\n\n`
                    capt += `⭔ Judul: ${judul}\n`
                    capt += `⭔ Dibaca: ${dibaca}\n`
                    capt += `⭔ Divote: ${divote}\n`
                    capt += `⭔ Bab: ${bab}\n`
                    capt += `⭔ Waktu: ${waktu}\n`
                    capt += `⭔ Url: ${url}\n`
                    capt += `⭔ Deskripsi: ${description}`
                    hsin.sendImage(m.chat, thumb, capt, m)
                    }
        }
    }
}

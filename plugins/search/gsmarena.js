module.exports = {
    command: ["gsmarena"],
    category: "search",
    async run({ command, fetchJson, hsin, m, prefix, text }) {
        {
        {
                    if (!text) throw `Example : ${prefix + command} samsung`
                    let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
                    let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
        let capt = `⭔ Title: ${judul}
        ⭔ Realease: ${rilis}
        ⭔ Size: ${ukuran}
        ⭔ Type: ${type}
        ⭔ Storage: ${storage}
        ⭔ Display: ${display}
        ⭔ Inchi: ${inchi}
        ⭔ Pixel: ${pixel}
        ⭔ Video Pixel: ${videoPixel}
        ⭔ Ram: ${ram}
        ⭔ Chipset: ${chipset}
        ⭔ Battery: ${batrai}
        ⭔ Battery Brand: ${merek_batre}
        ⭔ Detail: ${detail}`
                    hsin.sendImage(m.chat, thumb, capt, m)
                    }
        }
    }
}

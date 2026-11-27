module.exports = {
    command: ["setexif"],
    category: "owner",
    async run({ command, isCreator, m, prefix, text }) {
        {
        {
                       if (!isCreator) throw mess.owner
                       if (!text) throw `Example : ${prefix + command} packname|author`
                  global.packname = text.split("|")[0]
                  global.author = text.split("|")[1]
                  m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
                    }
        }
    }
}

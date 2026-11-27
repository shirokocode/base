module.exports = {
    command: ["deletevote","delvote","hapusvote"],
    category: "group",
    async run({ m, prefix, vote }) {
        {
        {
                    if (!m.isGroup) throw mess.group
                    if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                    delete vote[m.chat]
                    m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
        	    }
        }
    }
}

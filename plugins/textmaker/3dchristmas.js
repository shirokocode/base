module.exports = {
    command: ["3dchristmas","3ddeepsea","americanflag","3dscifi","3drainbow","3dwaterpipe","halloweenskeleton","sketch","bluecircuit","space","metallic","fiction","greenhorror","transformer","berry","thunder","magma","3dcrackedstone","3dneonlight","impressiveglitch","naturalleaves","fireworksparkle","matrix","dropwater","harrypotter","foggywindow","neondevils","christmasholiday","3dgradient","blackpink","gluetext"],
    category: "textmaker",
    async run({ command, hsin, m, prefix, text }) {
        {
        {
                        if (!text) throw `Example : ${prefix + command} text`
                        m.reply(mess.wait)
                        hsin.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
        	    }
        }
    }
}

module.exports = {
    command: ["bc","broadcast","bcall"],
    category: "owner",
    async run({ command, hsin, isCreator, m, prefix, sleep, store, text }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                        let anu = await store.chats.all().map(v => v.id)
                        m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
        		for (let yoi of anu) {
        		    await sleep(1500)
        		    let btn = [{
                                        urlButton: {
                                            displayText: 'Source Code',
                                            url: 'https://www.npmjs.com/package/@shirokocode/shiroko-baileys'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: 'Number Phone Owner',
                                            phoneNumber: '+62 882-9202-4190'
                                        }
                                    }, {
                                        quickReplyButton: {
                                            displayText: 'Status Bot',
                                            id: 'ping'
                                        }
                                    }, {
                                        quickReplyButton: {
                                            displayText: 'Contact Owner',
                                            id: 'owner'
                                        }  
                                    }, {
                                        quickReplyButton: {
                                            displayText: 'Script',
                                            id: 'sc'
                                        }
                                    }]
                              let txt = `「 Broadcast Bot 」\n\n${text}`
                              hsin.send5ButImg(yoi, txt, hsin.user.name, global.thumb, btn)
        		}
        		m.reply('Sukses Broadcast')
                    }
        }
    }
}

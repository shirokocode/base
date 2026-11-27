module.exports = {
    command: ["bcgc","bcgroup"],
    category: "owner",
    async run({ command, hsin, isCreator, m, prefix, sleep, text }) {
        {
        {
                        if (!isCreator) throw mess.owner
                        if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                        let getGroups = await hsin.groupFetchAllParticipating()
                        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                        let anu = groups.map(v => v.id)
                        m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                        for (let i of anu) {
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
                              hsin.send5ButImg(i, txt, hsin.user.name, global.thumb, btn)
                            }
                        m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
                    }
        }
    }
}

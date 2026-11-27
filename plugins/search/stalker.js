module.exports = {
    command: ["stalker","stalk"],
    category: "search",
    async run({ args, command, fetchJson, hsin, isPremium, m, prefix, tanggal, text }) {
        {
        {
        		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                        if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                        let [type, id, zone] = args
                        if (type.toLowerCase() == 'ff') {
                            if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                            let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'ml') {
                            if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                            if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                            let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'aov') {
                            if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                            let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'cod') {
                            if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                            let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'pb') {
                            if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                            let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'ig') {
                            if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                            let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                            if (anu.status == false) return m.reply(anu.result.message)
                            hsin.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
        		    db.data.users[m.sender].limit -= 1
                        } else if (type.toLowerCase() == 'npm') {
                            if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                            let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                            if (anu.status == false) return m.reply(anu.result.message)
                            m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
        		    db.data.users[m.sender].limit -= 1
                        } else {
                            m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                        }
                    }
        }
    }
}

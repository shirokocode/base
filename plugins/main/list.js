module.exports = {
    command: ["list","menu","help","?"],
    category: "main",
    async run({ botNumber, hsin, m, prefix }) {
        {
        {
                        anu = `┌──⭓ *Group Menu*
        │
        │⭔ ${prefix}linkgroup
        │⭔ ${prefix}ephemeral [option]
        │⭔ ${prefix}setppgc [image]
        │⭔ ${prefix}setname [text]
        │⭔ ${prefix}setdesc [text]
        │⭔ ${prefix}group [option]
        │⭔ ${prefix}editinfo [option]
        │⭔ ${prefix}add @user
        │⭔ ${prefix}kick @user
        │⭔ ${prefix}hidetag [text]
        │⭔ ${prefix}tagall [text]
        │⭔ ${prefix}antilink [on/off]
        │⭔ ${prefix}mute [on/off]
        │⭔ ${prefix}promote @user
        │⭔ ${prefix}demote @user
        │⭔ ${prefix}vote [text]
        │⭔ ${prefix}devote
        │⭔ ${prefix}upvote
        │⭔ ${prefix}cekvote
        │⭔ ${prefix}hapusvote
        │
        └───────⭓
        
        ┌──⭓ *Webzone Menu*
        │
        │⭔ ${prefix}playstore
        │⭔ ${prefix}gsmarena
        │⭔ ${prefix}jadwalbioskop
        │⭔ ${prefix}nowplayingbioskop
        │⭔ ${prefix}aminio
        │⭔ ${prefix}wattpad
        │⭔ ${prefix}webtoons
        │⭔ ${prefix}drakor
        │
        └───────⭓
        
        
        ┌──⭓ *Downloader Menu*
        │
        │⭔ ${prefix}tiktoknowm [url]
        │⭔ ${prefix}tiktokwm [url]
        │⭔ ${prefix}tiktokmp3 [url]
        │⭔ ${prefix}instagram [url]
        │⭔ ${prefix}twitter [url]
        │⭔ ${prefix}twittermp3 [url]
        │⭔ ${prefix}facebook [url]
        │⭔ ${prefix}pinterestdl [url]
        │⭔ ${prefix}ytmp3 [url]
        │⭔ ${prefix}ytmp4 [url]
        │⭔ ${prefix}getmusic [query]
        │⭔ ${prefix}getvideo [query]
        │⭔ ${prefix}umma [url]
        │⭔ ${prefix}joox [query]
        │⭔ ${prefix}soundcloud [url]
        │
        └───────⭓
        
        ┌──⭓ *Search Menu*
        │
        │⭔ ${prefix}play [query]
        │⭔ ${prefix}yts [query]
        │⭔ ${prefix}google [query]
        │⭔ ${prefix}gimage [query]
        │⭔ ${prefix}pinterest [query]
        │⭔ ${prefix}wallpaper [query]
        │⭔ ${prefix}wikimedia [query]
        │⭔ ${prefix}ytsearch [query]
        │⭔ ${prefix}ringtone [query]
        │⭔ ${prefix}stalk [option] [query]
        │
        └───────⭓
        
        ┌──⭓ *Random Menu*
        │
        │⭔ ${prefix}coffe
        │⭔ ${prefix}quotesanime
        │⭔ ${prefix}motivasi
        │⭔ ${prefix}dilanquote
        │⭔ ${prefix}bucinquote
        │⭔ ${prefix}katasenja
        │⭔ ${prefix}puisi
        │⭔ ${prefix}couple
        │⭔ ${prefix}anime
        │⭔ ${prefix}waifu
        │⭔ ${prefix}husbu
        │⭔ ${prefix}neko
        │⭔ ${prefix}shinobu
        │⭔ ${prefix}waifus (nsfw)
        │⭔ ${prefix}nekos (nsfw)
        │⭔ ${prefix}trap (nsfw)
        │⭔ ${prefix}blowjob (nsfw)
        │
        └───────⭓
        
        ┌──⭓ *Text Pro Menu*
        │
        │⭔ ${prefix}3dchristmas
        │⭔ ${prefix}3ddeepsea
        │⭔ ${prefix}americanflag
        │⭔ ${prefix}3dscifi
        │⭔ ${prefix}3drainbow
        │⭔ ${prefix}3dwaterpipe
        │⭔ ${prefix}halloweenskeleton
        │⭔ ${prefix}sketch
        │⭔ ${prefix}bluecircuit
        │⭔ ${prefix}space
        │⭔ ${prefix}metallic
        │⭔ ${prefix}fiction
        │⭔ ${prefix}greenhorror
        │⭔ ${prefix}transformer
        │⭔ ${prefix}berry
        │⭔ ${prefix}thunder
        │⭔ ${prefix}magma
        │⭔ ${prefix}3dcrackedstone
        │⭔ ${prefix}3dneonlight
        │⭔ ${prefix}impressiveglitch
        │⭔ ${prefix}naturalleaves
        │⭔ ${prefix}fireworksparkle
        │⭔ ${prefix}matrix
        │⭔ ${prefix}dropwater
        │⭔ ${prefix}harrypotter
        │⭔ ${prefix}foggywindow
        │⭔ ${prefix}neondevils
        │⭔ ${prefix}christmasholiday
        │⭔ ${prefix}3dgradient
        │⭔ ${prefix}blackpink
        │⭔ ${prefix}gluetext
        │
        └───────⭓
        
        ┌──⭓ *Photo Oxy Menu*
        │
        │⭔ ${prefix}shadow
        │⭔ ${prefix}romantic
        │⭔ ${prefix}smoke
        │⭔ ${prefix}burnpapper
        │⭔ ${prefix}naruto
        │⭔ ${prefix}lovemsg
        │⭔ ${prefix}grassmsg
        │⭔ ${prefix}lovetext
        │⭔ ${prefix}coffecup
        │⭔ ${prefix}butterfly
        │⭔ ${prefix}harrypotter
        │⭔ ${prefix}retrolol
        │
        └───────⭓
        
        ┌──⭓ *Ephoto Menu*
        │
        │⭔ ${prefix}ffcover
        │⭔ ${prefix}crossfire
        │⭔ ${prefix}galaxy
        │⭔ ${prefix}glass
        │⭔ ${prefix}neon
        │⭔ ${prefix}beach
        │⭔ ${prefix}blackpink
        │⭔ ${prefix}igcertificate
        │⭔ ${prefix}ytcertificate
        │
        └───────⭓
        
        ┌──⭓ *Fun Menu*
        │
        │⭔ ${prefix}simih
        │⭔ ${prefix}halah
        │⭔ ${prefix}hilih
        │⭔ ${prefix}huluh
        │⭔ ${prefix}heleh
        │⭔ ${prefix}holoh
        │⭔ ${prefix}jadian
        │⭔ ${prefix}jodohku
        │⭔ ${prefix}delttt
        │⭔ ${prefix}tictactoe
        │⭔ ${prefix}family100
        │⭔ ${prefix}tebak [option]
        │⭔ ${prefix}math [mode]
        │⭔ ${prefix}suitpvp [@tag]
        │
        └───────⭓
        
        ┌──⭓ *Primbon Menu*
        │
        │⭔ ${prefix}nomorhoki
        │⭔ ${prefix}artimimpi
        │⭔ ${prefix}artinama
        │⭔ ${prefix}ramaljodoh
        │⭔ ${prefix}ramaljodohbali
        │⭔ ${prefix}suamiistri
        │⭔ ${prefix}ramalcinta
        │⭔ ${prefix}cocoknama
        │⭔ ${prefix}pasangan
        │⭔ ${prefix}jadiannikah
        │⭔ ${prefix}sifatusaha
        │⭔ ${prefix}rezeki
        │⭔ ${prefix}pekerjaan
        │⭔ ${prefix}nasib
        │⭔ ${prefix}penyakit
        │⭔ ${prefix}tarot
        │⭔ ${prefix}fengshui
        │⭔ ${prefix}haribaik
        │⭔ ${prefix}harisangar
        │⭔ ${prefix}harisial
        │⭔ ${prefix}nagahari
        │⭔ ${prefix}arahrezeki
        │⭔ ${prefix}peruntungan
        │⭔ ${prefix}weton
        │⭔ ${prefix}karakter
        │⭔ ${prefix}keberuntungan
        │⭔ ${prefix}memancing
        │⭔ ${prefix}masasubur
        │⭔ ${prefix}zodiak
        │⭔ ${prefix}shio
        │
        └───────⭓
        
        ┌──⭓ *Convert Menu*
        │
        │⭔ ${prefix}attp
        │⭔ ${prefix}ttp
        │⭔ ${prefix}toimage
        │⭔ ${prefix}removebg
        │⭔ ${prefix}sticker
        │⭔ ${prefix}emojimix
        │⭔ ${prefix}emojimix2
        │⭔ ${prefix}tovideo
        │⭔ ${prefix}togif
        │⭔ ${prefix}tourl
        │⭔ ${prefix}tovn
        │⭔ ${prefix}tomp3
        │⭔ ${prefix}toaudio
        │⭔ ${prefix}ebinary
        │⭔ ${prefix}dbinary
        │⭔ ${prefix}styletext
        │⭔ ${prefix}smeme
        │
        └───────⭓
        
        ┌──⭓ *Main Menu*
        │
        │⭔ ${prefix}ping
        │⭔ ${prefix}owner
        │⭔ ${prefix}menu / ${prefix}help / ${prefix}?
        │⭔ ${prefix}delete
        │⭔ ${prefix}infochat
        │⭔ ${prefix}quoted
        │⭔ ${prefix}listpc
        │⭔ ${prefix}listgc
        │⭔ ${prefix}listonline
        │⭔ ${prefix}speedtest
        │
        └───────⭓
        
        ┌──⭓ *Database Menu*
        │
        │⭔ ${prefix}setcmd
        │⭔ ${prefix}listcmd
        │⭔ ${prefix}delcmd
        │⭔ ${prefix}lockcmd
        │⭔ ${prefix}addmsg
        │⭔ ${prefix}listmsg
        │⭔ ${prefix}getmsg
        │⭔ ${prefix}delmsg
        │
        └───────⭓
        
        ┌──⭓ *Anonymous Menu*
        │
        │⭔ ${prefix}anonymous
        │⭔ ${prefix}start
        │⭔ ${prefix}next
        │⭔ ${prefix}keluar
        │
        └───────⭓
        
        ┌──⭓ *Islamic Menu*
        │
        │⭔ ${prefix}iqra
        │⭔ ${prefix}hadist
        │⭔ ${prefix}alquran
        │⭔ ${prefix}juzamma
        │⭔ ${prefix}tafsirsurah
        │
        └───────⭓
        
        ┌──⭓ *Voice Changer*
        │
        │⭔ ${prefix}bass
        │⭔ ${prefix}blown
        │⭔ ${prefix}deep
        │⭔ ${prefix}earrape
        │⭔ ${prefix}fast
        │⭔ ${prefix}fat
        │⭔ ${prefix}nightcore
        │⭔ ${prefix}reverse
        │⭔ ${prefix}robot
        │⭔ ${prefix}slow
        │⭔ ${prefix}tupai
        │
        └───────⭓
        
        ┌──⭓ *Owner Menu*
        │
        │⭔ ${prefix}react [emoji]
        │⭔ ${prefix}chat [option]
        │⭔ ${prefix}join [link]
        │⭔ ${prefix}leave
        │⭔ ${prefix}block @user
        │⭔ ${prefix}unblock @user
        │⭔ ${prefix}bcgroup [text]
        │⭔ ${prefix}bcall [text]
        │⭔ ${prefix}setppbot [image]
        │⭔ ${prefix}setexif
        │⭔ ${prefix}setmenu [option]
        │
        └───────⭓`
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
                                 let setbot = db.data.settings[botNumber]
                                if (setbot.templateImage) {
                                hsin.send5ButImg(m.chat, anu, hsin.user.name, global.thumb, btn)
                                } else if (setbot.templateGif) {
                                hsin.send5ButGif(m.chat, anu, hsin.user.name, global.promoVideo, btn)
                                } else if (setbot.templateVid) {
                                hsin.send5ButVid(m.chat, anu, hsin.user.name, global.promoVideo, btn)
                                } else if (setbot.templateMsg) {
                                hsin.send5ButMsg(m.chat, anu, hsin.user.name, btn)
                                }
                             }
        }
    }
}

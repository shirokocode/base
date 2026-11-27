# CATATAN ( NOTE )
Mulai saat ini, script ini tidak akan dilanjutkan lagi, beberapa fitur masih tidak bekerja,kamu tinggal fix fitur-fiturnya (plugin).

# UPDATE NEW
Migrasi Bailys original To @shirokocode/shiroko-baileys
Pergantian Type CommonJs (case) To ESM (PLUGINS).

Best Regards. Hsin Asistent

# Hsin Asistent
Script WhatsApp Bot Multi Device

## NOTE
This Script is for everyone, not for Sale. Jika dijual neraka menunggumu brother !

<p align="center">
	<img src="https://cdn.zass.in/PrvrFOe0IZ.jpeg" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Hsin Asistent</h1>

This is Script of WhatsApp multi device, working with [`@shirokocode/shiroko-baileys`](https://www.npmjs.com/package/@shirokocode/shiroko-baileys)

## My Project
* New script to replace this script [`look here`](https://github.com/shirokocode/base) (`Support Legacy or Baileys`)


## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)


```bash
git clone <url-repo-kamu>
cd Hsin-Asistent
npm install
```

## LOGIN (PAIRING CODE / QR)

Default-nya login memakai **kode pairing**, jadi tidak perlu scan QR. Atur di `config.js`:

```js
global.loginMethod = 'pairing'   // 'pairing' atau 'qr'
global.pairingNumber = ''        // contoh '6281234567890' (tanpa + dan 0 di depan); kosong = ditanya di terminal
```

1. Jalankan `node .`, masukkan nomor WhatsApp bot (kalau `pairingNumber` kosong).
2. Terminal menampilkan kode 8 karakter (contoh `ABCD-1234`).
3. Di WhatsApp: **Perangkat Tertaut > Tautkan Perangkat > Tautkan dengan nomor telepon**, lalu masukkan kodenya.

Sesi tersimpan di folder `session/`. Kalau sesi logout atau rusak, folder itu otomatis dihapus dan login diulang.
Kode pairing berlaku sekitar 3 menit; kalau kena `rate-overlimit`, tunggu beberapa menit sebelum mencoba lagi.

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone <url-repo-kamu>
cd Hsin-Asistent
npm install
```

## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## Installing
Butuh **Node.js 20 atau lebih baru** (disarankan 22).
```bash
$ node .
```

## ❗ Warning
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in `config.js`
Get Apikey zenz on [`zenz`](https://zenzapi.xyz/pricing)


## Thanks To
* [`@shirokocode/shiroko-baileys`](https://www.npmjs.com/package/@shirokocode/shiroko-baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`Faiz`](https://github.com/FaizBastomi)
* [`Gimenz`](https://github.com/Gimenz)
* [`rayy`](https://github.com/rayyreall)
* [`Fatih Arridho`](https://github.com/FatihArridho)
* [`zhwzein`](https://github.com/zhwzein)
* [`CAF-ID`](https://github.com/CAF-ID)
* [`bintang`](https://github.com/Bintangp02)
* [`RyuZen`](https://github.com/shirokocode)


```Thanks to all who have participated in the development of this script```


License: [MIT](https://en.wikipedia.org/wiki/MIT_License)



## Sistem Plugin

Semua perintah ada di folder `plugins/<kategori>/<nama>.js` (160 file, 326 perintah). `hsin.js` hanya berisi pipeline pesan dan dispatcher.

```js
// plugins/tools/halo.js
module.exports = {
    command: ['halo', 'hai'],     // nama perintah + alias
    category: 'tools',
    async run({ hsin, m, text, args, isCreator, isAdmins, isBotAdmins, isPremium }) {
        m.reply(`Halo ${m.pushName}!`)
    }
}
```

- Variabel yang tersedia di parameter `run`: `hsin, m, text, args, q, quoted, mime, isMedia, isCreator, isAdmins, isBotAdmins, isPremium, isCmd, prefix, command, body, budy, pushname, botNumber, groupMetadata, groupName, participants, groupAdmins, store, chatUpdate` serta semua helper di `lib/plugin-env.js` (`fetchJson`, `getBuffer`, `axios`, `fs`, `util`, `sleep`, dst).
- Menambah, mengedit, atau menghapus file plugin otomatis dimuat ulang (hot reload), tanpa restart.
- Jika dua plugin memakai nama perintah yang sama, yang pertama (urut path) yang dipakai.
- File berawalan `_` tidak dimuat.

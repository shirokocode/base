/**
 * Bootstrap Hsin Asistent.
 * @shirokocode/shiroko-baileys adalah paket ESM-only, jadi dimuat lewat import()
 * lalu dibagikan lewat global.baileys ke main.js, hsin.js, dan lib/myfunc.js (CommonJS).
 */
require('./config')

;(async () => {
    global.baileys = await import('baileys')
    require('./main')
})().catch((err) => {
    console.error('Gagal memuat library baileys. Pastikan sudah `npm install` dan Node.js >= 20.\n', err)
    process.exit(1)
})

/**
 * Plugin loader Hsin Asistent.
 *
 * Setiap file di folder /plugins/<kategori>/<nama>.js mengekspor:
 *   module.exports = {
 *     command: ['nama', 'alias'],   // wajib, daftar perintah
 *     category: 'group',            // opsional, dipakai untuk pengelompokan
 *     async run(ctx) { ... }        // wajib; ctx = { hsin, m, text, args, isCreator, ... }
 *   }
 *
 * File berawalan underscore (_contoh.js) diabaikan.
 * Plugin baru / perubahan file otomatis dimuat ulang tanpa restart bot.
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const PLUGIN_DIR = path.join(__dirname, '..', 'plugins')
const modules = new Map()   // file -> plugin
const registry = new Map()  // command -> plugin

function walk(dir) {
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
        const p = path.join(dir, e.name)
        if (e.isDirectory()) return walk(p)
        return e.name.endsWith('.js') && !e.name.startsWith('_') ? [p] : []
    }).sort()
}

function validate(plugin, file) {
    if (!plugin || typeof plugin.run !== 'function') throw new Error(`${file}: plugin harus punya fungsi run`)
    if (!Array.isArray(plugin.command) || !plugin.command.length) throw new Error(`${file}: plugin harus punya array command`)
}

function loadFile(file) {
    try {
        delete require.cache[require.resolve(file)]
        const plugin = require(file)
        validate(plugin, file)
        plugin.file = file
        modules.set(file, plugin)
    } catch (e) {
        modules.delete(file)
        console.log(chalk.red(`[PLUGIN] gagal memuat ${path.relative(PLUGIN_DIR, file)}: ${e.message}`))
    }
}

function rebuild() {
    registry.clear()
    for (const file of [...modules.keys()].sort()) {
        for (const cmd of modules.get(file).command) {
            const key = String(cmd).toLowerCase()
            if (!registry.has(key)) registry.set(key, modules.get(file))   // yang pertama menang
        }
    }
}

function loadAll() {
    modules.clear()
    for (const file of walk(PLUGIN_DIR)) loadFile(file)
    rebuild()
}

loadAll()
console.log(chalk.green(`[PLUGIN] ${modules.size} plugin dimuat, ${registry.size} perintah terdaftar`))

// hot reload
let timer = null
try {
    fs.watch(PLUGIN_DIR, { recursive: true }, (_, filename) => {
        if (!filename || !filename.endsWith('.js')) return
        clearTimeout(timer)
        timer = setTimeout(() => {
            loadAll()
            console.log(chalk.yellow(`[PLUGIN] reload (${filename}) -> ${modules.size} plugin, ${registry.size} perintah`))
        }, 300)
    })
} catch (e) {
    console.log('[PLUGIN] hot reload tidak aktif:', e.message)
}

module.exports = {
    get: (command) => registry.get(String(command).toLowerCase()),
    has: (command) => registry.has(String(command).toLowerCase()),
    commands: () => [...registry.keys()],
    all: () => [...modules.values()],
    byCategory: () => {
        const out = {}
        for (const p of modules.values()) (out[p.category || 'other'] = out[p.category || 'other'] || []).push(...p.command)
        return out
    },
    reload: loadAll
}

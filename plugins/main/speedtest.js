module.exports = {
    command: ["speedtest"],
    category: "main",
    async run({ m }) {
        {
        {
                    m.reply('Testing Speed...')
                    let cp = require('child_process')
                    let { promisify } = require('util')
                    let exec = promisify(cp.exec).bind(cp)
                  let o
                  try {
                  o = await exec('python speed.py')
                  } catch (e) {
                  o = e
                 } finally {
                let { stdout, stderr } = o
                if (stdout.trim()) m.reply(stdout)
                if (stderr.trim()) m.reply(stderr)
                    }
                    }
        }
    }
}

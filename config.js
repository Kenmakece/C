const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6287779677862@s.whatsapp.net"]
global.nomerOwner = "6287779677862"
global.nomorOwner = ['6287779677862']
global.nameGEDE = "KIRBOTZ"
global.namaDeveloper = "KirBotz"
global.namaBot = "KirBotz WhatsApp"
global.packname = ""
global.author = "Sticker By KirBotz"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})


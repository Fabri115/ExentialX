let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{3,40})/i
export async function before(m, { isAdmin, groupMetadata, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let war = '3'
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `chat.whatsapp.com`
if (isAdmin && chat.antilinkbase && m.text.includes(grupo)) return
if (chat.antilinkbase && isGroupLink && !isAdmin && isBotAdmin) {
if (isBotAdmin) {
global.db.data.users[m.sender].warn += 1
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        let warn = global.db.data.users[m.sender].warn
let user = global.db.data.users[m.sender]
        if (warn < war) {
m.reply(`⚠️ 𝐍𝐎𝐍 𝐄̀ 𝐂𝐎𝐍𝐒𝐄𝐍𝐓𝐈𝐓𝐎 𝐈𝐍𝐕𝐈𝐀𝐑𝐄 𝐋𝐈𝐍𝐊 𝐃𝐈 𝐆𝐑𝐔𝐏𝐏𝐈.`)
        } else if (warn => war) {
            global.db.data.users[m.sender].warn = 0
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
}}
return !0
}

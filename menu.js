const { subBots } = require('./qr');

module.exports = {
  nombre: 'menu',
  descripcion: 'Mostrar el menú principal',
  ejecutar: async (m, sock) => {
    let tipoBot = 'Main';
    if (Object.values(subBots).some(bot => bot.userId === m.key.remoteJid)) {
      tipoBot = 'Sub';
    }

    const mensaje = `¡нσℓα! ѕσу 𝐇𝐚𝐫𝐮𝐤𝐚 𝐒𝐚𝐤𝐮𝐫𝐚 🌸 αqυί тιєηєѕ мι мєηύ ¢σмρℓєтσ
╔═════════════════╗
║✰ɴᴏᴍʙʀᴇ: 𝐇𝐚𝐫𝐮𝐤𝐚 𝐒𝐚𝐤𝐮𝐫𝐚
║✰ᴛɪᴘᴏ: ${tipoBot}
║✰ᴅᴜᴇɴ̃ᴏ: ᴀʟᴇxᴀ.xʏᴢ
║✰ɪɴғᴏ: ᴍᴇɴᴜ́ ᴇɴ ᴘʀᴜᴇʙᴀ
╚═════════════════╝

> υׁׅׅ𝐬ɑׁׅ #qr 𝐩ɑׁׅꭈׁׅɑׁׅ 𝐜ꭈׁׅꫀׁׅܻ݊ɑׁׅꭈׁׅ υׁׅ݊ꪀ 𝐒υׁׅ֮ϐׁ-֮ϐׁᨵׁׅׅtׁׁׅׅ.

𖤐꙰❖/꙰⁑⟬𝐈𝐧𝐟𝐨 𝐁𝐎𝐓⟭⁑/꙰❖𖤐꙰
♡ #botinfo 
> ✧ 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧 𝐝𝐞𝐥 𝐛𝐨𝐭
♡ #ping 
> ✧ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 𝐝𝐞 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚

𖤐꙰❖/꙰⁑⟬𝐒𝐔𝐁-𝐁𝐎𝐓𝐒⟭⁑/꙰❖𖤐꙰

♡ #sockets 
> ✧ 𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐭𝐢𝐯𝐨𝐬
♡ #qr 
> ✧ 𝐂𝐫𝐞𝐚 𝐮𝐧 𝐒𝐮𝐛-𝐁𝐨𝐭`

𖤐꙰❖/꙰⁑⟬𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬⟭⁑/꙰❖𖤐꙰

♡ #play
> ✧ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐮𝐧 𝐚𝐮𝐝𝐢𝐨;
    await sock.sendMessage(m.key.remoteJid, { text: mensaje });
  },
};
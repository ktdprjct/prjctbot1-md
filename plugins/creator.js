function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;ktdprjct;;;FN:ktdprjct\nORG:ktdprjct;\nTEL;type=CELL;type=VOICE;waid=62895342581896:+62 895-3425-81896\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '62895342581896', 'ktdprjct', m)
m.reply(m.chat,'*Tuh nomor owner ku tersayang*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

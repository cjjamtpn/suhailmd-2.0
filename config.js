const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_07_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5RLzNYQlEwQ1VSa1h2K1hHckdqZFo5dDAwbHBhanB6RFFSdzZHQjdZRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImF1dW5tdW82UU51VURzZ2dTMWpIREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTdlMDYzNWYtNjNiYi00Mjg4LTgwZTUtOTZmZDU0NmUzZjExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgOTYsXG4gICAgICAxMTIsXG4gICAgICAxOTQsXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICA4NSxcbiAgICAgIDI1MSxcbiAgICAgIDcsXG4gICAgICAxMTcsXG4gICAgICAxNzIsXG4gICAgICAyMjUsXG4gICAgICA4OCxcbiAgICAgIDEwNCxcbiAgICAgIDEzMyxcbiAgICAgIDEwLFxuICAgICAgODUsXG4gICAgICAyNTIsXG4gICAgICAyMTUsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDE4OCxcbiAgICAgIDg0LFxuICAgICAgNSxcbiAgICAgIDcxLFxuICAgICAgMTc1LFxuICAgICAgOTAsXG4gICAgICAxNDYsXG4gICAgICAxODcsXG4gICAgICAxNDEsXG4gICAgICAxNixcbiAgICAgIDE5NSxcbiAgICAgIDIwLFxuICAgICAgMjUsXG4gICAgICAyMjgsXG4gICAgICAxNDksXG4gICAgICA0MyxcbiAgICAgIDE1MCxcbiAgICAgIDMzLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk41TjlXS1RLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc4MDY1NzI6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY0Njk5Mjc2NTA4MzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLN1grb2tHRUtlYWhyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU5Yk5YUWMraDJIVGFmY2duRTMwZWpqNjc5WFIvc3BFOXBoakVBd1owbUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWwrTUFwWGlHZG9tYjY2YUhuNzFUZnMvQlRZdk4rNXpTNE5vTjVGbzArV3JKbTRaRHIzU3BPdmhSQkFMVmxXREVRYjk1Y1A5VjdWaDVGSFp6aFBzRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ1J0WUxJQXV5M3RkTTEyRW5PYjBMcGJwV2wzUFZxRlZMN1V1dnFuTFg1NCtUajNOUFQrQjJoTld0aUFIakhnLzU4bHdoaHZVQXVPeDBaeHFHZGN1anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3ODA2NTcyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM0OTIyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "COLLEGUR-JAM",
  ownername:process.env.OWNER_NAME|| "COLLEGUE-JAM",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

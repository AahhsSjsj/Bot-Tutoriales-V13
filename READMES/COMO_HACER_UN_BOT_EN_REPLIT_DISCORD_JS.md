# **👀 Como Hacer Un Bot En Replit**
**Esta Pequeña Guia Es Para Las Person@s Que No Saben Hacer Un Bot De Discord.js (v13) LA Nueva Version De discord.js y eso Se Necesita la v16 de Node.js Abajo Veras los pasos o guia bye.**

## **Crear Un Proyecto**
**Dale Al Boton "+" y te va A Salir Opciones Para Crear tu Eliges Node.JS para nuestro Bot De Discord**
**EJEMPLO:**
<div aling="center"><img src="https://i.imgur.com/2F7TyTs.gif">

## **Node.js 16 en replit**

#### **Para Esto Debes Instalar Un Package Para Usar Node.js v16 Pasos:**

##### **Primer Paso:**
* **Ejecutar En La Shell el npm Haciendo:**
```powershell
npm init -y && npm i --save-dev node@16.6.1
```
##### **Segundo Paso:**
* **Crear Un Archivo <code>.replit</code> Para Ejecturar Desde La Shell Y No lo otro y poner andetro <code>run="npm start"</code>**

##### **Trecer Paso y Ultimo:**
* **Poner En El Package.json y poner en la Parte De scripts y Poner Esto:**
```json
"scripts": {
    "start": "node ."
}
```
# **Source: [Click Aqui](https://replit.com/talk/learn/Nodejs-14-on-replit/85501 )**
### **Creador: Leoua REDES SOCIALES: [GITHUB](https://github.com/Leoxyzua)**

# **EJEMPLOS DE LOS TRES PASOS:**

## **PRIMER PASO EJEMPLO:**
<div aling="center"><img src="https://i.imgur.com/OqEPDRd.gif">

# **SEGUNDO PASO EJEMPLO**:
<div aling="center"><img src="https://i.imgur.com/ttTcF7G.gif">

# **TRECER Y ULTIMO PASO EJEMPLO:**
<div aling="center"><img src="https://i.imgur.com/yUhevJj.gif">

# **Esto Es Todo Aqui Os  Dejo Un Ejemplo De Basico De DISCORD.JS <3**

```javascript
const Discord = require('discord.js')
const client = new Client({intents: 1}) //Si quieres poner otros intents es aqui: https://ziad87.net/intents/
const { token, prefix } = require('./config.json') // Definimos Token, Prefix PD: tener en el config.json ESTO:
//{
//  "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
//  "prefix": "Tu Prefix"
//} PD: Quitar los // y dejos los otros y este texto ☢

    client.user.setPrensece("TEXTO Mensaje Para EL Estado", {type: "PLAYING", url: null })// PLAYING, WATCHING, LISTENING, STREAMING Nota: Para El STREAMING Debes Poner Asi:
         //type: "STREAMING", url: "twitch canal"


client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !==0) return;

    const agrs = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = agrs.shift().toLowerCase();

    if(command === 'ping') {

        message.reply("Pong")

    }
   });
 

 
 client.login(token); //No Hacer C&P(Copy and Paste) por que esto puede tener errores ❌

```

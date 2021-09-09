<p align="center">Bot Tutoriales :heart: </p>

# 🌐 Descargar Las Cosas Necesarias

#### **Node v16.8.0**

* **[Click Aqui Para Descargar](https://nodejs.org/dist/v16.8.0/node-v16.8.0-x64.msi)**

#### **Visual Studio Code**

* **[Click Aqui Para Descargar](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)**

#### **💘 Descarga Las Tres Cosas Para Usar El Host De Heroku**

#### **Heroku App**

* **[Click Aqui Para Descargar](https://cli-assets.heroku.com/heroku-x64.exe)**

#### **Visual Studio Code App**

* **[Click Aqui Para Descargar](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)** **| O Solo Darle Click Aqui [Here](https://github.com/AahhsSjsj/Bot-Tutoriales-V13#visual-studio-code)**

#### **Git App**

* **[Click Aqui Para Descargar](https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe)**

```markdown
Esto Es Todo Para El Host De Heroku Para tu Bot | No Sabes Como Hostearlo? Solo Anda A Las Docs De Heroku Darle Click Aqui:
``` 
**[Click Aqui Para Ver Las Docs De Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)** 
```markdown
PD: Muy Pronto Video De Esto OwO
```


# ❗ Requisitos ❗

* [Node.js 16.8.0](https://nodejs.org/en/download/current/)
* [discord.js@13.1.0](https://www.npmjs.com/package/discord.js/v/13.1.0)

**O Darle Click Aqui [Here](https://github.com/AahhsSjsj/Bot-Tutoriales-V13#-descargar-las-cosas-necesarias) Para llevarte A Descargar Mas Rapido Node.Js o tambien visual studio code o si no puedes editar en Replit - Glitch - Heroku PD: Heroku es un host lo puedes editar tu proyecto con Visual Studio Code para eso necesita Git - Heroku App - Node.JS Y Para Descargar Esto Tres Dale Click Aqui [Here](https://github.com/AahhsSjsj/Bot-Tutoriales-V13#-descargar-las-cosas-necesarias)**
# Instalación

**Se requiere Node.JS v16.8.0 o más reciente**

**Primero Es El Package que es este uwu:**

# PACKAGE

```json
{
  "name": "Bot-Tutoriales-V13",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "asynckit": "^0.4.0",
    "callsites": "^3.1.0",
    "combined-stream": "^1.0.8",
    "delayed-stream": "^1.0.0",
    "discord-api-types": "^0.22.0",
    "discord.js": "^13.1.0",
    "dot-prop": "^6.0.1",
    "fs": "^0.0.1-security",
    "is-obj": "^2.0.0",
    "lodash.isequal": "^4.5.0",
    "mime-db": "^1.49.0",
    "mime-types": "^2.1.32",
    "node-fetch": "^2.6.1",
    "ow": "^0.27.0",
    "ts-mixer": "^6.0.0",
    "tslib": "^2.3.1",
    "type-fest": "^1.4.0",
    "vali-date": "^1.0.0",
    "ws": "^7.5.3"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



```

```javascript
Despues de Esto Pones "npm init -y"
y lo ultimo:
```
```javascript
npm install o Dandole Click a "install-packages.bat"
```
**Para Instalar Los Npms!**
# Despues Debes Irte Donde el archivo config.json y Pones esto!

  ```json
  {
    "token": "Tu Token - Aqui Lo Podes Copiar Tu Token: https://discord.com/developers/applications/clientid/bot",
    "prefix": "Tu Prefix"
  }
  ```

# Ejemplos

**npm install discord.js Package Aqui: [**Click Aqui**](https://github.com/AahhsSjsj/Bot-Tutoriales-V13#package)- lo definimos abajo esta para hacer el bot 😅**

# DISCORD.JS

```javascript
const Discord = require('discord.js')
const client = new Client({intents: 1}) //Si quieres poner otros intents es aqui: https://ziad87.net/intents/
const { token, prefix } = require('./config.json')

function presence(){
   client.user.setPresence({
      status: "online",
      game: {
         name: "TEXTO", // Mensaje Para Poner en el Estado!
         type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING Nota: Para El STREAMING Debes Poner Asi:
         //type: "STREAMING",
         //url: "twitch canal!" uwu!
      }
   });
}


client.on("ready", () => {
    console.log("Estoy listo!");
    prensece();
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

# ⁉ No Sabes Como Copiar Tu Token? Sencillo Aqui Lo Podes Ver uwu:

<div align="left"><img src="/assets/token-bot-tutoriales.gif">

# 👀 Iniciar Proyecto
```javascript
node . o dale click en "start.bat"
```
# 😀 Guia De Como Hostear Tu Bot En Heroku

# 🧪 The Heroku CLI

### 😎 Tabla de contenido

* **[Descargar e instalar]()**
* **[Otros métodos de instalación]()**
* **[Verificando su instalación]()**
* **[Empezando]()**
* **[Mantenerse al día]()**
* **[Complementos útiles de CLI]()**
* **[Arquitectura CLI]()**
* **[Solución de problemas]()**
* **[Desinstalación de la CLI de Heroku]()**

### **La interfaz de línea de comandos de Heroku (CLI) facilita la creación y administración de sus aplicaciones de Heroku directamente desde el terminal. Es una parte esencial del uso de Heroku.**

# **Descargar e instalar**
**⚠ La CLI de Heroku requiere Git, el popular sistema de control de versiones. Si aún no tiene Git instalado, complete lo siguiente antes de instalar la CLI:**
* **[Git installation]()**
* **[First-time Git setup]()**

☢ **Actualmente, los instaladores de Windows pueden mostrar una advertencia titulada "Windows protegió su PC". Para ejecutar la instalación cuando se muestra esta advertencia, haga clic en "Más información", verifique el editor como "salesforce.com, inc", luego haga clic en el botón "Ejecutar de todos modos".**

# **🍎 macOS**

```powershell
$ brew tap heroku/brew && brew install heroku
```

# **💣 Windows**

**Descargue el instalador apropiado para su instalación de Windows:**

## **<a href="https://cli-assets.heroku.com/heroku-x64.exe" class="btn btn-primary">64-bit installer</a>**

## **<a href="https://cli-assets.heroku.com/heroku-x86.exe" class="btn btn-primary">32-bit installer</a>**


# **⚔ Ubuntu 16+**

**Ejecute lo siguiente desde su terminal:**

```powershell
$ sudo snap install --classic heroku
```

<a href="https://snapcraft.io/">Snap también está disponible en otros sistemas operativos Linux.</a>

# **Otros métodos de instalación**

## **Instalación autónoma**
**La instalación independiente es un simple tarball con un binario. Contiene su propio binario node.js y se actualizará automáticamente como los métodos de instalación anteriores.**

**Para configurar rápidamente en <code>/usr/local/lib/heroku</code> y <code>/usr/local/bin/heroku</code>, ejecute este script (el script requiere sudo y no es compatible con Windows):**

<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> curl https://cli-assets.heroku.com/install.sh | sh  
    </span>
  </code>
</pre>

**De lo contrario, descargue uno de los archivos comprimidos a continuación y extráigalo usted mismo.**

## **Tarballs**
**Están disponibles en compresión <code>gz</code> o <code>xz</code>. <code>xz</code> es mucho más pequeño pero <code>gz</code> es más compatible.**

* **[macOS](https://cli-assets.heroku.com/heroku-darwin-x64.tar.gz)**
* **[Linux (x64)](https://cli-assets.heroku.com/heroku-linux-x64.tar.gz)**
* **[Linux (arm)](https://cli-assets.heroku.com/heroku-linux-arm.tar.gz)**
* **[Windows (x64)](https://cli-assets.heroku.com/heroku-win32-x64.tar.gz)**
* **[Windows (x86)](https://cli-assets.heroku.com/heroku-win32-x86.tar.gz)**

## **Ubuntu / Debian apt-get**
<pre class=" language-term">
<code class=" language-term">
<span class='token input'> <span class='token prompt'>$ </span> curl https://cli-assets.heroku.com/install-ubuntu.sh | sh </span>
  </code>
</pre>

## **MAÑANA YA MISMO TERMINADO!**
# **💨 Ejecuta El Proyecto En**

### **Glitch:** 
[![Remix en Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/AahhsSjsj/Bot-Tutoriales-V13)
### **Repl:** 
[![Ejecutarse en Repl.it](/assets/GitHub.PNG)](https://repl.it/github/AahhsSjsj/Bot-Tutoriales-V13)
### **Heroku:** 
[![Desplegar](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/AahhsSjsj/Bot-Tutoriales-V13)

# **🔗Links**

* [Web De Discord.js](https://discord.js.org/#/)
* [Documentation Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
* [Discord.js Server](https://discord.com/invite/bRCvFy9)
* [Github](https://github.com/AahhsSjsj)
* [Discord Server](https://discord.gg/TvBXwYbW4y)
* [Node.js v16](https://nodejs.org/es/download/current/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [Repositorio Bot-Tutoriales-V13 V12](https://github.con/AahhsSjsj/Bot-Tutoriales-V13)
* [Mi Server De Discord](https://dsc.gg/ts-community)

### **🔗 Links De La Paginas Para Ejecutar El Proyecto**

* [Heroku](https://heroku.com)
* [Replit](https://replit.com)
* [Glitch](https://glitch.com)
* [Logearte En Glitch](https://glitch.com/signup)
* [Logearte En Replit](https://replit.com/login)
* [Logearte En Heroku](https://id.heroku.com/login)
* [Registrate En Glitch](https://glitch.com/signin)
* [Registrate En Replit](https://replit.com/signup)
* [Registrate En Heroku](https://signup.heroku.com)


### **🔗 Links Discord.js:**

* [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Documentation](https://discord.js.org/#/docs/main/master/general/welcome)
* [Guia](https://discordjs.guide/) ([source](https://github.com/discordjs/guide))
* Ver también el [Guía de actualización](https://discordjs.guide/additional-info/changes-in-v13.html), incluidos los elementos Ya  actualizados y eliminados de la biblioteca.
* [Discord.js Discord server](https://discord.gg/djs)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/discordjs/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Bibliotecas relacionadas](https://discord.com/developers/docs/topics/community-resources#libraries)

 ### **Extensions**

* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/discordjs/RPC))



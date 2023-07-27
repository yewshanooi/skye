<p align="center">
    <img src=".github/readme_icon.png" width="161" height="161"/>
    <h1 align="center">Ava</h1>
    <h4 align="center">Open source discord bot with application commands and a user-friendly interface</h4>
</p>

<p align="center">
    <a href="https://github.com/yewshanooi/ava/releases/">
        <img alt="Latest Version" src="https://img.shields.io/github/v/release/yewshanooi/ava?include_prereleases&style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/">
        <img alt="Repository Size" src="https://img.shields.io/github/repo-size/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://www.codefactor.io/repository/github/yewshanooi/ava/">
        <img alt="Code Quality" src="https://img.shields.io/codefactor/grade/github/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/commits/">
        <img alt="Last Commit" src="https://img.shields.io/github/last-commit/yewshanooi/ava?style=flat-square">
    </a>
</p>
<br/>

## Features
- **Application Commands**, **Buttons**, and **Message Embed**
- **Watch Together** *(with YouTube Activity)*
- **AI Chatbot** *(powered by OpenAI GPT-3.5 model)*
- **Third Party API** commands *(such as Giphy, Nasa, Wikipedia and more!)*
<br/>

## Commands
<table>
  <tr>
    <td><b>Fun</b></td>
    <td><b>Moderation</b></td>
    <td><b>Utility</b></td>
  </tr>
  <tr>
    <td>8ball, achievement, animequote, beep, catfact, coinflip, color, compliment, crypto, diceroll, dogfact, fact, fortnite, giphy, github, lyrics, meme, minecraft, nasa, npm, pokemon, roast, rps, say, spotify, urban, uselessfact, waifu, word, youtube</td>
    <td>ban, channellock, channelunlock, deafen, kick, purge, slowmode, timeout, unban, undeafen, untimeout, warn</td>
    <td>afk, announce, botpresence, botsetnick, calculator, channeldelete, channelinfo, channelrename, chatbot, clientinfo, dictionary, guildinfo, guildrename, help, invite, leave, message, news, ping, qrcode, roleadd, roleinfo, roleremove, setnick, thread, userinfo, weather, wikipedia</td>
  </tr>
</table>
<br/>

## Dependencies
###### Node.js
Node.js version **≥16.9.0** is required

###### Packages
<table>
  <tr>
    <td><a href="https://www.npmjs.com/package/chalk">chalk@4.1.2</a></td>
    <td><a href="https://www.npmjs.com/package/mathjs">mathjs@11.9.0</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/discord.js">discord.js@14.11.0</a></td>
    <td><a href="https://www.npmjs.com/package/node-fetch">node-fetch@2.6.12</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/dotenv">dotenv@16.3.1</a></td>
    <td><a href="https://www.npmjs.com/package/nodemon">nodemon@3.0.1</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/eslint">eslint@8.45.0</a></td>
    <td><a href="https://www.npmjs.com/package/openai">openai@3.3.0</a></td>
  </tr>
</table>
<br/>

## Guide
###### Configuration Files
1. **Clone** this repository to your local drive
```sh
git clone https://github.com/yewshanooi/ava.git
cd ava
```
2. Install the required **npm packages**
```
npm install
```
3. Create a new **config.json** file and fill it with your preferred information<br/>
⚠️ ***embedColor** field is required while the rest is optional*
```json
{
  "embedColor": "",
  "debugChannelId": "",
  "errorChannelId": "",
  "warningChannelId": ""
}
```
4. Create a new **.env** file and fill it with your own secret keys
```
TOKEN=
CLIENT_ID=
GUILD_ID=
FORTNITE_API_KEY=
GIPHY_API_KEY=
GENIUS_API_KEY=
NASA_API_KEY=
NEWS_API_KEY=
OPENAI_API_KEY=
OPENWEATHERMAP_API_KEY=
```
5. Run the **commands.js** file to deploy or delete application commands<br/>
💡 *Commands are only deployed or deleted for a single guild by default. Check out the comment in **commands.js** file to do it globally*
```
node commands.js deploy    |    node commands.js delete
```
6. Run the **index.js** file to start the bot<br/>
⚠️ *Don't forget to deploy commands before starting the bot, otherwise commands won't appear as they are not updated*
```
node index.js    -or-    npm start    -or-    nodemon
```

###### Bot & Application
1. Visit [Discord Developer Portal](https://discord.com/developers/applications) to create a new application

2. Enable `PUBLIC BOT` authorization flow option for the bot **(OPTIONAL)**

3. Enable `PRESENCE INTENT` and `SERVER MEMBERS INTENT` privileged gateway intent option for the bot **(REQUIRED)**

4. Paste this OAuth2 URL template in your browser's address bar and replace `{CLIENT_ID}` with your **Client ID** to invite the bot to your guild
```url
https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions=1497295481975&scope=bot%20applications.commands
```

###### OAuth2 URL Scopes & Bot Permissions
<p align="left">
    <img src=".github/oauth2_url_generator.png"/>
</p>
<br/>

## License
This application is licensed under the **MIT License**
```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
<br/>

## Contributors
- [yewshanooi](https://github.com/yewshanooi)
- [Manzanitabot123](https://github.com/Manzanitabot123)

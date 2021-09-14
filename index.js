"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importStar(require("discord.js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var client = new discord_js_1.default.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES]
});
client.on('ready', function () {
    var _a;
    console.log('Balanced bot is online');
    var guildId = '884268145660026900';
    var guild = client.guilds.cache.get(guildId);
    var commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'help',
        description: 'Display, commands as well as guild pointers',
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'raid-info',
        description: 'Display raid infomation such as time and requirments',
    });
});
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var commandName, options;
    return __generator(this, function (_a) {
        if (!interaction.isCommand()) {
            return [2 /*return*/];
        }
        commandName = interaction.commandName, options = interaction.options;
        if (commandName === 'help') {
            interaction.reply({
                content: 'Commands: \n \n/role - To get the Members role. You must follow name convention. "Discord Name (WoW in-game Name)" If Discord & WoW is the same, still follow this rule "WoW in-game Name (WoW in-game Name)" Check Officers for an example',
                ephemeral: false, //Makes it so only client can see it if true
            });
        }
        if (commandName === 'raid') {
            interaction.reply({
                content: 'We raid on Mondays and Thursdays at 18:00 Server Time.',
                ephemeral: false, //Makes it so only client can see it if true
            });
        }
        return [2 /*return*/];
    });
}); });
var prefix = '-';
client.on('message', function (message) {
    var _a;
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (command === 'guild-info') {
        message.channel.send('┌─────────── •✧✧• ──────────┐\n   -Welcome to Balanced - Twisting Nether!-\n└─────────── •✧✧• ──────────┘\n\nWe are a new, socially-focused guild aiming to facilitate both casual and competitive content and establish an enjoyable community.\n\n**Roles**\nTo receive the **member role**, please be a member of the guild and ensure you have your **in-game** WoW name in Discord. For example - **"Discord Name (WoW in-game Name)"** or **"Wow in-game Name"** For example - **Lily ^.^ (Mirilia)** or **RabuRaru (Sabotage)** or just the WoW name **Sabotage**.\n\nTo rename yourself in the discord, just right-click yourself on the right handside and select **"Change Nickname"**\n\n**Discord Link**\nThe main Discord link can be found in-game. If you need a different one please ask an **@Officer** or **@Guild Master**\n\n**Rules**\nThe **primary rule** is to treat everybody with respect. Any unacceptable behaviour will be investigated by an officer. **All management decisions are final**.\n\n**Events**\nCasual Raiding - Monday & Thursday 20:00 ST (Normal)\n\n**Useful Guild Links**\nWow Armory - <https://worldofwarcraft.com/en-gb/guild/eu/twisting-nether/balanced>\nWowprogress - <https://www.wowprogress.com/guild/eu/twisting-nether/Balanced>\nRaiderIO - <https://raider.io/guilds/eu/twisting-nether/Balanced>\nWarcraft Logs - <https://www.warcraftlogs.com/guild/id/619635>');
    }
    if (command === 'name') {
        message.channel.send('┌───────────── •✧✧•─ ───────────┐\n   -Balanced Announcement - Naming Convention -\n└───────────── •✧✧• ────────────┘\n\nWelcome all the new members to **Balanced**. Just a small announcement about our **naming convention**.\n\nPlease ensure you have your **in-game** WoW name in Discord. **"Discord Name (WoW in-game Name)"** or **"Wow in-game Name"**\nFor example **Lily ^.^ (Mirilia)** or **RabuRaru (Sabotage)** or just the WoW name **Sabotage**\n\nTo **rename** yourself in the discord, just right-click yourself on the right handside and select **"Change Nickname"**\n\nThank you!');
    }
    if (command === 'roles') {
        message.channel.send('**Role Selection**\nPlease select any of the reactions to be given it\'s corresponding role.\n\n**Content**\n<:BalancedCircle:887416084163096667> - Social\n<:RaiderIO:834195704464539665> - Mythic+\n<:Warrior:834196758174760960> - PVP\n\n**Classes**\n<:Guardian:834196791129931806> - Tank\n<:Paladin:834197477627265055> - Heal\n<:Mage:834197759786614835> - DPS\n\n**Note** - Any other roles will be assigned to you manually.');
    }
    if (command === 'role-select') {
        message.channel.send('@everyone We have now setup a channel which will allow you to obtain a taggable role for the content or class you are. Please head to the <#887389092688572417> channel if you\'d like to select your roles.');
    }
});
client.login(process.env.TOKEN);

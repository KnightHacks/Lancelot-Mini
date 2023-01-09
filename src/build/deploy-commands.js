"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployCommands = void 0;
const fs_1 = __importDefault(require("fs"));
const discord_js_1 = require("discord.js");
async function deployCommands() {
    const commands = getCommands();
    const rest = new discord_js_1.REST().setToken(process.env.TOKEN);
    try {
        await rest.put(discord_js_1.Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
            body: commands,
        });
        console.log("Successfully registered application commands.");
    }
    catch (error) {
        console.error(error);
    }
}
exports.deployCommands = deployCommands;
function getCommands() {
    const commands = [];
    const commandFiles = fs_1.default
        .readdirSync("./commands")
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    return commands;
}

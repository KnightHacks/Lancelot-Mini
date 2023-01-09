import { Collection, Events, GatewayIntentBits, Client } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import dotenv from "dotenv";

import { deployCommands } from "./deploy-commands";
import Command from "./util/command";

dotenv.config();
const commands = new Collection<string, Command>();

const commandsPath = join(__dirname, "commands");
readdirSync(commandsPath).forEach((file) => {
	const filePath = join(commandsPath, file);
	const command = require(filePath);

	if ("data" in command && "execute" in command) {
		commands.set(command.data.name, command as Command);
	} else {
		console.log(
			`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
		);
	}
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async (c) => {
	await deployCommands();
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = commands.get(interaction.commandName);

	if (!command) {
		console.error(
			`No command matching ${interaction.commandName} was found.`
		);
		return;
	}

	try {
		command.execute(interaction);
	} catch (error) {
		console.error(error);
		interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});

client.login(process.env.TOKEN);

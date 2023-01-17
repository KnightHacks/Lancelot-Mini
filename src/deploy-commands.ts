import fs from "fs";
import { Routes, REST } from "discord.js";
import path from "path";
import Command from "./util/command";

export async function deployCommands(): Promise<Command[]> {
	const commands = getCommands();
	const rest = new REST().setToken(process.env.TOKEN!);

	try {
		await rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT_ID!,
				process.env.GUILD_ID!
			),
			{
				body: commands.map((command) => command.data.toJSON()),
			}
		);

		console.log("Successfully registered application commands.");
	} catch (error) {
		console.error(error);
	}

	return commands;
}

function getCommands(): Command[] {
	return fs
		.readdirSync(path.join(__dirname, "commands"))
		.map((file) => <Command>require(`./commands/${file}`));
}

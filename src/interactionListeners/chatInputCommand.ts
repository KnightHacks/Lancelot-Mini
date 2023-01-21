import { ChatInputCommandInteraction, Collection } from "discord.js";
import Command from "../util/command";

export function handleChatInputCommandInteraction(
	interaction: ChatInputCommandInteraction,
	commands: Collection<string, Command>
) {
	const command = commands.get(interaction.commandName);

	if (!command) {
		console.error(
			`No command matching ${interaction.commandName} was found.`
		);
		return;
	}

	if (interaction.channelId !== "623210523965652993") {
		interaction.reply({
			content: "Please use all bot commands in the bot-spam channel.",
			ephemeral: true,
		});
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
}

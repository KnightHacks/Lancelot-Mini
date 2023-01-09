import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
	.setName("testing")
	.setDescription("Provides information about the user.");

async function execute(interaction: CommandInteraction) {
	await interaction.reply(
		`This command was run by ${interaction.user.username}, who joined on ${interaction.user.createdAt}.`
	);
}

export { data, execute };

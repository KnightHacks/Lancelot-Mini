import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const URL = "https://github.com/KnightHacks/Lancelot-Mini";

const data = new SlashCommandBuilder()
	.setName("source")
	.setDescription("Links the source code for this bot.");

async function execute(interaction: ChatInputCommandInteraction) {
	await interaction.reply(`Source: ${URL}`);
}

export { data, execute };

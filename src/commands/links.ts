import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { KnightHacksLinkButtons } from "../components/knightHacksLinkButtons";

const data = new SlashCommandBuilder()
	.setName("links")
	.setDescription("Gets helpful links for Knight Hacks");

async function execute(interaction: ChatInputCommandInteraction) {
	await interaction.reply({
		content: "**Here's some helpful Knight Hacks links!**",
		components: [KnightHacksLinkButtons],
	});
}

export { data, execute };

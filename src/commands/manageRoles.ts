import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { createRolesMenu } from "../components/rolesAndMajorsMenu";

const data = new SlashCommandBuilder()
	.setName("roles")
	.setDescription("Add or remove roles from your account.")
	.addStringOption((option) =>
		option
			.setName("action")
			.setDescription("Whether to add or remove roles.")
			.setRequired(true)
			.addChoices(
				{ name: "add", value: "add" },
				{ name: "remove", value: "remove" }
			)
	);

async function execute(interaction: ChatInputCommandInteraction) {
	const type = interaction.options.getString("action") ?? "add";
	await interaction.reply({
		content: `Select roles to ${type}!`,
		components: [createRolesMenu(type)],
	});
}

export { data, execute };

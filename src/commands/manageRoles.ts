import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { createRolesMenu } from "../util/rolesAndMajorsMenu";

const data = new SlashCommandBuilder()
	.setName("roles")
	.setDescription("Add or remove roles from your account.")
	.addStringOption((option) =>
		option
			.setName("action")
			.setDescription("Whether to add or remove roles.")
			.setRequired(true)
			.addChoices(
				{ name: "Add", value: "Add" },
				{ name: "Remove", value: "Remove" }
			)
	);

async function execute(interaction: ChatInputCommandInteraction) {
	const type = interaction.options.getString("action") ?? "add";
	await interaction.reply({
		content: `Select Roles to ${type}!`,
		components: [createRolesMenu(type)],
	});
}

export { data, execute };

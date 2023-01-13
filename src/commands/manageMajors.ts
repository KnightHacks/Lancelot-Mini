import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import {
	createMajorsMenu,
	createRolesMenu,
} from "../components/rolesAndMajorsMenu";

const data = new SlashCommandBuilder()
	.setName("majors")
	.setDescription("Add or remove majors from your account.")
	.addStringOption((option) =>
		option
			.setName("action")
			.setDescription("Whether to add or remove majors.")
			.setRequired(true)
			.addChoices(
				{ name: "add", value: "add" },
				{ name: "remove", value: "remove" }
			)
	);

async function execute(interaction: ChatInputCommandInteraction) {
	const type = interaction.options.getString("action") ?? "add";
	await interaction.reply({
		content: `Select majors to ${type}!`,
		components: [createMajorsMenu(type)],
	});
}

export { data, execute };

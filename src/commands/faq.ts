import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import topics from "../util/faq.json";

const data = new SlashCommandBuilder()
	.setName("faq")
	.setDescription("Gives a description of the selected FAQ.")
	.addStringOption((option) =>
		option
			.setName("topic")
			.setDescription("The topic to learn about.")
			.setRequired(true)
			.addChoices(
				...topics.map((topic) => {
					return {
						name: topic.name,
						value: topic.name,
					};
				})
			)
	)
	.addUserOption((option) =>
		option.setName("tag").setDescription("The user to tag.")
	);

async function execute(interaction: ChatInputCommandInteraction) {
	const topic = interaction.options.getString("topic", true);
	const user = interaction.options.getUser("tag");

	const { answer } = topics.find((t) => t.name === topic) ?? {
		answer: "unknown",
	};

	await interaction.reply(
		`${user ? `Response for user ${user}:\n\n` : ""}${answer}`
	);
}

export { data, execute };

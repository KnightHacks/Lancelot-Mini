import {
	ChatInputCommandInteraction,
	EmbedBuilder,
	SlashCommandBuilder,
} from "discord.js";

const data = new SlashCommandBuilder()
	.setName("stats")
	.setDescription("Displays statistics for this guild");

async function execute(interaction: ChatInputCommandInteraction) {
	const members = interaction.guild?.members.cache;
	const { guild } = interaction;

	if (!members || !guild) {
		await interaction.reply("Error pulling up stats");
		return;
	}

	const totalOnline = members.filter(
		(member) => member.presence?.status === "online"
	).size;
	const totalMembers = members.size;
	const owner = (await guild.fetchOwner()).displayName;

	const embed = new EmbedBuilder()
		.setColor("#303a7a")
		.setTitle(`Server Info - ${guild.name}`)
		.setThumbnail(interaction.guild?.iconURL() ?? "")
		.addFields([
			{ name: "Created on:", value: guild.createdAt.toUTCString() },
			{ name: "Owner:", value: owner },
			{ name: "Total Online:", value: totalOnline.toString() },
			{ name: "Total Members:", value: totalMembers.toString() },
			{
				name: "Nitro Boosters: ",
				value: guild.premiumSubscriptionCount?.toString() ?? "0",
			},
		]);

	await interaction.reply({ embeds: [embed] });
}

export { data, execute };

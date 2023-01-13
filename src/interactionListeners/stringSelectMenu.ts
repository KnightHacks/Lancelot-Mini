import { GuildMember, Role, StringSelectMenuInteraction } from "discord.js";

export async function handleStringSelectMenuInteraction(
	interaction: StringSelectMenuInteraction
) {
	if (
		interaction.customId.indexOf("Role") !== -1 ||
		interaction.customId.indexOf("Major") !== -1
	) {
		await interaction.deferReply({ ephemeral: true });
		const member: GuildMember = interaction.member as GuildMember;
		const { values: roleNames } = interaction;
		const roles: Role[] = roleNames
			.map((roleName) => {
				const role = member.guild.roles.cache.find(
					(role) => role.name === roleName
				);
				if (!role) console.log(`Role lookup for ${roleName} failed!`);
				return role;
			})
			.filter((role): role is Role => !!role);

		const addingRole = interaction.customId.startsWith("add")
			? true
			: false;

		roles.forEach((role) => {
			try {
				addingRole ? member.roles.add(role) : member.roles.remove(role);
			} catch (error) {
				console.log("You already have this role.", error);
			}
		});

		await interaction.editReply({
			content: `Successfully ${
				addingRole ? "added" : "removed"
			} selected roles.`,
		});
	}
}

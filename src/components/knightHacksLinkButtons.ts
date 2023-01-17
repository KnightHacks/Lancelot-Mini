import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle } from "discord.js";

type LinkButtonData = { link: string; label: string };
const links: LinkButtonData[] = [
	{ link: "https://knighthacks.org/", label: "Website" },
	{ link: "https://knighthacks.org/linktree", label: "Link Tree" },
	{ link: "https://knighthacks.org/membership", label: "Membership Form" },
	{ link: "https://knighthacks.org/dues", label: "Pay Dues" },
	{ link: "https://knighthacks.org/ops", label: "Operations Meetings" },
];

const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
	links.map((data) => {
		return new ButtonBuilder()
			.setLabel(data.label)
			.setStyle(ButtonStyle.Link)
			.setURL(data.link);
	})
);

export { row as KnightHacksLinkButtons };

import {
	ActionRowBuilder,
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder,
} from "@discordjs/builders";

export const roles = [
	{
		label: "OPS",
		value: "OPS",
		description: "The Knight Hacks Operations Team",
		emoji: "892851216072183868",
	},
	{
		label: "Hack-A-Day Hacker",
		value: "Hack-A-Day Hacker",
		description: "Hacker participating in Hack-A-Day!",
	},
	{
		label: "Hack-A-Day Volunteer",
		value: "Hack-A-Day Volunteer",
		description: "Hacker participating in Hack-A-Day!",
	},
	{
		label: "Front End",
		value: "Front End",
		description: "Interest in front-end development.",
	},
	{
		label: "Back End",
		value: "Back End",
		description: "Interest in back-end development.",
	},
	{
		label: "Mobile",
		value: "Mobile",
		description: "Interest in mobile development.",
	},
	{
		label: "Python",
		value: "Python",
		description: "The Python programming language.",
		emoji: "624252356447567903",
	},
	{
		label: "Java",
		value: "Java",
		description: "The Java programming language.",
		emoji: "624252318027874357",
	},
	{
		label: "C++",
		value: "C++",
		description: "The C++ programming language.",
		emoji: "626922021581750272",
	},
	{
		label: "C",
		value: "C",
		description: "The C programming language",
		emoji: "892838124579868802",
	},
	{
		label: "C#",
		value: "C#",
		description: "The C# programming language.",
		emoji: "626922461996253204",
	},
	{
		label: "JavaScript",
		value: "JavaScript",
		description: "The JavaScript programming language.",
		emoji: "892848919984345118",
	},
	{
		label: "TypeScript",
		value: "TypeScript",
		description: "The TypeScript programming language.",
		emoji: "892837806332850256",
	},
	{
		label: "HTML/CSS",
		value: "HTML/CSS",
		description: "Static website creation/design technologies.",
		emoji: "892838896549896193",
	},
	{
		label: "Rust",
		value: "Rust",
		description: "The Rust programming language.",
		emoji: "626922021376360449",
	},
	{
		label: "Lua",
		value: "Lua",
		description: "The Lua programming language.",
		emoji: "626922021355257886",
	},
	{
		label: "Linux",
		value: "Linux",
		description: "The Linux kernel.",
		emoji: "626921471888850944",
	},
	{
		label: "Windows",
		value: "Windows",
		description: "The Windows operating system.",
		emoji: "624252389700010023",
	},
	{
		label: "MacOS",
		value: "MacOS",
		description: "The macOS operating system.",
		emoji: "892848628157272134",
	},
	{
		label: "Math",
		value: "Math",
		description: "The subject of mathematics.",
		emoji: "632647801590906940",
	},
	{
		label: "Physics",
		value: "Physics",
		description: "The subject of physics.",
		emoji: "892849713433423922",
	},
];

export const majors = [
	"Computer Science",
	"Computer Engineering",
	"Information Technology",
	"Engineering",
	"Biology",
	"Chemistry",
	"Mathematics",
	"Physics",
	"Digital Media - Web Design",
	"Digital Media - Game Design",
	"Communication",
	"Performing Arts",
	"Graphic Design",
	"Psychology",
	"Philosophy",
	"Business",
	"Medical",
	"Nursing",
	"Hospitality",
];

export function createRolesMenu(
	type: string
): ActionRowBuilder<StringSelectMenuBuilder> {
	return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
		new StringSelectMenuBuilder()
			.setCustomId(type + "Role")
			.setPlaceholder("Nothing selected")
			.setMinValues(1)
			.setMaxValues(10)
			.addOptions(
				roles.map((role) => {
					return new StringSelectMenuOptionBuilder()
						.setLabel(role.label)
						.setValue(role.value)
						.setEmoji({ id: role.emoji })
						.setDescription(role.description);
				})
			)
	);
}

export function createMajorsMenu(
	type: string
): ActionRowBuilder<StringSelectMenuBuilder> {
	return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
		new StringSelectMenuBuilder()
			.setCustomId(type + "Major")
			.setPlaceholder("Nothing selected")
			.setMinValues(1)
			.setMaxValues(5)
			.addOptions(
				majors.map((major) => {
					return new StringSelectMenuOptionBuilder()
						.setLabel(major)
						.setValue(major);
				})
			)
	);
}

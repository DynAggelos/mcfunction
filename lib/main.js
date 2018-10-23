const provider = require("./provider.js");
module.exports = {

	config: {
		autocomplete: {
			title: "Enable Autocomplete",
			description: "Enable mcfunction's autocomplete+ manager",
			type: "boolean",
			default: true
		},
        mcprefix: {
			title: "Enable Minecraft ID Prefix",
			description: "Enable use of \"minecraft:\" for blocks, entities, enchantments, recipes, advancements, etc.",
			type: "boolean",
			default: false
		}
	},

	activate: () => {},

	getProvider: () => provider
}

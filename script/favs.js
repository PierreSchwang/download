var vault = {
	"label": "Vault - for persistent toggles on Spigot",
	"url": "https://dev.bukkit.org/bukkit-plugins/vault/"
}

var projects = {
	"Spigot 1.13.2 - 1.15.2": {
		"download": [
			{
				"label": "Download FAVS",
				"url": "https://ci.athion.net/job/FastAsyncVoxelSniper-flattening/lastSuccessfulBuild/artifact/build/libs/",
				"regex": "FastAsyncVoxelSniper-flattened-",
				"ext": "jar"
            }
		],
		"dependencies": [
			vault,
		],
		"config_path": "plugins"
	},
	"Spigot 1.7.10 - 1.12.2": {
		"download": [
			{
				"label": "Download FAVS",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncVoxelSniper-favs",
				"ext": "jar"
            },
            {
				"label": "Note: FAVS requires FAWE to work"
			},
			{
				"label": "Download FAWE",
				"url": "https://intellectualsites.github.io/download/fawe.html",
			}
		],
		"dependencies": [
			vault,
		],
		"config_path": "plugins"
	},
}

projectDefault = "Spigot 1.13.2 - 1.15.2";

var web_interface = {
	"label": "Web interface (Instead of using the public one)",
	"url": "https://www.dropbox.com/s/pyumuk30ce1ocdi/FaweUpload.zip?dl=1"
}
var asset_interface = {
	"label": "Asset interface - to host private assets",
	"url": "https://empcraft.com/assetpack/source.zip"
}

var vault = {
	"label": "Vault - for persistent toggles on Spigot",
	"url": "https://dev.bukkit.org/bukkit-plugins/vault/"
}
var blocks_hub = {
	"label": "BlocksHub - integration with third party logging plugins on Spigot",
	"url": "https://github.com/boy0001/FastAsyncWorldedit/wiki/Third-party-loggers"
}

var projects = {
	"Spigot 1.13.2 - 1.15.1": {
		"download": [
			{
				"label": "Download FAWE (Development Snapshot - NOT STABLE)",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit-1.15/lastSuccessfulBuild/artifact/worldedit-bukkit/build/libs/",
				"regex": "FastAsyncWorldEdit-",
				"ext": "jar"
			},
			{
				"label": "Do not install WorldEdit (FAWE is a replacement)"
			},
			{
				"label": "Do not use these builds on a production server!"
			},
			{
				"label": "Note: Delete your FastAsyncWorldEdit folder if you are updating from an earlier version."
			},
			{
				"label": "Download FastAsyncVoxelSniper (FAVS)",
				"url": "http://ci.athion.net/job/FastAsyncVoxelSniper-flattening/lastSuccessfulBuild/artifact/build/libs/",
				"regex": "FastAsyncVoxelSniper-flattened-",
				"ext": "jar"
			}
		],
		"dependencies": [
			vault,
			blocks_hub,
			web_interface,
			asset_interface,
		],
		"config_path": "plugins"
	},
	"Spigot 1.7.10 - 1.12.2": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-bukkit",
				"ext": "jar"
			},
			{
				"label": "Download FastAsyncVoxelSniper (FAVS)",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncVoxelSniper-favs",
				"ext": "jar"
			},
			{
				"label": "WorldEdit & VoxelSniper will be installed automatically"
			}
		],
		"dependencies": [
			vault,
			blocks_hub,
			web_interface,
			asset_interface,
		],
		"config_path": "plugins"
	},
	"Nukkit": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-nukkit",
				"ext": "jar"
			},
			{
				"label": "Install DBLib",
				"url": "https://github.com/fromgate/DbLib/releases/download/0.2.3/DbLib.jar"
			}
		],
		"dependencies": [
			web_interface,
			asset_interface,

		],
		"config_path": "plugins"
	},
	"Forge 1.12": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge112",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2460570",
				
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Forge 1.11": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge111",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2355945"
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Forge 1.10": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge110",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2328371",
				
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Forge 1.9.4": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge194",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2309681",
				
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Forge 1.8.9": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge189",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2275930",
				
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Sponge 1.12": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-sponge112",
				"ext": "jar"
			}
		
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
	"Sponge 1.11": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-sponge111",
				"ext": "jar"
			}
		
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	}
}

projectDefault = "Spigot 1.13-1.15";

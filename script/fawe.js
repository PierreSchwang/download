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
	"Bukkit 1.13.2": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit-Breaking/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-bukkit",
				"ext": "jar"
			},
			{
				"label": "Download FAVS",
				"url": "http://ci.athion.net/job/FastAsyncVoxelSniper-1.13+/lastSuccessfulBuild/artifact/build/libs/",
				"regex": "FastAsyncVoxelSniper-favs",
				"ext": "jar"
			},
			{
				"label": "Do not install WorldEdit (FAWE is a replacement)"
			}
		],
		"dependencies": [
			web_interface,
			asset_interface,
			vault,
			blocks_hub
		],
		"config_path": "plugins"
	},
	"Bukkit 1.8-1.12.2": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncWorldEdit-bukkit",
				"ext": "jar"
			},
			{
				"label": "Download FAVS",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncVoxelSniper-favs",
				"ext": "jar"
			},
			{
				"label": "WorldEdit & VoxelSniper will be installed automatically"
			}
		],
		"dependencies": [
			web_interface,
			asset_interface,
			vault,
			blocks_hub
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
	"forge 1.10": {
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
	"Forge 1.7.10": {
		"download": [
			{
				"label": "Download FAWE",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/1231/artifact/target/",
				"regex": "FastAsyncWorldEdit-forge1710",
				"ext": "jar"
			},
			{
				"label": "Install WorldEdit into mods",
				"url": "https://minecraft.curseforge.com/projects/worldedit/files/2309699",
				
			}
		],
		"dependencies": [
			web_interface,
			asset_interface
		],
		"config_path": "mods"
	},
}

projectDefault = "Bukkit 1.13.2";
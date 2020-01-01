var projects = {
	"Spigot 1.13 - 1.15.1": {
		"download": [
			{
				"label": "Download HoloPlots (Latest Release Build)",
                "url": "https://ci.athion.net/job/HoloPlots/lastSuccessfulBuild/artifact/target/",
                "regex": "HoloPlots",
				"ext": "jar"
            },
            {
                "label": "Note: HoloPlots requires ProtocolLib and HolographicDisplays to work. You can download it below."
            },
            {
				"label": "Download ProtocolLib",
                "url": "https://www.spigotmc.org/resources/protocollib.1997/download?version=306586",
            },
            {
				"label": "Download HolographicDisplays",
                "url": "https://ci.codemc.io/job/filoghost/job/HolographicDisplays/lastSuccessfulBuild/artifact/",
                "regex": "HolographicDisplays-",
                "ext": "jar"
            },
		]
    },
    "Spigot 1.8 - 1.12.2": {
		"download": [
			{
				"label": "Download HoloPlots (Latest Release Build)",
                "url": "https://www.spigotmc.org/resources/holoplots.4880/download?version=98388",
            },
            {
                "label": "Note: HoloPlots requires ProtocolLib and HolographicDisplays to work. You can download it below."
            },
            {
				"label": "Download ProtocolLib",
                "url": "https://www.spigotmc.org/resources/protocollib.1997/download?version=306586",
            },
            {
				"label": "Download HolographicDisplays",
                "url": "https://dev.bukkit.org/projects/holographic-displays/files/2430907/download",
            },
		]
	}
}

projectDefault = "Spigot 1.13 - 1.15.1";

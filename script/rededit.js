var fawe = {
    "label": "Download FastAsyncWorldEdit",
    "url": "https://www.spigotmc.org/resources/fast-async-worldedit-voxelsniper.13932/",
}
var plots = {
    "label": "Download PlotSquared",
    "url": "https://www.spigotmc.org/resources/plotsquared.1177/",
}
var redis = {
    "label": "Download and install Redis",
    "url": "https://redis.io/"
}
var projects = {
	"bukkit 1.7-1.12": {
		"download": [
			{
				"label": "Download RedEdit",
				"url": "http://ci.athion.net/view/Everything/job/RedEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "RedEdit",
				"ext": "jar"
            },
            fawe,
            plots,
            redis
		],
		"dependencies": [
            {
                "label": "PlotHTTP - web interface to upload/download worlds",
                "url": "https://ci.athion.net/view/Everything/job/PlotHTTP/"
            }
        ],
        "config_path": "plugins"
    },
    "bukkit 1.13-1.14": {
		"download": [
			{
				"label": "Download RedEdit",
				"url": "http://ci.athion.net/view/Everything/job/RedEdit-1.13/lastSuccessfulBuild/artifact/target/",
				"regex": "RedEdit",
				"ext": "jar"
            },
            fawe,
            plots,
            redis
		],
		"dependencies": [
            {
                "label": "PlotHTTP - web interface to upload/download worlds",
                "url": "https://ci.athion.net/view/Everything/job/PlotHTTP-Breaking/"
            }
        ],
        "config_path": "plugins"
    }
}
projectDefault = "bukkit 1.7-1.12";
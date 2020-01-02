var fawe = {
    "label": "Download FastAsyncWorldEdit",
    "url": "https://intellectualsites.github.io/download/fawe.html",
}
var plots = {
    "label": "Download PlotSquared",
    "url": "https://intellectualsites.github.io/download/plots.html",
}
var redis = {
    "label": "Download and install Redis",
    "url": "https://redis.io/"
}
var projects = {
    "Spigot 1.13 - 1.15.1": {
		"download": [
			{
				"label": "Download RedEdit (Experimental Builds)",
				"url": "http://ci.athion.net/view/Everything/job/RedEdit-1.13/lastSuccessfulBuild/artifact/target/",
				"regex": "RedEdit",
				"ext": "jar"
            },
            {
                "label": "Note: RedEdit requires Fawe, PlotSquared and Redis to work. You can download them below."
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
    },
    "Spigot 1.7 - 1.12.2": {
		"download": [
			{
				"label": "Download RedEdit (Experimental Builds)",
				"url": "http://ci.athion.net/view/Everything/job/RedEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "RedEdit",
				"ext": "jar"
            },
            {
                "label": "Note: RedEdit requires Fawe, PlotSquared and Redis to work. You can download them below."
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
    }
}
projectDefault = "Spigot 1.13-1.14";
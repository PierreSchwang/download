var query = window.location.search;
if (query == "") {
	query = projectDefault;
} else {
	query = query.substring(1);
}

function loadDefer(elem) {
	if(elem.getAttribute('defer-src')) {
		elem.setAttribute('src',elem.getAttribute('defer-src'));
	}
}

function init() {
	var selector = document.getElementById("version_select");

	var i = 1;
	for (var version of Object.keys(projects)) {
		i++;
		var option = document.createElement("option");
		option.text = version;
		option.value = i + "";
		selector.add(option);
		if (query == version) {
			selector.value = option.value;
		}
	}

	generateLinks();
	
	// display script
	var scriptElems = document.getElementsByClassName('script');
	for (var key in Object.keys(scriptElems)) {
		scriptElems[key].style.display = 'table';
	}

	// Load deffered images
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) loadDefer(imgDefer[i]);

	var iframeDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<iframeDefer.length; i++) loadDefer(iframeDefer[i]);
}
document.addEventListener("DOMContentLoaded", init);

function generateLinks() {
	var selector = document.getElementById("version_select");
	var downloadDom = document.getElementById("download");
	var dependenciesDom = document.getElementById("dependencies");
	var config_path = document.getElementById("config_path");
	
	downloadDom.innerHTML = "";
	dependenciesDom.innerHTML = "";
	
	var selected = selector.options[selector.selectedIndex];
	var project = projects[selected.text];
	
	var downloads = project["download"];
	for (var key of Object.keys(downloads)) {
		var dl = downloads[key]
		
		var label = dl["label"];
		var entry = document.createElement('li');
		if (dl.hasOwnProperty("url")) {
			entry.classList.add('dlbutton');
			var url = dl["url"];
			if (dl.hasOwnProperty("regex")) {
				url = "https://empcraft.com/download?url=" + encodeURIComponent(url) + "&name=" + dl["regex"] + "&ext=" + dl["ext"];
			}
			entry.innerHTML = "<a href='" + url + "'>" + label + "</a>";
		} else {
			entry.classList.add('label');
			entry.innerHTML = label;
		}
		downloadDom.appendChild(entry);
	}
	
	var deps = project["dependencies"];
	for (var key of Object.keys(deps)) {
		var dependency = deps[key]
		var label = dependency["label"];
		var url = dependency["url"];
		
		var entry = document.createElement('li');
		entry.classList.add('dlbutton');
		entry.innerHTML = "<a href='" + url + "'>" + label + "</a>";
		dependenciesDom.appendChild(entry);
	}
	
	config_path.innerHTML = project["config_path"];
}
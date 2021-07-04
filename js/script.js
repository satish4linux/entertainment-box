
function processTvShow() {
	const listItems = document.getElementById("tvShow_ul").getElementsByTagName("li");
	const len = listItems.length;
	for(let i=0;i<len;i++) {

		//create anchor element around this list item
		var anchor = document.createElement('a');
		anchor.setAttribute("href",generateUrl("TV Show",listItems[i]));
		anchor.setAttribute("target","_blank");
		anchor.style.textDecoration="inherit";
		anchor.style.color="black";
		anchor.innerText=listItems[i].innerText;

		let listItem = listItems[i];
		listItem.removeChild(listItems[i].childNodes[0]);
		listItem.appendChild(anchor);
	}
}

function processMovieSeries() {
	const listItems = document.getElementById("movieSeries_ul").getElementsByTagName("li");
	const len = listItems.length;
	for(let i=0;i<len;i++) {

		//create anchor element around this list item
		var anchor = document.createElement('a');
		anchor.setAttribute("href",generateUrl("Movie Series",listItems[i]));
		anchor.setAttribute("target","_blank");
		anchor.style.textDecoration="inherit";
		anchor.style.color="black";
		anchor.innerText=listItems[i].innerText;

		let listItem = listItems[i];
		listItem.removeChild(listItems[i].childNodes[0]);
		listItem.appendChild(anchor);
	}
}

function processMovie() {
	const listItems = document.getElementById("movie_ul").getElementsByTagName("li");
	const len = listItems.length;
	for(let i=0;i<len;i++) {

		//create anchor element around this list item
		var anchor = document.createElement('a');
		anchor.setAttribute("href",generateUrl("Movie",listItems[i]));
		anchor.setAttribute("target","_blank");
		anchor.style.textDecoration="inherit";
		anchor.style.color="black";
		anchor.innerText=listItems[i].innerText;

		let listItem = listItems[i];
		listItem.removeChild(listItems[i].childNodes[0]);
		listItem.appendChild(anchor);
	}
}

function generateUrl(header,item) {
	var name = item.innerText.replaceAll(" ","%20");
	let queryStr = '';
	if(header.includes("TV Show")) {
		queryStr = name+"%20TV%20Show";
	} else if(header.includes("Movie Series")) {
		queryStr = name+"%20Movie%20Franchise";
	} else if(header.includes("Movie")) {
		queryStr = name+"%20Movie";
	}
	return "https://www.google.com/search?q="+queryStr;
}

function addListItemHover() {
	var css = 'ul li:hover { text-shadow: 0 0 1px #0FFFFF;}';
	var style = document.createElement('style');
	if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	} else {
	    style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
}

processTvShow();
processMovieSeries();
processMovie()
addListItemHover();
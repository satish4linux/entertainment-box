
function addIdColumn() {
	var elements = document.getElementsByClassName("tableElement");
	for(j=0;j<elements.length;j++) {
		var rows = elements[j].rows;
		id=1;
		for(i=1;i<rows.length;i++) {
			// generate Id element for each row
			var td = document.createElement('td');
			td.innerText=id++;
			rows[i].insertBefore(td,rows[i].childNodes[0]);
		}
	}
}
addIdColumn();

function colorHeaders() {
	var elements = document.getElementsByClassName("tableElement");
	for(i=0;i<elements.length;i++) {
		elements[i].style.border= "medium dotted indigo";
		elements[i].style.boxShadow = "0px 0px 15px black";
		elements[i].tHead.style.backgroundColor = "green";
		elements[i].tHead.style.color= "white";
	}
}

function processRows() {
	var color = ["indigo", "black", "purple", "maroon"];
	var elements = document.getElementsByClassName("tableElement");
	for(j=0;j<elements.length;j++) {
		colorId = j;
		var rows = elements[j].rows;
		header = rows[0].innerText;
		for(i=1;i<rows.length;i++) {

			var generateUrl = function(header,row) {
				name = row.cells[1].innerText.replaceAll(" ","%20");
				queryStr = '';
				if(header.includes("TV Show")) {
					queryStr = name+"%20TV%20Show";
				} else if(header.includes("Movie Series")) {
					queryStr = name+"%20Movie%20Franchise";
				} else if(header.includes("Movie")) {
					queryStr = name+"%20Movie";
				}
				elementUrl = "https://www.google.com/search?q="+queryStr;
				return elementUrl;
			}
			//create anchor element around this row
			var anchor = document.createElement('a');
			anchor.setAttribute("href",generateUrl(header,rows[i]));
			anchor.setAttribute("target","_blank");
			anchor.style.textDecoration="inherit";
			anchor.style.color="white";
			anchor.innerText=rows[i].cells[1].innerText;
			innerTD = rows[i].childNodes[1];
			innerTD.removeChild(innerTD.childNodes[0]);
			innerTD.appendChild(anchor);

			rows[i].style.backgroundColor = color[colorId]; 
			rows[i].style.color="white";
			rows[i].style.cursor = "pointer";
			colorId = (colorId+1)%color.length;
		}
	}
}

function addRowHover() {
	var css = 'table tr:hover {box-shadow: 0 0 50px #4b0082;}\ntable tr:hover td {text-align:center;text-shadow: 0 0 1px #4b0082;}';
	var style = document.createElement('style');
	if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	} else {
	    style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
}

// Logic for adding "Go to Top"

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
colorHeaders();
processRows();
addRowHover();
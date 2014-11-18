//init functions
//
function init() {
	console.log("Call function Ready()");
}

$(init);

//data obtaining
function readData() {
	var data = $("#elements").val();
	data = splitToArray(data);
	toProcessing(data);
}

function splitToArray(data) {
	var dataArray = data.trim().split(/\s+/);
	console.log(dataArray);
	return dataArray;
}

function toProcessing(dataArray) {
	classifyElements(evenElement, dataArray);
	classifyElements(oddElement, dataArray);
	classifyElements(evenIndex, dataArray);
	classifyElements(oddIndex, dataArray);
}

//data classification
function classifyElements(filter, dataArray) {
	if (dataArray === null) {
		return;
	}
	var dataArrayClassified = [];
	dataArray.forEach(function(element, index) {
		if (filter(element, index)) {
			console.log(filter.name + " " + element);
			dataArrayClassified.push(element);
		}
	});
	display(filter, dataArrayClassified);
}

//data display
function display(filter, elementsArray) {
	if (elementsArray === null) {
		return;
	}

	$('ul#' + filter.name + ' li').remove(); //flush

	if (elementsArray.length > 0) {
		for (var i = elementsArray.length - 1; i >= 0; i--) {
			$('ul#' + filter.name + '').append('<li>' + elementsArray[i] + '</li>');
		}
	}
}

//Strategy objects;
// Position: even odd. Element: even odd.
function evenIndex(element, index) {
	if ((index + 1) % 2 === 0) {
		return true;
	}
	return false;
}

function oddIndex(element, index) {
	if ((index + 1) % 2 > 0) {
		return true;
	}
	return false;
}

function evenElement(element, index) {
	if (element % 2 === 0) {
		return true;
	}
	return false;
}

function oddElement(element, index) {
	if (element % 2 > 0) {
		return true;
	}
	return false;
}



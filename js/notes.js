$(document).ready(function () {

	// Load from localStorage
	$('#page').html(localStorage.getItem('notes'));
	formatText('enableObjectResizing')

	// Save to localStorage
	$('#page').keyup(function () {
		save();
	});

	// Create dropdown
	$('.style-set').selectbox();
	
	// Styles
	$('#style .bold').mousedown(function () {formatText('bold');return false;});
	$('#style .italic').mousedown(function () {formatText('italic');return false;});
	$('#style .underline').mousedown(function () {formatText('underline');return false;});

	// Alignment
	$('#align .left').mousedown(function () {formatText('justifyLeft');return false;});
	$('#align .center').mousedown(function () {formatText('justifyCenter');	return false;});
	$('#align .right').mousedown(function () {formatText('justifyRight');return false;});

	// Style Set
	$('#settings .style-set').change(function () {formatText('formatBlock', this.value)});

	// Other
	$('#other .list').mousedown(function () {formatText('insertUnorderedList');return false;});
	$('#other .link').mousedown(function (e) {
		if (e.altKey) {
			formatText('unlink', url);
		} else {
			var url = prompt("Enter URL");
			if(url) {
				formatText('createLink', url);
			}
		}
		
		return false;
	});
	$('#other .image').mousedown(function () {
		var url = prompt("Enter URL");
		if(url) {
			formatText('insertImage', url);
		}
	});
});

function formatText(command, option) {
	document.execCommand(command, false, option);
	save();
}

function save() {
	localStorage.setItem('notes', $('#page').html());
}
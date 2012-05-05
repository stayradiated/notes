$(document).ready(function () {

	// Load from localStorage
	$('#page').html(localStorage.getItem('notes'));

	// Save to localStorage
	$('#page').keydown(function () {
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
});

function formatText(command, option) {
	document.execCommand(command, false, option);
	save();
}

function save() {
	localStorage.setItem('notes', $('#page').html());
}
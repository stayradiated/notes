$(document).ready(function () {

	$('.style-set').selectbox();
	
	$('#style .bold').mousedown(function () {formatText('bold');return false;});
	$('#style .italic').mousedown(function () {formatText('italic');return false;});
	$('#style .underline').mousedown(function () {formatText('underline');return false;});

	$('#align .left').mousedown(function () {formatText('justifyLeft');return false;});
	$('#align .center').mousedown(function () {formatText('justifyCenter');	return false;});
	$('#align .right').mousedown(function () {formatText('justifyRight');return false;});

	$('#settings .style-set').change(function () {formatText('formatBlock', this.value)})

});

function formatText(command, option) {
	document.execCommand(command, false, option);
}
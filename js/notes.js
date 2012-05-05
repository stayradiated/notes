$(document).ready(function () {

	$('.family').selectbox();
	
	$('#style .bold').mousedown(function () {formatText('bold');return false;});
	$('#style .italic').mousedown(function () {formatText('italic');return false;});
	$('#style .underline').mousedown(function () {formatText('underline');return false;});

	$('#align .left').mousedown(function () {formatText('justifyLeft');return false;});
	$('#align .center').mousedown(function () {formatText('justifyCenter');	return false;});
	$('#align .right').mousedown(function () {formatText('justifyRight');return false;});

	$('#settings .family').change(function () {formatText('fontName', this.value)})

});

function getSelText () {
	var txt = '';

	if (window.getSelection) {
		txt = window.getSelection();

	} else if (document.getSelection) {
		txt = document.getSelection();

	} else if (document.selection) {
		txt = document.selection.createRange().text;

	} else return;

	return txt;
}

function formatText(command, option) {
	document.execCommand(command, false, option);
}
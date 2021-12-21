// Итоговый вариант, умеющий ставить фокус на редактор кода + нажимать последнюю кнопку в панели (проверка или переход к следующему заданию \ занятию)
document.addEventListener('keydown', function(event) {
  if (event.code == 'Backslash' && (event.ctrlKey || event.metaKey)){
	if (!document.shortKeys) document.shortKeys = {};
	if (!document.shortKeys.editor) document.shortKeys.editor = document.querySelector('.code-editor textarea');
	if (!document.shortKeys.btnPanel) document.shortKeys.btnPanel = document.querySelector('.trainer-footer__actions');	
	if (event.shiftKey)
		document.shortKeys.btnPanel.children[document.shortKeys.btnPanel.childElementCount - 1].click();
	else
		document.shortKeys.editor.focus();
  }
});


// Делаем элементы 'code' - с возможностью быстрого копирования
[...document.querySelectorAll('code.code-inline')].forEach(v => {
	v.style.cursor = 'pointer';
	v.addEventListener('click', (e) => navigator.clipboard.writeText(e.target.innerText));
});